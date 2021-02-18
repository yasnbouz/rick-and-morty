import * as pw from 'playwright-chromium';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import pMap from 'p-map';
import { storeData, storePath } from './utils';

async function withBrowser(fn) {
  let browser = null;
  try {
    browser = await pw.chromium.launch({ headless: true, chromiumSandbox: false });
    const context = await browser.newContext();
    const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    return await fn(context, blocker);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
function withPage(context, blocker) {
  return async function Page(fn) {
    let page = null;
    try {
      page = await context.newPage();
      await blocker.enableBlockingInPage(page);

      return await fn(page);
    } finally {
      if (page) {
        await page.close();
      }
    }
  };
}

export async function ScrapData() {
  await withBrowser(async (context, blocker) => {
    const episodesUrls: string[] = await withPage(
      context,
      blocker,
    )(async (page) => {
      // scrap all eoisodes urls

      await page.goto(`https://www.tvseries.watch/series/rick-and-morty/`);
      const urls = await page.$$eval(`.stepisodelink > a[href*="/rick-and-morty"]`, (elms) => elms.map((el) => `https://www.tvseries.watch${el.getAttribute(`href`)}`));
      return urls;
    });

    async function iteratePage(url) {
      const episodeData = await withPage(
        context,
        blocker,
      )(async (pageX) => {
        await pageX.goto(url);
        const title = await pageX.$eval(`.stthse h2`, (el) => el.textContent);
        const season = title.substring(0, 9).trim();
        const episode = title.slice(9).trim();

        const handeFrame = await pageX.$(`#videoctn iframe`);
        const frame = await handeFrame.contentFrame();
        await frame.click(`div[role="button"][aria-label="Play"].jw-icon-display`);
        const video = await frame.$eval(`video.jw-video`, (el) => el.getAttribute(`src`));
        return { season, episode, video };
      });
      return episodeData;
    }
    const data = await pMap(episodesUrls, iteratePage, { concurrency: 6 });
    storeData(data, storePath);
  });
}

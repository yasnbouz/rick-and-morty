import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import * as pw from 'playwright';
import pMap from 'p-map';
import { storeData, storePath } from './utils';

async function withBrowser(fn) {
  const browser = await pw.firefox.launch();
  const context = await browser.newContext();
  try {
    return await fn(context);
  } finally {
    await browser.close();
  }
}
function withPage(context) {
  return async function Page(fn) {
    const page = await context.newPage();
    try {
      return await fn(page);
    } finally {
      await page.close();
    }
  };
}

export async function ScrapData() {
  const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
  await withBrowser(async (context) => {
    const episodesUrls: string[] = await withPage(context)(async (page) => {
      // scrap all eoisodes urls
      await blocker.enableBlockingInPage(page);

      await page.goto(`https://www.tvseries.watch/series/rick-and-morty/`);
      const urls = await page.$$eval(`.stepisodelink > a[href*="/rick-and-morty"]`, (elms) => elms.map((el) => `https://www.tvseries.watch${el.getAttribute(`href`)}`));
      return urls;
    });

    async function iteratePage(url) {
      const episodeData = await withPage(context)(async (pageX) => {
        await blocker.enableBlockingInPage(pageX);
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

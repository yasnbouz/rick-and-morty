import * as pw from 'playwright-aws-lambda';
import pMap from 'p-map';
import { storeData, storePath } from './utils';

async function withBrowser(fn) {
  let browser = null;
  try {
    browser = await pw.launchChromium({
      headless: true,
      chromiumSandbox: false,
    });
    const context = await browser.newContext();

    await context.route(`**/*`, (route) => {
      const url = route.request().url();
      const ressourceType = route.request().resourceType();
      const requestTypeBlackList = [`image`, `stylesheet`, `font`];
      const urlBlackList = [`google`, `recaptcha`, `statcounter`, `stats.wp`, `static.arc.io`, `core.arc.io`, `referrer.disqus.com`];
      const shoultAbort = requestTypeBlackList.some((el) => ressourceType.includes(el)) || urlBlackList.some((str) => url.includes(str));
      return shoultAbort ? route.abort() : route.continue();
    });

    return await fn(context);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
function withPage(context) {
  return async function Page(fn) {
    let page = null;
    try {
      page = await context.newPage();

      return await fn(page);
    } finally {
      if (page) {
        await page.close();
      }
    }
  };
}

export async function ScrapData() {
  await withBrowser(async (context) => {
    const episodesUrls = await withPage(context)(async (page) => {
      // scrap all eoisodes urls

      await page.goto(`https://uniquestream.vip/tvshows/rick-and-morty/`);
      const urls = await page.$$eval(`.episodiotitle > a[href*="/rick-and-morty"]`, (elms) => elms.map((el) => el.getAttribute(`href`)));
      return urls;
    });

    async function iteratePage(url) {
      const episodeData = await withPage(context)(async (pageX) => {
        await pageX.goto(url);
        const title = await pageX.$eval(`#info h1`, (el) => el.textContent);
        const EpTitle = await pageX.$eval(`#info h3`, (el) => el.textContent);
        const semiIndex = title.indexOf(`:`) + 1;
        const temp = title.slice(semiIndex).trim();
        const indexOfX = temp.indexOf(`x`);
        const season = `Season ${temp.slice(0, indexOfX)}`;
        const episode = `Episode ${temp.slice(indexOfX + 1)}: ${EpTitle}`;

        const handeFrame = await pageX.waitForSelector(`#dooplay_player_response > div > iframe`);
        const frame = await handeFrame.getAttribute(`src`);

        return { season, episode, frame };
      });
      return episodeData;
    }
    const data = await pMap(episodesUrls, iteratePage, { concurrency: 6 });
    storeData(data, storePath);
  });
}

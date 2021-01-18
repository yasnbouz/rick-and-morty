import { Episode } from '@/generated/graphql';

export type MyEpisode = {
  name: string;
  title: string;
};

export type Season = {
  season: string;
  episodes: MyEpisode[];
};

export function buildSeasons(data: Episode[]): Season[] {
  let seasonIndex = 0;
  let prevSeasonIndex = seasonIndex;

  return data?.reduce((acc, cur) => {
    const seasonName = cur.episode.slice(0, 3).replace(/^S0?/, `Season `);
    const episodeName = cur.episode.slice(3).replace(/^E0?/, `Episode `);
    const episode = { name: episodeName, title: cur.name };
    const season = { season: seasonName, episodes: [episode] };
    if (acc[prevSeasonIndex]?.season !== seasonName) {
      acc[seasonIndex] = season;
      prevSeasonIndex = seasonIndex;
      seasonIndex += 1;
    } else {
      acc[prevSeasonIndex]?.episodes.push(episode);
    }
    return acc;
  }, []);
}
export function getSeasons(newData: Season[]): string[] {
  return newData?.map((s) => s.season);
}
export function getEpisodes(newData: Season[], selectedSeason: string): MyEpisode[] {
  let curEps;
  newData?.forEach((elm) => {
    if (elm.season === selectedSeason) {
      curEps = elm.episodes;
    }
  });
  return curEps;
}

export type MyEpisode = {
  name: string;
  title: string;
  frame: string;
};

export type Season = {
  season: string;
  episodes: MyEpisode[];
};
interface IData {
  season: string;
  episode: string;
  frame: string;
}
export function buildSeasons(data: IData[]): Season[] {
  let seasonIndex = 0;
  let prevSeasonIndex = seasonIndex;

  return data?.reduce((acc, cur) => {
    const semiIndex = cur.episode.indexOf(`:`);
    const episodeName = cur.episode.slice(0, semiIndex).trim();
    const episodeTitle = cur.episode.slice(semiIndex + 1).trim();
    const episode = { name: episodeName, title: episodeTitle, frame: cur.frame };
    const season = { season: cur.season, episodes: [episode] };

    if (acc[prevSeasonIndex]?.season !== cur.season) {
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

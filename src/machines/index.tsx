import { assign, createMachine } from 'xstate';
import { getEpisodes, getSeasons, MyEpisode, Season } from '@/utils';

interface animeContext {
  data: Season[];
  seasons: string[];
  currentSeason: string;
  episodes: MyEpisode[];
  currentEpisode: MyEpisode;
}

export const animeMachine = createMachine<animeContext>(
  {
    id: `seasons`,
    initial: `initial`,
    context: {
      data: null,
      seasons: [],
      currentSeason: null,
      episodes: [],
      currentEpisode: null,
    },
    states: {
      initial: {
        entry: [`initSeasons`, `initSeason`, `initEpisodes`, `initEpisode`],
        on: {
          setCurrentSeason: {
            actions: [`setSeason`, `initEpisodes`, `initEpisode`],
          },
          setCurrentEpisode: {
            actions: `setEpisode`,
          },
        },
      },
    },
  },
  {
    actions: {
      initSeasons: assign({
        seasons: (ctx) => getSeasons(ctx.data),
      }),
      initSeason: assign({
        currentSeason: (ctx) => ctx.seasons?.[0],
      }),
      setSeason: assign({
        currentSeason: (ctx, event) => event.season,
      }),
      initEpisodes: assign({
        episodes: (ctx) => getEpisodes(ctx.data, ctx.currentSeason),
      }),
      initEpisode: assign({
        currentEpisode: (ctx) => ctx.episodes?.[0],
      }),
      setEpisode: assign({
        currentEpisode: (ctx, event) => event.episode,
      }),
    },
  },
);

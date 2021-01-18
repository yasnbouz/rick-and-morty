import { useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledLoader, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useGetAllEpisodesQuery } from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import { buildSeasons, getEpisodes, getSeasons } from '@/utils';
import 'vimond-replay/index.css';

const Replay = dynamic<any>(() => import(`vimond-replay`).then((mod) => mod.Replay), {
  ssr: false,
  loading: () => (
    <div className="wrapper">
      <StyledLoader />
    </div>
  ),
});

export default function Episodes() {
  const { data } = useGetAllEpisodesQuery(client);

  const seasonsData = useMemo(() => buildSeasons(data.episodes.results), [data]);
  const listRef = useRef<HTMLUListElement>(null);
  useScrollEnd(listRef);
  const seasons = useMemo(() => getSeasons(seasonsData), [seasonsData]);
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const episodes = useMemo(() => getEpisodes(seasonsData, selectedSeason), [seasonsData, selectedSeason]);
  const [selectedEp, setSelectedEp] = useState(() => episodes[0].title);
  useEffect(() => {
    setSelectedEp(episodes?.[0].title);
  }, [episodes]);
  return (
    <StyledEpisodes>
      <StyledSectionTitle id="episodes">Episodes</StyledSectionTitle>
      <StyledGrid>
        <StyledSeasonList>
          {seasons?.map((season) => (
            <li key={season}>
              <button type="button" className={`${selectedSeason === season ? `activeSe` : ``}`} onClick={() => setSelectedSeason(season)}>
                {season}
              </button>
            </li>
          ))}
        </StyledSeasonList>
        <StyledVideoContainer>
          <Replay
            source={{ streamUrl: `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4` }}
            initialPlaybackProps={{ isPaused: true, isMuted: false, volume: 0.2 }}
          />
        </StyledVideoContainer>
        <StyledEpisodeList>
          <h3>Episodes</h3>
          <ul ref={listRef}>
            {episodes?.map((ep) => (
              <li key={ep.name}>
                <button type="button" className={`${ep.title === selectedEp ? `activeEp` : ``}`} title={ep.title} onClick={() => setSelectedEp(ep.title)}>
                  <span>{ep.name} : </span>
                  <span>{ep.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </StyledEpisodeList>
      </StyledGrid>
    </StyledEpisodes>
  );
}

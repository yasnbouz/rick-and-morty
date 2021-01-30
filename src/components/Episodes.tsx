import { useGetAllEpisodes, useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledLoader, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
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
  const { data } = useGetAllEpisodes();
  const seasonsData = useMemo(() => buildSeasons(data), [data]);
  const listRef = useRef<HTMLUListElement>(null);
  useScrollEnd(listRef);
  const seasons = useMemo(() => getSeasons(seasonsData), [seasonsData]);
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const episodes = useMemo(() => getEpisodes(seasonsData, selectedSeason), [seasonsData, selectedSeason]);
  const [selectedEp, setSelectedEp] = useState(() => episodes[0]);

  useEffect(() => {
    setSelectedEp(episodes[0]);
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
          <Replay source={{ streamUrl: selectedEp.video }} initialPlaybackProps={{ isPaused: true, isMuted: false, volume: 0.2 }} />
        </StyledVideoContainer>
        <StyledEpisodeList>
          <h3>Episodes</h3>
          <ul ref={listRef}>
            {episodes?.map((ep) => (
              <li key={ep.name}>
                <button type="button" className={`${ep.title === selectedEp.title ? `activeEp` : ``}`} title={ep.title} onClick={() => setSelectedEp(ep)}>
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

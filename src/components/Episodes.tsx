import { useGetAllEpisodes, useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { useEffect, useMemo, useRef, useState } from 'react';
import { buildSeasons, getEpisodes, getSeasons } from '@/utils';
import { Player } from '@/components';

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
          <Player url={selectedEp.video} key={selectedEp.video} />
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

import { useGetAllEpisodes, useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { buildSeasons, getEpisodes, getSeasons } from '@/utils';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { BlockReveal, FadeRight, FadeUp } from './animations';

const Player = dynamic(
  () =>
    import(
      /* webpackChunkName: "My-Player" */
      // eslint-disable-next-line
      './Player'
    ),
  { ssr: false },
);

export default function Episodes() {
  const { ref, inView } = useInView({ initialInView: false, threshold: 0.4, triggerOnce: true });
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
    <StyledEpisodes ref={ref}>
      <StyledSectionTitle id="episodes">
        <BlockReveal delay={0} inView={inView} revealOnScroll>
          Episodes
        </BlockReveal>
      </StyledSectionTitle>
      <StyledGrid>
        <StyledSeasonList>
          {seasons?.map((season, i) => (
            <li key={season}>
              <FadeRight custom={i} inView={inView} revealOnScroll>
                <button type="button" className={`${selectedSeason === season ? `activeSe` : ``}`} onClick={() => setSelectedSeason(season)}>
                  {season}
                </button>
              </FadeRight>
            </li>
          ))}
        </StyledSeasonList>
        <StyledVideoContainer>{inView && <Player url={selectedEp.frame} title={selectedEp.title} key={selectedEp.title} />}</StyledVideoContainer>
        <StyledEpisodeList>
          <h3>Episodes</h3>
          <ul ref={listRef}>
            {episodes?.map((ep, i) => (
              <li key={ep.name}>
                <FadeUp custom={i} inView={inView} revealOnScroll>
                  <button type="button" className={`${ep.title === selectedEp.title ? `activeEp` : ``}`} title={ep.title} onClick={() => setSelectedEp(ep)}>
                    <span>{ep.name} : </span>
                    <span>{ep.title}</span>
                  </button>
                </FadeUp>
              </li>
            ))}
          </ul>
        </StyledEpisodeList>
      </StyledGrid>
    </StyledEpisodes>
  );
}

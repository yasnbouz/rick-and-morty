import { useRef } from 'preact/hooks';
import { useMachine } from '@xstate/react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import { useGetAllEpisodes, useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { buildSeasons } from '@/utils';
import { animeMachine } from '@/machines';
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
  const [state, send] = useMachine(animeMachine, { context: { data: buildSeasons(data) } });
  const { seasons, currentSeason, episodes, currentEpisode } = state.context;
  const listRef = useRef<HTMLUListElement>(null);
  useScrollEnd(listRef);
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
                <button type="button" className={`${currentSeason === season ? `activeSe` : ``}`} onClick={() => send({ type: `setCurrentSeason`, season })}>
                  {season}
                </button>
              </FadeRight>
            </li>
          ))}
        </StyledSeasonList>
        <StyledVideoContainer>{inView && <Player url={currentEpisode.frame} title={currentEpisode.title} key={currentEpisode.title} />}</StyledVideoContainer>
        <StyledEpisodeList>
          <h3>Episodes</h3>
          <ul ref={listRef}>
            {episodes?.map((episode, i) => (
              <li key={episode.name}>
                <FadeUp custom={i} inView={inView} revealOnScroll>
                  <button
                    type="button"
                    className={`${episode.title === currentEpisode.title ? `activeEp` : ``}`}
                    title={episode.title}
                    onClick={() => send({ type: `setCurrentEpisode`, episode })}
                  >
                    <span>{episode.name} : </span>
                    <span>{episode.title}</span>
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

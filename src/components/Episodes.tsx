import { useScrollEnd } from '@/hooks';
import { StyledEpisodeList, StyledEpisodes, StyledGrid, StyledSeasonList, StyledSectionTitle, StyledVideoContainer } from '@/styles';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import 'vimond-replay/index.css';

const Replay = dynamic<any>(() => import(`vimond-replay`).then((mod) => mod.Replay), { ssr: false });

export default function Episodes() {
  const listRef = useRef<HTMLUListElement>(null);
  useScrollEnd(listRef);
  const [seasons, setSeasons] = useState([`Season 1`, `Season 2`, `Season 3`, `Season 4`]);
  const [selected, setSelected] = useState(`Season 1`);
  const handleSeasons = (season) => {
    setSelected(season);
  };
  return (
    <StyledEpisodes>
      <StyledSectionTitle>Episodes</StyledSectionTitle>
      <StyledGrid>
        <StyledSeasonList>
          {seasons.map((season) => (
            <li key={season}>
              <button type="button" className={`${selected === season ? `activeSe` : ``}`} onClick={() => handleSeasons(season)}>
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
            <li>
              <button type="button">
                <span>Episode 1 : </span>
                <span>The Ricklantis Mixup Mixup Mzz</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 2 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 3 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 4 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button className="activeEp" type="button">
                <span>Episode 5 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 6 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 7 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 8 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 9 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Episode 10 : </span>
                <span>The Ricklantis Mixup</span>
              </button>
            </li>
          </ul>
        </StyledEpisodeList>
      </StyledGrid>
    </StyledEpisodes>
  );
}

import Image from 'next/image';
import { StyledContent, StyledHero, StyledHeroContainer, StyledPoster } from '@/styles';
import { FadeUp, FadeLeft } from '@/components/animations';

export default function Hero() {
  return (
    <StyledHero>
      <Image src="/hero.png" alt="hero image" objectFit="cover" layout="fill" quality="66" priority />
      <StyledHeroContainer>
        <StyledPoster>
          <FadeLeft delay={0.75}>
            <Image src="/poster.png" alt="rick and morty poster" objectFit="cover" width="310" height="500" layout="intrinsic" quality="45" />
          </FadeLeft>
        </StyledPoster>
        <StyledContent>
          <FadeUp custom={0.5} delay={1}>
            <h1 className="title">
              Rick and Morty <span>(2013)</span>
            </h1>
          </FadeUp>
          <FadeUp custom={1} delay={1}>
            <p className="subTitle">
              <span>tv-ma</span> Animation, Comedy, Sci-Fi & Fantasy, Action & Adventure • 22m
            </p>
          </FadeUp>
          <FadeUp custom={1.5} delay={1}>
            <p className="overview">Overview</p>
          </FadeUp>

          <FadeUp custom={2} delay={1}>
            <p className="description">
              Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson
              Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty &apos;s already unstable family life, these events cause
              Morty much distress at home and school.
            </p>
          </FadeUp>
          <div className="info">
            <div className="creator">
              <FadeUp custom={2.5} delay={1}>
                <h2>Dan Harmon</h2>
              </FadeUp>
              <FadeUp custom={3} delay={1}>
                <span>Creator</span>
              </FadeUp>
            </div>
            <div className="creator">
              <FadeUp custom={3.5} delay={1}>
                <h2>Justin Roiland</h2>
              </FadeUp>
              <FadeUp custom={4} delay={1}>
                <span>Creator</span>
              </FadeUp>
            </div>

            <FadeUp custom={4.5} delay={1}>
              <div className="rating">
                <Image src="/star.svg" aria-hidden="true" alt="star" layout="fixed" width="24" height="24" />
                <p>9.2</p>
              </div>
            </FadeUp>
          </div>
          <FadeUp custom={5} delay={1}>
            <a href="https://www.youtube.com/watch?v=hl1U0bxTHbY" className="btn" target="_blank" rel="noreferrer noopener">
              watch trailer
            </a>
          </FadeUp>
        </StyledContent>
      </StyledHeroContainer>
    </StyledHero>
  );
}

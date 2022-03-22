import Image from 'next/image';
import { StyledContent, StyledHero, StyledHeroContainer, StyledPoster } from '@/styles';
import { FadeUp, FadeLeft } from '@/components/animations';

export default function Hero() {
  return (
    <StyledHero>
      <StyledHeroContainer>
        <StyledPoster>
          <FadeLeft delay={0.75}>
            <Image
              src="/poster.webp"
              alt="rick and morty poster"
              objectFit="cover"
              width={310}
              height={500}
              layout="intrinsic"
              quality={45}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABR1JREFUWEd9l2uLXEUQhqvO/E1FEPwg+EEQL0RC8PbNy+4mhoQYY5LzI81mTre+l+ruWRcZDn1mZ2fqqbeuJ29+/qBHRGREbJF8nSJjG6+MLfHJxjMS/6GzZ+iKulq06NHiiN6P6M1nP0dv54h2jt5xHhH94LdyAuBnBYDzAoIAAgncJ3ALIKPjRZAWrePdEQ0AA+I+gBYRLfLmlw87fmxVQADQwEoMBTLSKhQAvggFWhIjWocGMN6iUQEZhxpRSsD73iI6FPj1owGQXd7zym2qsChA78dl6cu4EASxhsAACoOUmQC/fewcmPIPiNjilFICnm+I/2K8vI+EWSlAz6FAEwRVKAV4f0Q0eI/Pe+T11ScIH2M6DZf0Ok80XAD4V7xX5nZ77wBMBZrzACCHE9LGATcUuL7+dFRBJeCQ397jPbyXAsxDlQ3JkYCSnhcUgHcFcOi++4T3vXWq0BH868ef/TcEMGbPWY54vy0AhGDq0ChCcAHAOBuChqGCL3h/IFRdSXj15HOGALEdClQS2mspEFJALSAyewQgCDC9p2HGXoYb5IfBAdAFgCokwNMvLsqQxgiQSsCCoAIRGwG6AHitAPa8AGy08QTEvMCN+s2rZ1+PECjb3YRsHAlY8sM4ICC/IGQcKrD2mQOuAOTAMNyincs4miBygAJEXj1/0BHLkl8A8pzGAbKF7tkIe2wwzhxohIBxQozuN+NeEAQ4yzi7sAshr148nGXI5LPRAZBxcgJuMF4h2GRcCuAXrYBrvRKvweC5WwE0wxUgI69fPpqdsIxXDmzqAYq9FCAEFSgAu1MDaAkBvG1nx5+zqFQoBQDw53czCT3pZNTt2NJLBSvAHGiCgPd5NwSu+wNVIAWkAseBQoBuDMs3r35QEq5liDlgiJGETkCFYQKsIcAvjyQ8kIQuvwrBfQCPX/942YjchGYSVg6oBGncYVAS/r8C3SEY8t9V4Mmbn+7vhBd9IJSITkApoDyglpWIVGBpvaUCIO5WgfaRyN8L4CIEXkqqEVF+JyENI2TwvnqBKuAiBNX/qUABLI2oAJ6+nQpwxqyd0NUwZ8HSCZ0HsxEVgPtBDaEB4BnghhQYSFDg2X4nB2ovHD2hKkLlCO9xYg6wHS+zQDN+DYOqITAPDMI5wE7oYfR8dxUs++DciqoxFQQAPJLHLFBHxDxUCJZtCMYZCgAcEZ4NXEgK4MX+/ZKEsyWvq1kNJyqAUeiJyGHEGq59aAlDbT/HmQBUAQsJ7gngnfCPHY2o9gsu3Mtm5HXMucBeMbYh0AgACwkXEy8k2vm8BR1ax2XYMFxQpUK+3B95FtRzAcJb69kdAKB5J8RRX9S5AHAnLAgYfy+IcQFGEPlqf3ipgBvzCqFJOZ8HajWXYTwfMAPGVjTL0a2vFQDO95HsyQb4a/925gCWHPxkKcDTDyX6xE9FfjLiHPcDSm3FIwzVd+H5LQ1Hh/FbDYR2jsSDyev9wQgBtyxWWC4Qfl7qUEAZoizc8GA1ALTgKAwczfQQEDAsgOQJANzj7y3yzf7NDAHXPBh3IvLeGnQY1gObjG/RDdGhwvJ4RuOEsNcw3G/t/TuBdChwRL7dvZJpyeWeyRD4wj1TEgrEaSjQ82QIGF/D4AU1HIK4HZ5nfxfRBZABuHPkvn8lBQygZdcqEMLGrYBCcLL3qwraDJWOmA1QQfLLYxjWxfsJ8OW9AIRoUkIK2Huc5X2FIZFO9aheOyJy4H1EWP4B8Df/Rqh/VfoHuzIYyODzkwYAAAAASUVORK5CYII="
              priority
            />
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

import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import tw from 'twin.macro';
import { StyledCharacterImg, StyledCharacterName, StyledCharacterOrigin, StyledCharacterStatus, StyledEpisodeName } from '@/styles';
import { Character as CharacterProps } from '@/generated/graphql';
import { FadeUp } from './animations';

export default function Character(props: CharacterProps) {
  const { ref, inView }: { ref: any; inView: boolean } = useInView({ initialInView: false, threshold: 0, triggerOnce: true });
  const { name, gender, species, image, status, episode, origin } = props;
  return (
    <FadeUp ref={ref} inView={inView} revealOnScroll custom={0} tw="flex flex-col items-center w-64 bg-blueGray-800 rounded-lg shadow-xl lg:(w-full max-w-2xl flex-row pr-4)">
      <StyledCharacterImg>
        <Image src={image} width="150" height="150" layout="fixed" loading="lazy" alt={`${name} image`} />
      </StyledCharacterImg>
      <div tw="p-5 ml-5 self-start overflow-auto lg:(ml-24 p-4)">
        <StyledCharacterName title={name}>{name}</StyledCharacterName>
        <div tw="flex items-center space-x-4 mt-1">
          <span
            tw="w-3 h-3 bg-green-500 inline-block rounded-full"
            css={[
              status.trim().toLocaleLowerCase() === `dead` && tw`bg-red-500`,
              status.trim().toLocaleLowerCase() === `alive` && tw`bg-green-500`,
              status.trim().toLocaleLowerCase() === `unknown` && tw`bg-coolGray-400`,
            ]}
          />
          <StyledCharacterStatus title={`${status} • ${species}`}>
            {status} • {species}
          </StyledCharacterStatus>
        </div>
        <div tw="text-base font-medium mt-4 space-y-2">
          <p title={gender}>
            <span tw="text-blueGray-400">Gender : </span>
            {gender}
          </p>
          <StyledCharacterOrigin title={origin.name}>
            <span tw="text-blueGray-400">Origin : </span>
            {origin.name}
          </StyledCharacterOrigin>
          <StyledEpisodeName title={episode[0].name}>
            <span tw="text-blueGray-400">First Seen in :{` `}</span>
            {episode[0].name}
          </StyledEpisodeName>
        </div>
      </div>
    </FadeUp>
  );
}

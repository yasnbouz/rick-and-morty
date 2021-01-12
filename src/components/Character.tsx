import { FC } from 'react';
import { StyledCharacterImg } from '@/styles';
import Image from 'next/image';
import 'twin.macro';

const Character: FC = () => (
  <div tw="flex flex-col items-center w-64 bg-blueGray-800 rounded-lg shadow-xl lg:(w-full max-w-2xl flex-row pr-4)">
    <StyledCharacterImg>
      <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" width="150" height="150" layout="fixed" loading="lazy" alt="character image" />
    </StyledCharacterImg>
    <div tw="p-5 lg:( ml-24 p-4)">
      <h3 tw="text-2xl font-bold tracking-wide">Rick Sanchez</h3>
      <div tw="flex items-center space-x-4 mt-1">
        <span tw="w-3 h-3 bg-green-500 inline-block rounded-full" />
        <p tw="text-base font-normal">Alive • Human</p>
      </div>
      <div tw="text-base font-medium mt-4 space-y-2">
        <p>
          <span tw="text-blueGray-400">Gender : </span>
          Male
        </p>
        <p>
          <span tw="text-blueGray-400">Origin : </span>
          Earth
        </p>
        <p>
          <span tw="text-blueGray-400">First Seen in : </span>
          Pilot
        </p>
      </div>
    </div>
  </div>
);

export default Character;

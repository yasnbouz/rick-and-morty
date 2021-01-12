import { StyledCharacters, StyledSectionTitle } from '@/styles';
import Character from './Character';
import 'twin.macro';
import Pagination from './Pagination';

export default function Characters() {
  return (
    <StyledCharacters>
      <StyledSectionTitle id="characters">Characters</StyledSectionTitle>
      <div tw="grid grid-cols-1 gap-y-32 justify-items-center sm:(grid-cols-2 gap-x-4) lg:(grid-cols-1) xl:(grid-cols-2 justify-items-start gap-x-12)">
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
        <Character />
      </div>
      <Pagination />
    </StyledCharacters>
  );
}

import { useState } from 'react';
import { StyledCharacters, StyledSectionTitle } from '@/styles';
import { useGetAllCharactersQuery } from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import Pagination from './Pagination';
import Character from './Character';
import 'twin.macro';

function ErrorMessge({ error }) {
  return (
    <div tw="table-cell align-middle w-80 h-48 rounded-lg bg-red-200 p-4 fixed top-1/2 left-1/2 -ml-40 -mt-40">
      <p tw="text-red-700 font-bold text-center">Error : {error?.message ?? ``} </p>
    </div>
  );
}
function LoaderCircle() {
  return <p tw="text-white font-bold text-center p-8">Loading Characters...</p>;
}
export default function Characters() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetAllCharactersQuery(client, { page }, { keepPreviousData: true });
  return (
    <StyledCharacters>
      <StyledSectionTitle id="characters">Characters</StyledSectionTitle>
      {isError ? (
        <ErrorMessge error={error} />
      ) : isLoading ? (
        <LoaderCircle />
      ) : (
        data && (
          <>
            <div tw="grid grid-cols-1 gap-y-32 justify-items-center sm:(grid-cols-2 gap-x-4) lg:(grid-cols-1) xl:(grid-cols-2 justify-items-start gap-x-12)">
              {data.characters.results.map((c) => (
                <Character key={c.id} name={c.name} status={c.status} species={c.species} image={c.image} gender={c.gender} episode={c.episode} origin={c.origin} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} total={data.characters.info.count} />
          </>
        )
      )}
    </StyledCharacters>
  );
}

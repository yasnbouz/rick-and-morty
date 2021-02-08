import { useState } from 'preact/hooks';
import { ErrorMessage } from '@/components';
import { StyledCharacters, StyledLoader, StyledSectionTitle } from '@/styles';
import { useGetAllCharactersQuery } from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import { useInView } from 'react-intersection-observer';
import Pagination from './Pagination';
import Character from './Character';
import { BlockReveal } from './animations';
import 'twin.macro';

export default function Characters() {
  const { ref, inView } = useInView({ threshold: 0, initialInView: false, triggerOnce: true });
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useGetAllCharactersQuery(client, { page }, { keepPreviousData: true });
  return (
    <StyledCharacters ref={ref}>
      <StyledSectionTitle id="characters">
        <BlockReveal delay={0} inView={inView} revealOnScroll>
          Characters
        </BlockReveal>
      </StyledSectionTitle>
      {isError ? (
        <ErrorMessage error={error} />
      ) : isLoading ? (
        <StyledLoader />
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

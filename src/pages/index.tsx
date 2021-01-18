import Head from 'next/head';
import { Header, Hero, Episodes, Characters, ScrollTop, Footer } from '@/components';

import { GetStaticProps } from 'next';
import { client } from '@/lib/graphqlClient';
import { GetAllCharactersDocument, GetAllCharactersQuery, GetAllEpisodesDocument, GetAllEpisodesQuery } from '@/generated/graphql';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const data: GetAllCharactersQuery = await client.request(GetAllCharactersDocument);
  await queryClient.setQueryData([`getAllCharacters`, { page: 1 }], data);
  // fetch episodes on the server
  async function fetchAllEpisodes() {
    let pageIndex = 1;
    do {
      if (pageIndex) {
        // eslint-disable-next-line no-await-in-loop
        const episodes: GetAllEpisodesQuery = await client.request(GetAllEpisodesDocument, { page: pageIndex });
        // eslint-disable-next-line no-await-in-loop
        await queryClient.setQueryData([`getAllEpisodes`, null], (oldData: any) => {
          const results = [...(oldData?.episodes?.results ?? []), ...episodes.episodes.results];
          return { episodes: { results } };
        });
        pageIndex = episodes.episodes.info.next;
      }
    } while (pageIndex);
  }
  await fetchAllEpisodes();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Episodes />
        <Characters />
        <ScrollTop />
      </main>
      <Footer />
    </>
  );
}

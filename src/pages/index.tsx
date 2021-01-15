import Head from 'next/head';
import { Header, Hero, Episodes, Characters, ScrollTop, Footer } from '@/components';

import { GetStaticProps } from 'next';
import { client } from '@/lib/graphqlClient';
import { GetAllCharactersDocument, GetAllCharactersQuery } from '@/generated/graphql';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const data: GetAllCharactersQuery = await client.request(GetAllCharactersDocument);
  await queryClient.setQueryData([`getAllCharacters`, { page: 1 }], data);
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

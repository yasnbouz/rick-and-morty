import { Header, Hero, Episodes, Characters, ScrollTop, Footer } from '@/components';

import { GetServerSideProps } from 'next';
import { client } from '@/lib/graphqlClient';
import { GetAllCharactersDocument, GetAllCharactersQuery } from '@/generated/graphql';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getAllEpisodes } from '@/hooks';
import { NextSeo } from 'next-seo';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient();
  const data: GetAllCharactersQuery = await client.request(GetAllCharactersDocument);
  await queryClient.setQueryData([`getAllCharacters`, { page: 1 }], data);
  // fetch episodes on the server
  await queryClient.prefetchQuery(`getAllEpisodes`, getAllEpisodes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="Watch Rick and Morty (2013)"
        description="Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
        openGraph={{
          url: `http://localhost:3000`,
          type: `website`,
          title: `Watch Rick and Morty (2013)`,
          description: `Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.`,
          images: [
            {
              url: `http://localhost:3000/poster.png`,
              width: 800,
              height: 600,
              alt: `Rick and Morty Poster`,
            },
          ],
          site_name: `http://localhost:3000`,
        }}
        twitter={{
          handle: `@yasnbouz`,
          site: `http://localhost:3000`,
          cardType: `summary_large_image`,
        }}
      />
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

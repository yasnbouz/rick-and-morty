import { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { NextSeo } from 'next-seo';
import { loadData, storePath } from '@/scraping/utils';
import { GetAllCharactersDocument, GetAllCharactersQuery } from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import { Header, Hero, Episodes, Characters, ScrollTop, Footer } from '@/components';
import { ScrapData } from '@/scraping';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const data: GetAllCharactersQuery = await client.request(GetAllCharactersDocument);
  await queryClient.setQueryData([`getAllCharacters`, { page: 1 }], data);

  // load episodes on the server
  await ScrapData();
  const episodesData = loadData(storePath);
  await queryClient.setQueryData(`getAllEpisodes`, JSON.parse(episodesData as string));

  return {
    revalidate: 60 * 60 * 24,
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Watch Rick and Morty (2013)"
        description="Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_HOST,
          type: `website`,
          title: `Watch Rick and Morty (2013)`,
          description: `Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_HOST}/poster.png`,
              width: 800,
              height: 600,
              alt: `Rick and Morty Poster`,
            },
          ],
          site_name: process.env.NEXT_PUBLIC_SITE_HOST,
        }}
        twitter={{
          handle: `@yasnbouz`,
          site: process.env.NEXT_PUBLIC_SITE_HOST,
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
    </div>
  );
}

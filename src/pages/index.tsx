import { GetStaticProps } from 'next';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { loadData, storePath } from '@/scraping/utils';
import { GetAllCharactersDocument, GetAllCharactersQuery } from '@/generated/graphql';
import { client } from '@/lib/graphqlClient';
import { Header, Hero, Episodes, Characters, ScrollTop, Footer } from '@/components';
import { ScrapData } from '@/scraping';
import Seo from '@/components/Seo';

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const data: GetAllCharactersQuery = await client.request(GetAllCharactersDocument);
  await queryClient.setQueryData([`getAllCharacters`, { page: 1 }], data);

  // load episodes on the server
  await ScrapData();
  const episodesData = loadData(storePath);
  await queryClient.setQueryData(`getAllEpisodes`, JSON.parse(episodesData as string));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <div>
      <Seo />
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

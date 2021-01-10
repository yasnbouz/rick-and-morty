import { FC } from 'react';
import Head from 'next/head';
import { Episodes, Header, Hero } from '@/components';

const Home: FC = () => (
  <div>
    <Head>
      <title>Rick and Morty</title>
    </Head>
    <Header />
    <main>
      <Hero />
      <Episodes />
    </main>
  </div>
);

export default Home;

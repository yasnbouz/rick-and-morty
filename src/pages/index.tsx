import Head from 'next/head';
import { Header, Hero, Episodes, Characters } from '@/components';
import { FC } from 'react';

const Home: FC = () => (
  <div>
    <Head>
      <title>Rick and Morty</title>
    </Head>
    <Header />
    <main>
      <Hero />
      <Episodes />
      <Characters />
    </main>
  </div>
);

export default Home;

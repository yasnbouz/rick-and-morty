import { FC } from 'react';
import Head from 'next/head';
import { Header, Hero } from '@/components';
import 'twin.macro';

const Home: FC = () => (
  <div tw="bg-blueGray-900">
    <Head>
      <title>Rick and Morty</title>
    </Head>
    <Header />
    <main>
      <Hero />
    </main>
  </div>
);

export default Home;

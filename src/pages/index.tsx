import { FC } from 'react';
import Head from 'next/head';
import { Header } from '@/components';

const Home: FC = () => (
  <>
    <Head>
      <title>Rick and Morty</title>
    </Head>
    <Header />
  </>
);

export default Home;

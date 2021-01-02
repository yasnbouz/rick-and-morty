import { FC } from 'react';
import Head from 'next/head';

import { Title } from '@/components';

const Home: FC = () => (
  <>
    <Head>
      <title>Rick and Morty</title>
    </Head>
    <Title />
  </>
);

export default Home;

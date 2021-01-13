import Head from 'next/head';
import { Header, Hero, Episodes, Characters, ScrollTop } from '@/components';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

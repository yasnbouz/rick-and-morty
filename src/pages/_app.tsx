import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { GlobalCss } from '@/components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <GlobalCss />
      <Component {...pageProps} />
    </>
  );
}

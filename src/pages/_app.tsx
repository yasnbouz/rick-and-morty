import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { GlobalCss } from '@/components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <GlobalCss />
    <Component {...pageProps} />
  </>
);

export default MyApp;

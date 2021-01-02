import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;

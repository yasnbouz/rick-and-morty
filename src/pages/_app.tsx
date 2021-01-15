import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { GlobalCss } from '@/components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false, refetchOnReconnect: false, staleTime: Infinity } } });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <GlobalCss />
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

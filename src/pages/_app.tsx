import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { MotionConfig, AnimationFeature } from 'framer-motion';
import { GlobalCss } from '@/components';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false, refetchOnReconnect: false, staleTime: Infinity } } });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <GlobalCss />
      <Hydrate state={pageProps.dehydratedState}>
        <MotionConfig features={[AnimationFeature]}>
          <Component {...pageProps} key={router.route} />
        </MotionConfig>
      </Hydrate>
    </QueryClientProvider>
  );
}

import { AppProps } from 'next/app';
import { GlobalStyles } from 'twin.macro';
import { GlobalCss } from '@/components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { AnimatePresence, MotionConfig, AnimationFeature, ExitFeature } from 'framer-motion';

function handleExitComplete() {
  if (typeof window !== `undefined`) {
    window.scrollTo({ top: 0 });
  }
}

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false, refetchOnReconnect: false, staleTime: Infinity } } });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <GlobalCss />
      <Hydrate state={pageProps.dehydratedState}>
        <MotionConfig features={[AnimationFeature, ExitFeature]}>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MotionConfig>
      </Hydrate>
    </QueryClientProvider>
  );
}

import Head from 'next/head';
import { NextSeo } from 'next-seo';

function Seo() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title="Watch Rick and Morty (2013)"
        description="Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school."
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_HOST,
          type: `website`,
          title: `Watch Rick and Morty (2013)`,
          description: `Watch Rick and Morty (2013) - Action & Adventure, Animation, Comedy, Sci-Fi & Fantasy TVShow: Rick is a mentally-unbalanced but scientifically-gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_HOST}/poster.png`,
              width: 800,
              height: 600,
              alt: `Rick and Morty Poster`,
            },
          ],
          site_name: process.env.NEXT_PUBLIC_SITE_HOST,
        }}
        twitter={{
          handle: `@yasnbouz`,
          site: process.env.NEXT_PUBLIC_SITE_HOST,
          cardType: `summary_large_image`,
        }}
      />
      <Head>
        {/* meta tags PWA */}
        <meta name="theme-color" content="#333" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/webp" href="/icons/favicon-16x16.webp" sizes="16x16" />
        <link rel="icon" type="image/webp" href="/icons/favicon-32x32.webp" sizes="32x32" />
        <link rel="icon" type="image/webp" href="/icons/pwa-192x192.webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.webp" sizes="180x180" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <link rel="mask-icon" href="/icons/maskable-icon.webp" />
        <link rel="preload" href="/fonts/Georgia/Georgia.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="fonts/Poppins/Poppins-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
      </Head>
    </>
  );
}

export default Seo;

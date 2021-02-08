import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';

type Props = {
  ids: string[];
  css: any;
};

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable react/no-danger  */}
          <style data-emotion-css={this.props.ids.join(` `)} dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link rel="preload" href="/fonts/Georgia/Georgia.ttf" as="font" crossOrigin="" />
          <link rel="preload" href="/fonts/Poppins/Poppins-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Poppins/Poppins-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Poppins/Poppins-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Poppins/Poppins-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          {/* meta tags PWA */}
          <meta name="theme-color" content="#333" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/icons/pwa-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" sizes="180x180" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <link rel="mask-icon" href="/icons/maskable-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

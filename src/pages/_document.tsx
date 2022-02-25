import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';

type Props = {
  ids: string[];
  css: any;
};

const criticalCss = `body{
  font-family: Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}`;
class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // const page = await ctx.renderPage();
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <>
        {initialProps.styles}
        {/* eslint-disable react/no-danger */}
        <style data-emotion-css={critical.ids.join(` `)} dangerouslySetInnerHTML={{ __html: critical.css }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </>
    );
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
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

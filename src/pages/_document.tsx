import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';

type Props = {
  ids: string[];
  css: any;
};

const criticalCss = `@font-face{font-family:Georgia;src:url('/fonts/Georgia/Georgia.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap;unicode-range:U+20,U+27,U+2C-2E,U+43,U+48,U+4D,U+52,U+61-69,U+6B-70,U+72-77,U+79}@font-face{font-family:Poppins;src:url('/fonts/Poppins/Poppins-Regular.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap;unicode-range:U+20,U+21,U+23,U+26,U+28,U+29,U+2C-2E,U+30-3A,U+40-50,U+52-54,U+56,U+57,U+61-70,U+72-7A,U+2022}@font-face{font-family:Poppins;src:url('/fonts/Poppins/Poppins-Medium.woff2') format('woff2');font-style:normal;font-weight:500;font-display:swap;unicode-range:U+20,U+21,U+23,U+26,U+28,U+29,U+2C-2E,U+30-3A,U+40-50,U+52-54,U+56,U+57,U+61-70,U+72-7A,U+2022}@font-face{font-family:Poppins;src:url('/fonts/Poppins/Poppins-SemiBold.woff2') format('woff2');font-style:normal;font-weight:600;font-display:swap;unicode-range:U+20,U+21,U+23,U+26,U+28,U+29,U+2C-2E,U+30-3A,U+40-50,U+52-54,U+56,U+57,U+61-70,U+72-7A,U+2022}@font-face{font-family:Poppins;src:url('/fonts/Poppins/Poppins-Bold.woff2') format('woff2');font-style:normal;font-weight:700;font-display:swap;unicode-range:U+20,U+21,U+23,U+26,U+28,U+29,U+2C-2E,U+30-3A,U+40-50,U+52-54,U+56,U+57,U+61-70,U+72-7A,U+2022}body{font-family:Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'}`;
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
      </>
    );
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* critical font */}
          <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
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

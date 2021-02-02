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
          <link rel="preload" href="/fonts/Poppins/Poppins-bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link href="/favicon.ico" rel="icon" type="image/x-icon" />
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

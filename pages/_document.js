import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const isProduction = process.env.NODE_ENV === 'production';
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, isProduction };
  }

  /* eslint-disable class-methods-use-this */
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-86418485-1');
      `,
    };
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { styleTags, isProduction } = this.props;
    return (
      <html lang="nl">
        <Head>{styleTags}</Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <React.Fragment>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86418485-1" />
              {/* eslint-disable-next-line */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </React.Fragment>
          )}
        </body>
      </html>
    );
  }
}

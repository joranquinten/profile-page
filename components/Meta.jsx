import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styled/Global-style';

import { meta } from '../data/nl';

const Meta = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      <meta name="google-site-verification" content={meta['google-site-verification']} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#ed7d3a" />
      <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <GlobalStyle />
  </>
);

export default Meta;

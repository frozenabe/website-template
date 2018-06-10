import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';

/* eslint no-unused-expressions: ["error", { "allowTaggedTemplates": true }] */
injectGlobal`
  html, body {
    height: 100%;
    margin: 0;
  }
  body > div:first-child, #__next, #__next > div {
    height: inherit;
  }
`;

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="ko">
        <Head>
          <title>Moedim Inc.</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/static/favicon.ico" rel="shortcut icon" />
          {this.props.styleTags}
        </Head>
        <body>
          <noscript>
            <a href="http://enable-javascript.com/">If you are seeing this message, that means <strong>JavaScript has been disabled on your browser</strong>, please <strong>enable JS</strong> to make this app work.</a>
          </noscript>
          <Main warnings={false} />
          <section>
            <NextScript />
          </section>
        </body>
      </html>
    );
  }
}

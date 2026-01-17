import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getDir, getLocale } from '../lib/i18n';

export default class MyDocument extends Document {
  render() {
    const locale =
      getLocale(this.props.__NEXT_DATA__?.locale || this.props.__NEXT_DATA__?.defaultLocale);
    const dir = getDir(locale);

    return (
      <Html lang={locale} dir={dir}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


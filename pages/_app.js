import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDir, getLocale } from '../lib/i18n';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const locale = getLocale(router.locale || router.defaultLocale);
    const dir = getDir(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [router.locale, router.defaultLocale]);

  return <Component {...pageProps} />;
}

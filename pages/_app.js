import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getDir, getLocale, DEFAULT_LOCALE } from '../lib/i18n';
import { getSavedLanguage, saveLanguage } from '../components/LanguageSwitcher';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check for saved language preference on initial load
    const savedLang = getSavedLanguage();
    const currentLocale = getLocale(router.locale || router.defaultLocale);

    if (savedLang && savedLang !== currentLocale) {
      // Redirect to saved language
      router.push(router.asPath, router.asPath, { locale: savedLang, scroll: false });
    } else if (!savedLang) {
      // No saved preference, save the default (Turkish)
      saveLanguage(DEFAULT_LOCALE);
    }
  }, []);

  useEffect(() => {
    const locale = getLocale(router.locale || router.defaultLocale);
    const dir = getDir(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [router.locale, router.defaultLocale]);

  return <Component {...pageProps} />;
}

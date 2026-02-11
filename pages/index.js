import Head from 'next/head';
import { useRouter } from 'next/router';
import Menu from '../components/Menu';
import HamburgerMenu from '../components/HamburgerMenu';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CategoryFilter from '../components/CategoryFilter';
import ScrollToTop from '../components/ScrollToTop';
import Logo from '../components/Logo';
import { createTranslator, getLocale } from '../lib/i18n';

export default function Home() {
  const router = useRouter();
  const locale = getLocale(router.locale || router.defaultLocale);
  const t = createTranslator(locale);

  return (
    <>
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="description" content={t('pageDescription')} />
      </Head>

      <LanguageSwitcher />
      <HamburgerMenu />

      <header>
        <Logo className="header-logo" />
      </header>

      <CategoryFilter />

      <Menu />

      <footer>
        {t('footer')}
      </footer>

      <ScrollToTop />
    </>
  );
}

import { useRouter } from 'next/router';
import { createTranslator, getLocale } from '../lib/i18n';

const STORAGE_KEY = 'menu-language';

export function saveLanguage(locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

export function getSavedLanguage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY);
  }
  return null;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = getLocale(router.locale || router.defaultLocale);
  const t = createTranslator(locale);

  const onChange = (e) => {
    const nextLocale = getLocale(e.target.value);
    saveLanguage(nextLocale);
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: nextLocale,
      scroll: false,
    });
  };

  return (
    <div className="lang-switcher">
      <label className="sr-only" htmlFor="lang-switcher">
        {t('language')}
      </label>
      <select
        id="lang-switcher"
        value={locale}
        onChange={onChange}
        aria-label={t('language')}
      >
        <option value="tr">{t('lang_tr')}</option>
        <option value="en">{t('lang_en')}</option>
        <option value="ar">{t('lang_ar')}</option>
      </select>
    </div>
  );
}

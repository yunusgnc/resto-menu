export const LOCALES = ['tr', 'en', 'ar'];
export const DEFAULT_LOCALE = 'tr';
export const RTL_LOCALES = new Set(['ar']);

const MESSAGES = {
  tr: {
    pageTitle: 'Restoran Menü',
    pageDescription: 'Restoran menü',
    menuHeading: 'MENÜ',
    categories: 'Kategoriler',
    close: 'Kapat',
    menuAriaLabel: 'Menü',
    closeAriaLabel: 'Kapat',
    language: 'Dil',
    footer: '© 2026 Restoran Menü',
    lang_tr: 'Türkçe',
    lang_en: 'English',
    lang_ar: 'العربية',
  },
  en: {
    pageTitle: 'Restaurant Menu',
    pageDescription: 'Restaurant menu',
    menuHeading: 'MENU',
    categories: 'Categories',
    close: 'Close',
    menuAriaLabel: 'Menu',
    closeAriaLabel: 'Close',
    language: 'Language',
    footer: '© 2026 Restaurant Menu',
    lang_tr: 'Türkçe',
    lang_en: 'English',
    lang_ar: 'العربية',
  },
  ar: {
    pageTitle: 'قائمة المطعم',
    pageDescription: 'قائمة المطعم',
    menuHeading: 'القائمة',
    categories: 'الفئات',
    close: 'إغلاق',
    menuAriaLabel: 'القائمة',
    closeAriaLabel: 'إغلاق',
    language: 'اللغة',
    footer: '© 2026 قائمة المطعم',
    lang_tr: 'Türkçe',
    lang_en: 'English',
    lang_ar: 'العربية',
  },
};

export function getLocale(locale) {
  if (typeof locale !== 'string') return DEFAULT_LOCALE;
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function getDir(locale) {
  return RTL_LOCALES.has(getLocale(locale)) ? 'rtl' : 'ltr';
}

export function getMessages(locale) {
  return MESSAGES[getLocale(locale)] ?? MESSAGES[DEFAULT_LOCALE];
}

export function createTranslator(locale) {
  const messages = getMessages(locale);
  const fallback = MESSAGES[DEFAULT_LOCALE];
  return function t(key) {
    return messages[key] ?? fallback[key] ?? key;
  };
}


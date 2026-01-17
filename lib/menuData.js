import menuTr from '../data/menu.json';
import menuEn from '../data/menu.en.json';
import menuAr from '../data/menu.ar.json';
import { getLocale } from './i18n';

const MENUS = {
  tr: menuTr,
  en: menuEn,
  ar: menuAr,
};

export function getMenuData(locale) {
  const resolved = getLocale(locale);
  return MENUS[resolved] ?? MENUS.tr;
}


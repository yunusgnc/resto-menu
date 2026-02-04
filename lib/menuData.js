import menuTr from '../data/menu.json';
import menuEn from '../data/menu.en.json';
import menuAr from '../data/menu.ar.json';
import { getLocale } from './i18n';

const TRANSLATIONS = {
  tr: menuTr,
  en: menuEn,
  ar: menuAr,
};

// Merge images from Turkish (base) menu with translations
function mergeMenuData(baseMenu, translatedMenu) {
  if (!translatedMenu || !baseMenu) return baseMenu;

  return {
    ...baseMenu,
    categories: baseMenu.categories.map((baseCategory, categoryIndex) => {
      const translatedCategory = translatedMenu.categories?.[categoryIndex] || {};

      // Handle subcategories (like İçecekler)
      if (baseCategory.subcategories) {
        return {
          ...baseCategory,
          title: translatedCategory.title || baseCategory.title,
          subcategories: baseCategory.subcategories.map((baseSub, subIndex) => {
            const translatedSub = translatedCategory.subcategories?.[subIndex] || {};
            return {
              ...baseSub,
              name: translatedSub.name || baseSub.name,
              items: baseSub.items?.map((baseItem, itemIndex) => {
                const translatedItem = translatedSub.items?.[itemIndex] || {};
                return {
                  ...baseItem,
                  name: translatedItem.name || baseItem.name,
                  alt: translatedItem.alt || baseItem.alt,
                };
              }) || [],
            };
          }),
        };
      }

      // Handle regular categories
      return {
        ...baseCategory,
        title: translatedCategory.title || baseCategory.title,
        items: baseCategory.items?.map((baseItem, itemIndex) => {
          const translatedItem = translatedCategory.items?.[itemIndex] || {};
          return {
            ...baseItem,
            name: translatedItem.name || baseItem.name,
            alt: translatedItem.alt || baseItem.alt,
          };
        }) || [],
      };
    }),
  };
}

export function getMenuData(locale) {
  const resolved = getLocale(locale);

  // Turkish is the base - return as is
  if (resolved === 'tr') {
    return menuTr;
  }

  // For other languages, merge translations with base images
  const translatedMenu = TRANSLATIONS[resolved];
  return mergeMenuData(menuTr, translatedMenu);
}

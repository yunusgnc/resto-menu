import Category from './Category';
import { useRouter } from 'next/router';
import { getMenuData } from '../lib/menuData';

export default function Menu() {
  const router = useRouter();
  const menuData = getMenuData(router.locale || router.defaultLocale);

  return (
    <section>
      {menuData.categories.map((category, index) => (
        <Category key={category.id || index} category={category} />
      ))}
    </section>
  );
}

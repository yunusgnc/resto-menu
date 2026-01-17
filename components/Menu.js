import Category from './Category';
import menuData from '../data/menu.json';

export default function Menu() {
  return (
    <section>
      {menuData.categories.map((category, index) => (
        <Category key={category.id || index} category={category} />
      ))}
    </section>
  );
}

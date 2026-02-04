import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMenuData } from '../lib/menuData';

export default function CategoryFilter() {
  const router = useRouter();
  const menuData = getMenuData(router.locale || router.defaultLocale);
  const [activeCategory, setActiveCategory] = useState(null);

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(categoryId);
    }
  };

  // Track active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const categories = menuData.categories;
      const scrollPosition = window.scrollY + 200;

      for (let i = categories.length - 1; i >= 0; i--) {
        const element = document.getElementById(categories[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuData.categories]);

  return (
    <div className="category-filter-wrapper">
      <div className="category-filter">
        {menuData.categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => scrollToCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}

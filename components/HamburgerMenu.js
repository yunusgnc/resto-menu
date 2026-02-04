import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { createTranslator, getLocale } from '../lib/i18n';
import { getMenuData } from '../lib/menuData';

export default function HamburgerMenu() {
  const router = useRouter();
  const locale = getLocale(router.locale || router.defaultLocale);
  const t = createTranslator(locale);
  const menuData = getMenuData(locale);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    // Body scroll'u kilitle/aç
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Mobilde menüyü kapat
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    }
  };

  // ESC ile kapat
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isOpen) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Menü dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="hamburger-menu">
      <button 
        className={`hamburger-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={t('menuAriaLabel')}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div 
          className="hamburger-overlay show"
          onClick={toggleMenu}
        ></div>
      )}

      <nav className={`hamburger-nav ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-header">
          <h3>{t('categories')}</h3>
        </div>
        <ul className="hamburger-list">
          {menuData.categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => scrollToCategory(category.id)}
                className="category-link"
                type="button"
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

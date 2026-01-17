import { useState, useEffect } from 'react';
import menuData from '../data/menu.json';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Body scroll'u kilitle/aç
    if (!isOpen) {
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

  // Menü dışına tıklandığında kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.hamburger-menu')) {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button 
        className={`hamburger-btn ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Menü"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <div className="hamburger-overlay" onClick={toggleMenu}></div>
      )}

      <nav className={`hamburger-nav ${isOpen ? 'open' : ''}`}>
        <div className="hamburger-header">
          <h3>Kategoriler</h3>
          <button className="close-btn" onClick={toggleMenu} aria-label="Kapat">
            ✕
          </button>
        </div>
        <ul className="hamburger-list">
          {menuData.categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => scrollToCategory(category.id)}
                className="category-link"
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
          position: fixed;
          top: 20px;
          right: 20px;
          transition: all 0.3s ease;
        }

        .hamburger-btn span {
          width: 28px;
          height: 3px;
          background: var(--accent);
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }

        .hamburger-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 998;
          animation: fadeIn 0.3s ease;
        }

        .hamburger-nav {
          display: none;
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          max-width: 80vw;
          height: 100vh;
          background: var(--card);
          backdrop-filter: blur(20px);
          z-index: 999;
          transition: right 0.3s ease;
          overflow-y: auto;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
        }

        .hamburger-nav.open {
          right: 0;
        }

        .hamburger-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 10, 10, 0.8);
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .hamburger-header h3 {
          margin: 0;
          color: var(--accent);
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text);
          font-size: 28px;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .close-btn:hover {
          transform: rotate(90deg);
          color: var(--accent);
        }

        .hamburger-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hamburger-list li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .category-link {
          display: block;
          width: 100%;
          padding: 18px 20px;
          background: transparent;
          border: none;
          color: var(--text);
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }

        .category-link:hover {
          background: var(--card-hover);
          color: var(--accent);
          padding-left: 28px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }

          .hamburger-overlay {
            display: block;
          }

          .hamburger-nav {
            display: block;
          }
        }
      `}</style>
    </>
  );
}

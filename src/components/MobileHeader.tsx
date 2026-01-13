import { useState, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import MyContext from './Context';

export default function MobileHeader() {
  const { state } = useContext(MyContext);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      // Always show at the very top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Don't show on home or about page
  if (location.pathname === '/' || location.pathname === '/about') {
    return null;
  }

  return createPortal(
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 transition-transform duration-300 bg-neutral-100 dark:bg-neutral-900 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        padding: `${state.padding * 2}px ${state.padding * 3}px`,
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
      }}
    >
      <div className="flex justify-between items-center font-Franklin font-semibold uppercase text-white">
        <Link to="/" style={{ fontSize: state.fontSize }}>
          Home
        </Link>
        <Link to="/about" style={{ fontSize: state.fontSize }}>
          About
        </Link>
      </div>
    </div>,
    document.body
  );
}

import React, { useState } from 'react';
import { NavLink } from '../types';

interface HeaderProps {
  onNavigate: (index: number) => void;
  sectionIndices: { [key: string]: number };
}

const navLinks: NavLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Калькулятор', href: '#calculator' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Контакты', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate, sectionIndices }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Mapping Russian labels to English keys used in App.tsx
    const labelToKey: { [key: string]: string } = {
      'Услуги': 'services',
      'Калькулятор': 'calculator',
      'Обо мне': 'about',
      'Контакты': 'contact'
    };

    const key = labelToKey[label];
    if (key && sectionIndices[key] !== undefined) {
      onNavigate(sectionIndices[key]);
    } else if (label === 'Главная') {
      onNavigate(0);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 pointer-events-none">
      <nav className="max-w-[1920px] mx-auto flex justify-between items-center">
        
        {/* Visible Content Wrapper */}
        <div className="w-full flex justify-between items-center text-mystic-brown pointer-events-auto relative">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'Главная')} 
            className="font-serif font-bold text-xl md:text-2xl tracking-widest hover:text-mystic-gold transition-colors uppercase"
          >
            Astrology Diana
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.label)}
                  className="text-sm font-sans font-medium tracking-widest hover:text-mystic-gold transition-colors cursor-pointer uppercase text-mystic-brown/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none text-mystic-brown"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-current transition-transform duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-mystic-cream text-mystic-brown flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden pointer-events-auto z-50 border-l border-mystic-gold/20 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
           <div className="absolute inset-0 stars-bg opacity-30"></div>
          <button 
            className="absolute top-6 right-6 p-4"
            onClick={toggleMenu}
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-serif tracking-widest hover:text-mystic-gold transition-colors relative z-10"
              onClick={(e) => handleNavClick(e, link.label)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-transparent.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on change de route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'La Fondation', path: '/la-fondation' },
    { name: 'Nos Programmes', path: '/programmes' },
    { name: 'Actualités', path: '/news' },
    { name: 'Devenir Partenaire', path: '/devenir-partenaire' },
  ];

  const textColor = isScrolled || !isHome ? 'text-brand-navy' : 'text-white';
  const bgColor = isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgColor} ${isScrolled ? 'py-1' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="Logo Fondation Jaamu Yàlla"
                className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'} w-auto drop-shadow-xl`}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${textColor} opacity-80 hover:opacity-100 px-3 py-2 text-sm font-semibold transition-all border-b-2 border-transparent hover:border-brand-blue`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/partenariat" className="bg-brand-red text-white px-6 py-2 rounded-full font-extrabold shadow-lg transform hover:scale-105 transition-all text-sm uppercase tracking-wider">
                Nous Soutenir
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} p-2 hover:bg-black/5 rounded-xl transition-colors`}
              aria-label="Toggle menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-4 text-brand-navy font-bold text-lg border-b border-gray-50 active:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 px-4">
                <Link
                  to="/partenariat"
                  className="block w-full text-center bg-brand-red text-white py-5 rounded-2xl font-black shadow-xl uppercase tracking-widest text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Nous Soutenir
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


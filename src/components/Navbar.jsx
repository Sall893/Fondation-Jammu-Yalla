import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-transparent.png';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          <div className="md:hidden">
            <button className={`${textColor}`}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

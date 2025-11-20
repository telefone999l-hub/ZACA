import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, ArrowRight, Globe } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigate, language, toggleLanguage } = useNavigation();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate('home');
    setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navLinks = [
    { name: t.features, href: '#features' },
    { name: t.pricing, href: '#pricing' },
    { name: t.testimonials, href: '#testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-950/70 backdrop-blur-xl border-white/5 h-16' 
          : 'bg-transparent border-transparent h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div 
            onClick={() => navigate('home')}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
               <BarChart2 className="h-5 w-5 text-white" />
               <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              DataPulse<span className="text-primary-400">.ai</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA & Lang */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('login')}
              className="text-slate-300 hover:text-white font-medium text-sm transition-colors"
            >
              {t.login}
            </button>
            <button 
              onClick={() => navigate('signup')}
              className="group relative px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.trial} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Switch Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 absolute w-full left-0 top-full animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsMobileMenuOpen(false);
                }}
                className="text-slate-300 hover:text-white block px-3 py-3 rounded-lg hover:bg-white/5 text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <button 
                onClick={() => { navigate('login'); setIsMobileMenuOpen(false); }}
                className="w-full py-3 rounded-lg border border-slate-700 text-slate-300 hover:text-white font-medium text-center"
              >
                {t.login}
              </button>
              <button 
                onClick={() => { navigate('signup'); setIsMobileMenuOpen(false); }}
                className="w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium text-center shadow-lg shadow-primary-900/50"
              >
                {t.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
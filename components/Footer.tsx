import React from 'react';
import { BarChart2, Github, Twitter, Linkedin, Globe } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { navigate, language, toggleLanguage } = useNavigation();
  const t = translations[language].footer;

  const handleNav = (page: string) => {
    // If it's an anchor link logic
    if (page === 'features' || page === 'pricing') {
        navigate('home');
        setTimeout(() => {
            const el = document.getElementById(page);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // @ts-ignore
        navigate(page);
    }
  };

  return (
    <footer className="relative border-t border-slate-800 pt-16 pb-8 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-slate-950 -z-20"></div>
      
      {/* Subtle Animated Gradient Blob at the bottom center */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-t from-primary-900/20 via-slate-900/10 to-transparent rounded-[100%] blur-[80px] animate-pulse-slow -z-10 pointer-events-none"></div>
      
      {/* Faint Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10 mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigate('home')}>
              <BarChart2 className="h-6 w-6 text-primary-400" />
              <span className="text-xl font-bold text-white">DataPulse AI</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              {t.desc}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.product}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('features')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.features}</button></li>
              <li><button onClick={() => handleNav('pricing')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.pricing}</button></li>
              <li><button onClick={() => handleNav('integrations')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.integrations}</button></li>
              <li><button onClick={() => handleNav('changelog')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.changelog}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('about')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.about}</button></li>
              <li><button onClick={() => handleNav('careers')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.careers}</button></li>
              <li><button onClick={() => handleNav('blog')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.blog}</button></li>
              <li><button onClick={() => handleNav('contact')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.contact}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleNav('privacy')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.privacy}</button></li>
              <li><button onClick={() => handleNav('terms')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.terms}</button></li>
              <li><button onClick={() => handleNav('security')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.security}</button></li>
              <li><button onClick={() => handleNav('compliance')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors">{t.links.compliance}</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-slate-500 text-sm">
              {t.rights}
            </p>
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm border border-slate-800 rounded-full px-3 py-1 hover:bg-slate-800 transition-colors backdrop-blur-sm"
            >
                <Globe className="w-3 h-3" />
                {language === 'en' ? 'English' : 'Português'}
            </button>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
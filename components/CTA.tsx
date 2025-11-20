import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import ScrollReveal from './ScrollReveal';
import { translations } from '../translations';

const CTA: React.FC = () => {
  const { navigate, language } = useNavigation();
  const t = translations[language].cta;
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-slate-950 -z-20" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal width="100%">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.title}
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            {t.subtitle}
            </p>
            
            <div className="flex flex-col items-center gap-4">
            <button 
                onClick={() => navigate('signup')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold text-lg shadow-lg shadow-primary-600/40 transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
                {t.button}
                <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-slate-400 mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                {t.badges[0]}
                <span className="mx-2">•</span>
                {t.badges[1]}
                <span className="mx-2">•</span>
                {t.badges[2]}
            </p>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
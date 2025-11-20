import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const SocialProof: React.FC = () => {
  const { language } = useNavigation();
  const t = translations[language].socialProof;
  const companies = [
    "Acme Corp", "GlobalTech", "Nebula", "Trio Systems", "Foxrun", "CircleAI"
  ];

  return (
    <div className="py-10 border-y border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
            {t.trusted}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50">
            {companies.map((company, index) => (
              <span 
                key={index} 
                className="text-xl md:text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default SocialProof;
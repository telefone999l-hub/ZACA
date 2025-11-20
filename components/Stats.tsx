import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Stats: React.FC = () => {
  const { language } = useNavigation();
  const t = translations[language].stats;

  const stats = [
    { value: "10M+", label: t.dailyEvents, color: "text-white" },
    { value: "99.99%", label: t.uptime, color: "text-white" },
    { value: "<50ms", label: t.latency, color: "text-white" },
    { value: "500+", label: t.integrations, color: "text-white" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative flex flex-col items-center justify-center group">
                {/* Divider for desktop */}
                {index !== 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-slate-700 to-transparent" />
                )}
                
                {/* Font Mono for Tech Feel */}
                <span className={`text-4xl md:text-6xl font-bold tracking-tight font-mono ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-200`}>
                  {stat.value}
                </span>
                <span className="text-sm text-slate-500 font-semibold uppercase tracking-widest text-[10px] md:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Stats;
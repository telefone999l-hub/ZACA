import React from 'react';
import { Brain, Zap, Shield, PieChart, Database, Globe, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Features: React.FC = () => {
  const { language } = useNavigation();
  const t = translations[language].features;

  const features = [
    {
      icon: Brain,
      title: t.cards.ai.title,
      description: t.cards.ai.desc,
      colSpan: "md:col-span-2",
      gradient: "from-primary-500/20 to-purple-500/20",
      hasGradientShift: true
    },
    {
      icon: Zap,
      title: t.cards.realtime.title,
      description: t.cards.realtime.desc,
      colSpan: "md:col-span-1",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Shield,
      title: t.cards.security.title,
      description: t.cards.security.desc,
      colSpan: "md:col-span-1",
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      icon: PieChart,
      title: t.cards.viz.title,
      description: t.cards.viz.desc,
      colSpan: "md:col-span-2",
      gradient: "from-orange-500/20 to-red-500/20",
      hasGradientShift: true
    },
    {
      icon: Database,
      title: t.cards.connect.title,
      description: t.cards.connect.desc,
      colSpan: "md:col-span-1",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      icon: Globe,
      title: t.cards.global.title,
      description: t.cards.global.desc,
      colSpan: "md:col-span-2",
      gradient: "from-violet-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal width="100%">
            <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm text-accent-400 font-bold tracking-widest uppercase mb-3">{t.sectionTitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t.mainTitle}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
                {t.subTitle}
            </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.colSpan || 'md:col-span-1'}`}>
                <ScrollReveal width="100%" delay={index * 100}>
                    <div 
                    className={`relative group overflow-hidden rounded-3xl p-8 glass-card h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.4)]`}
                    >
                    {/* Base Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Advanced Gradient Shift for Key Features */}
                    {feature.hasGradientShift && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                    )}

                    {feature.hasGradientShift && (
                         <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 bg-[length:200%_200%] animate-gradient transition-opacity duration-700 mix-blend-overlay`} />
                    )}

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-inner shadow-white/5">
                            <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                        {feature.title}
                        </h4>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                        {feature.description}
                        </p>
                    </div>
                    </div>
                </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
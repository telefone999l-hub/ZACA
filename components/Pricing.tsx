import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import ScrollReveal from './ScrollReveal';
import { translations } from '../translations';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { navigate, language } = useNavigation();
  const t = translations[language].pricing;

  const plans = [
    {
      name: t.plans.starter.name,
      price: isAnnual ? 39 : 49,
      description: t.plans.starter.desc,
      features: t.plans.starter.features,
      action: () => navigate('signup'),
      highlight: false
    },
    {
      name: t.plans.pro.name,
      price: isAnnual ? 119 : 149,
      description: t.plans.pro.desc,
      features: t.plans.pro.features,
      action: () => navigate('signup'),
      highlight: true
    },
    {
      name: t.plans.enterprise.name,
      price: t.custom,
      customPrice: true,
      description: t.plans.enterprise.desc,
      features: t.plans.enterprise.features,
      action: () => navigate('contact'),
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-900/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal width="100%">
            <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{t.title}</h2>
            <p className="text-lg text-slate-400 mb-10 font-light">{t.subtitle}</p>
            
            {/* Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white/10 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                >
                {t.monthly}
                </button>
                <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20' : 'text-slate-400 hover:text-white'}`}
                >
                {t.annual} <span className="text-xs opacity-80 ml-1 bg-white/20 px-1.5 py-0.5 rounded-full">{t.save}</span>
                </button>
            </div>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <div key={index} className={plan.highlight ? "z-10" : ""}>
             <ScrollReveal width="100%" delay={index * 100}>
                <div 
                className={`relative rounded-3xl p-8 transition-all duration-500 group hover:animate-glow
                    ${plan.highlight 
                    ? 'bg-white/[0.03] border border-primary-500/50 shadow-2xl shadow-primary-900/20 scale-105 backdrop-blur-xl' 
                    : 'bg-white/[0.01] border border-white/5 hover:border-primary-500/30 hover:bg-white/[0.03] backdrop-blur-md'
                    }`}
                >
                {plan.highlight && (
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1 tracking-wider">
                        <Sparkles className="w-3 h-3" /> {t.mostPopular}
                    </div>
                    </div>
                )}
                
                <div className="mb-8">
                    <h3 className="text-lg font-medium text-slate-300 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                        {plan.customPrice ? (
                            <span className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">{plan.price}</span>
                        ) : (
                            <>
                                <span className="text-4xl md:text-5xl font-bold text-white font-mono tracking-tight">${plan.price}</span>
                                <span className="text-slate-500">{t.perMonth}</span>
                            </>
                        )}
                    </div>
                    <p className="text-slate-500 text-sm mt-4 leading-relaxed">{plan.description}</p>
                </div>

                <button 
                    onClick={plan.action}
                    className={`w-full py-4 px-6 rounded-xl font-semibold mb-8 transition-all duration-200 flex items-center justify-center group-hover:scale-[1.02]
                    ${plan.highlight 
                    ? 'bg-white text-slate-950 hover:bg-slate-200 shadow-lg shadow-white/10' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                >
                    {plan.name === "Enterprise" ? t.contactSales : t.startTrial}
                </button>

                <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <div 
                            className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                            ${plan.highlight 
                                ? 'bg-primary-500/20 text-primary-400' 
                                : 'bg-white/5 text-slate-400'
                            }
                            group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/30
                            `}
                            style={{ transitionDelay: `${i * 75}ms` }}
                        >
                            <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">{feature}</span>
                    </div>
                    ))}
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

export default Pricing;
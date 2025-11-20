import React from 'react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Hero: React.FC = () => {
  const { navigate, language } = useNavigation();
  const t = translations[language].hero;

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Background Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-600/20 rounded-[100%] blur-[120px] -z-10 opacity-50 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-accent-600/10 rounded-[100%] blur-[120px] -z-10 opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default group">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500 group-hover:bg-accent-400 transition-colors"></span>
          </span>
          <span className="text-xs md:text-sm text-slate-300 font-medium tracking-wide font-mono">{t.badge}</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1] md:leading-[1.05] text-edge">
          {t.title} <br />
          <span className="gradient-text text-glow">
            {t.titleHighlight}
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-normal antialiased">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <button 
            onClick={() => navigate('signup')}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              {t.ctaPrimary} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => navigate('demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-lg border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
          >
            <PlayCircle className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            {t.ctaSecondary}
          </button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-6xl group perspective-1000">
            {/* Glow under the dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            
            <div className="relative bg-[#0B0F19] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.01] group-hover:-rotate-x-1">
                {/* Browser Chrome */}
                <div className="h-10 bg-[#0f172a] border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-[#FF5F56] transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-[#FFBD2E] transition-colors"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700/50 group-hover:bg-[#27C93F] transition-colors"></div>
                    </div>
                    <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-slate-500 font-mono border border-white/5">
                        app.datapulse.ai/dashboard
                    </div>
                    <div className="w-4"></div>
                </div>
                
                {/* Image */}
                <div className="relative">
                    <img 
                        src="https://picsum.photos/seed/datapulse/1600/900" 
                        alt="Dashboard Interface" 
                        className="w-full h-auto object-cover opacity-90" 
                    />
                    {/* Overlay Gradient to blend bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Floating Element 1 */}
                <div className="absolute top-1/4 right-12 bg-slate-900/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl animate-float hidden lg:block hover:border-primary-500/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 rounded-md bg-primary-500/20">
                            <Sparkles className="w-3 h-3 text-primary-400" />
                        </div>
                        <span className="text-xs text-slate-300 font-semibold tracking-wide">{t.floatAi}</span>
                    </div>
                    <div className="text-3xl font-bold text-white tracking-tighter font-mono">+128.4%</div>
                    <div className="text-[10px] text-slate-400 mt-1 font-mono">{t.floatConfidence}: <span className="text-green-400">98.2%</span></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
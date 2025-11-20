import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface InfoPageProps {
  type: 'about' | 'careers' | 'blog' | 'integrations' | 'changelog' | 'privacy' | 'terms' | 'security' | 'compliance';
}

const InfoPage: React.FC<InfoPageProps> = ({ type }) => {
  const { navigate, language } = useNavigation();
  const t = translations[language].pages[type];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative">
      <button 
        onClick={() => navigate('home')} 
        className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group z-20"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {language === 'en' ? 'Back to Home' : 'Voltar para Home'}
      </button>

      <div className="max-w-4xl mx-auto">
        <ScrollReveal width="100%">
          <div className="glass rounded-3xl p-8 md:p-16 shadow-2xl border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">{t.title}</h1>
            
            <div className="prose prose-lg prose-invert max-w-none text-slate-300">
              {t.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Placeholder visuals for specific pages to make them look richer */}
            {(type === 'integrations') && (
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 opacity-50">
                    {['Salesforce', 'AWS', 'Google Cloud', 'Snowflake', 'HubSpot', 'Slack', 'Jira', 'Oracle'].map((p, i) => (
                        <div key={i} className="bg-white/5 p-4 rounded-lg text-center font-semibold border border-white/5">{p}</div>
                    ))}
                </div>
            )}
            
            {(type === 'careers') && (
                 <div className="mt-12">
                    <button className="px-8 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-colors">
                        {language === 'en' ? 'View Open Positions' : 'Ver Vagas Abertas'}
                    </button>
                 </div>
            )}

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default InfoPage;
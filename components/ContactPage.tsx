import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ArrowLeft, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactPage: React.FC = () => {
  const { navigate, showNotification } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showNotification('Mensagem enviada! Entraremos em contato em breve.', 'success');
    navigate('home');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative">
      <button 
        onClick={() => navigate('home')} 
        className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group z-20"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </button>

      <div className="max-w-6xl mx-auto">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 glass rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-6">Fale Conosco</h1>
                <p className="text-slate-400 text-lg mb-12">
                  Tem dúvidas sobre nossos planos Enterprise ou precisa de suporte técnico? Estamos aqui para ajudar.
                </p>

                <div className="space-y-8">
                  {/* WhatsApp Section - Highlighted */}
                  <a 
                    href="https://wa.me/554791505213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">WhatsApp</h3>
                      <p className="text-green-400 font-bold text-lg">+55 47 9150-5213</p>
                      <p className="text-slate-400 text-sm mt-1 group-hover:text-white transition-colors">Clique para iniciar conversa</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 px-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Email</h3>
                      <p className="text-slate-400">contato@datapulse.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 px-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-700/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-slate-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Escritório</h3>
                      <p className="text-slate-400">Av. Brasil, 1234<br/>Balneário Camboriú, SC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800 px-4">
                <p className="text-slate-500 text-sm">Respondemos normalmente em até 2 horas em dias úteis.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nome</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Sobrenome</label>
                    <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" placeholder="Sobrenome" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" placeholder="seu@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Assunto</label>
                  <select className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all">
                    <option>Vendas / Comercial</option>
                    <option>Suporte Técnico</option>
                    <option>Parcerias</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                </div>

                <button type="submit" className="w-full bg-white hover:bg-slate-200 text-slate-950 font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  Enviar Mensagem <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default ContactPage;

import React from 'react';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DemoPage from './components/DemoPage';
import ContactPage from './components/ContactPage';
import InfoPage from './components/InfoPage';
import AiRobot from './components/AiRobot';
import { CheckCircle, AlertCircle } from 'lucide-react';

const NotificationBanner: React.FC = () => {
  const { notification } = useNavigation();
  
  if (!notification) return null;

  return (
    <div className="fixed top-24 left-0 w-full flex justify-center z-[60] pointer-events-none animate-in fade-in slide-in-from-top-5 duration-500">
      <div className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl border backdrop-blur-xl pointer-events-auto transform transition-all ${
        notification.type === 'success' 
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 shadow-emerald-900/20' 
          : 'bg-red-500/10 border-red-500/20 text-red-400 shadow-red-900/20'
      }`}>
        {notification.type === 'success' ? (
          <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4" /></div>
        ) : (
          <div className="bg-red-500/20 p-1 rounded-full"><AlertCircle className="w-4 h-4" /></div>
        )}
        <span className="font-medium text-sm tracking-wide font-heading">{notification.message}</span>
      </div>
    </div>
  );
};

const MainContent: React.FC = () => (
  <>
    <Hero />
    <SocialProof />
    <Features />
    <Stats />
    <AiRobot />
    <Pricing />
    <Testimonials />
    <CTA />
  </>
);

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <div className="relative min-h-screen font-sans text-slate-100 selection:bg-primary-500/30 overflow-x-hidden">
      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>
      
      <ParticleBackground />
      <Navbar />
      <NotificationBanner />
      
      <main className="relative z-10">
        {currentPage === 'home' && <MainContent />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'signup' && <SignupPage />}
        {currentPage === 'demo' && <DemoPage />}
        {currentPage === 'contact' && <ContactPage />}
        
        {/* New Pages */}
        {currentPage === 'about' && <InfoPage type="about" />}
        {currentPage === 'careers' && <InfoPage type="careers" />}
        {currentPage === 'blog' && <InfoPage type="blog" />}
        {currentPage === 'integrations' && <InfoPage type="integrations" />}
        {currentPage === 'changelog' && <InfoPage type="changelog" />}
        {currentPage === 'privacy' && <InfoPage type="privacy" />}
        {currentPage === 'terms' && <InfoPage type="terms" />}
        {currentPage === 'security' && <InfoPage type="security" />}
        {currentPage === 'compliance' && <InfoPage type="compliance" />}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;

import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ArrowLeft, Play, Calendar } from 'lucide-react';

const DemoPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 relative">
      <button 
        onClick={() => navigate('home')} 
        className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group z-20"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">See DataPulse in Action</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch how our predictive AI engine transforms raw data into strategic advantages in under 2 minutes.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-5xl mx-auto aspect-video bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group mb-20">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-primary-600/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
          </div>
          <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Demo Thumbnail" className="w-full h-full object-cover opacity-50" />
          
          {/* Fake Controls */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
             <div className="w-1/3 h-full bg-primary-500"></div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="glass rounded-2xl p-10 max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-accent-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our product specialists can walk you through a custom demo tailored to your specific data stack.
          </p>
          <button onClick={() => navigate('contact')} className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-lg hover:bg-slate-200 transition-colors shadow-lg hover:shadow-white/20">
            Book a Live Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
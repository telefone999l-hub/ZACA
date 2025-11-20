import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ArrowLeft, Github, Mail, Lock } from 'lucide-react';

const LoginPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center relative">
      <button 
        onClick={() => navigate('home')} 
        className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </button>

      <div className="w-full max-w-md glass p-8 rounded-2xl shadow-2xl border-t border-slate-700 animate-[pulse-slow_4s_ease-in-out_infinite]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-slate-400">Sign in to your DataPulse dashboard</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('home'); }}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="email" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input 
                type="password" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-primary-500 focus:ring-primary-500/50" />
              <span className="text-slate-400">Remember me</span>
            </label>
            <a href="#" className="text-primary-400 hover:text-primary-300">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-3 rounded-lg shadow-lg shadow-primary-600/30 transition-all hover:scale-[1.02]">
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px bg-slate-800 flex-1" />
          <span className="text-slate-500 text-sm">or continue with</span>
          <div className="h-px bg-slate-800 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-700 transition-colors">
            <Github className="w-5 h-5" />
            Github
          </button>
          <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-2.5 rounded-lg border border-slate-700 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Google
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <button onClick={() => navigate('signup')} className="text-primary-400 hover:text-white font-medium">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
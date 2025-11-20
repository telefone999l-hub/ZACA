import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { ArrowLeft, User, Mail, Lock, Check } from 'lucide-react';

const SignupPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center relative">
      <button 
        onClick={() => navigate('home')} 
        className="absolute top-24 left-4 md:left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
      </button>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 glass rounded-2xl p-8 shadow-2xl overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white mb-2">Start your 14-day free trial</h2>
          <p className="text-slate-400 mb-8">No credit card required. Cancel anytime.</p>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); navigate('home'); }}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="text" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                  type="email" 
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
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
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 text-white font-bold py-3 rounded-lg shadow-lg shadow-primary-600/30 transition-all hover:scale-[1.02] mt-2">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <button onClick={() => navigate('login')} className="text-primary-400 hover:text-white font-medium">
              Log in
            </button>
          </p>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden md:flex flex-col justify-center bg-slate-900/50 rounded-xl p-8 border border-slate-800">
          <h3 className="text-xl font-semibold text-white mb-6">What you'll get:</h3>
          <ul className="space-y-4">
            {[
              "Full access to all predictive features",
              "Unlimited data events processing",
              "3 team member seats included",
              "Priority email support",
              "Access to API and Webhooks",
              "Interactive real-time dashboards"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary-400" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i*10}/50/50`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="User" />
                ))}
              </div>
              <div className="text-xs text-slate-400">
                Join <span className="text-white font-bold">10,000+</span> developers <br /> building the future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
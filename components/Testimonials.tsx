
import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useNavigation();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      content: t.t1,
      author: "Elena Rodriguez",
      role: t.roles.cto,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      content: t.t2,
      author: "James Chen",
      role: t.roles.vp,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      content: t.t3,
      author: "Sarah Miller",
      role: t.roles.head,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-32 bg-[#050914] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <ScrollReveal width="100%">
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
            </div>
        </ScrollReveal>

        <div className="relative min-h-[300px]">
            {testimonials.map((testimonial, i) => (
                <div 
                    key={i}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out transform ${
                        i === activeIndex 
                        ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                        : 'opacity-0 translate-y-10 scale-95 blur-sm pointer-events-none'
                    }`}
                >
                    <div className="mb-8">
                        {[1,2,3,4,5].map(star => (
                            <span key={star} className="text-yellow-500 text-xl mx-0.5">★</span>
                        ))}
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-medium text-slate-200 leading-tight mb-10 max-w-3xl">
                        {testimonial.content}
                    </blockquote>
                    <div className="flex items-center gap-4">
                        <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full border-2 border-white/10 object-cover" />
                        <div className="text-left">
                            <div className="text-white font-semibold text-lg">{testimonial.author}</div>
                            <div className="text-primary-400 text-sm font-medium">{testimonial.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
                <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


import React, { useRef, useEffect, useState } from 'react';
import { useNavigation } from '../contexts/NavigationContext';
import { translations } from '../translations';
import ScrollReveal from './ScrollReveal';

const AiRobot: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const eyesContainerRef = useRef<HTMLDivElement>(null);
  
  const [isBlinking, setIsBlinking] = useState(false);
  const { language } = useNavigation();
  const t = translations[language].robot;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !headRef.current || !eyesContainerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to the robot center
      // Normalize between -1 and 1
      const mouseX = Math.min(Math.max((e.clientX - centerX) / (window.innerWidth / 2), -1), 1);
      const mouseY = Math.min(Math.max((e.clientY - centerY) / (window.innerHeight / 2), -1), 1);

      // 3D Rotation logic
      // Head follows mouse
      headRef.current.style.transform = `
        rotateY(${mouseX * 25}deg) 
        rotateX(${-mouseY * 20}deg) 
        translateZ(0px)
      `;

      // Eyes move within the head (Parallax)
      // They move slightly MORE in the direction of the mouse to create depth inside the "glass"
      eyesContainerRef.current.style.transform = `
        translateX(${mouseX * 12}px) 
        translateY(${mouseY * 8}px)
      `;
    };

    // Blink interval
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 4000);

    // Click interaction
    const handleClick = () => {
        setIsBlinking(true);
        if(headRef.current) {
            headRef.current.style.filter = "brightness(1.3)";
            setTimeout(() => {
                if(headRef.current) headRef.current.style.filter = "brightness(1)";
            }, 200);
        }
        setTimeout(() => setIsBlinking(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 order-2 md:order-1">
          <ScrollReveal width="100%">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {t.status}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {t.title}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div 
            ref={containerRef}
            className="flex-1 order-1 md:order-2 flex justify-center items-center h-[400px] w-full relative perspective-1000"
        >
            {/* Floating Animation Container */}
            <div className="animate-float">
                {/* 3D Head */}
                <div 
                    ref={headRef}
                    className="w-64 h-64 relative rounded-[2.5rem] transition-transform duration-100 ease-out preserve-3d cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Glow Backing */}
                    <div className="absolute inset-0 rounded-[2.5rem] bg-primary-500/30 blur-3xl transform translate-z-[-50px]"></div>

                    {/* Glass Face */}
                    <div className="absolute inset-0 rounded-[2.5rem] glass bg-gradient-to-b from-white/10 to-transparent border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                        
                        {/* Reflection Shine */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 rounded-t-[2.5rem]"></div>

                        {/* Internal Dark Screen */}
                        <div className="w-[90%] h-[85%] bg-[#020617] rounded-[2rem] border border-white/5 relative shadow-inner flex items-center justify-center overflow-hidden">
                            
                            {/* Eyes Container */}
                            <div ref={eyesContainerRef} className="flex gap-8 transition-transform duration-75 ease-out">
                                {/* Left Eye */}
                                <div className={`w-16 h-24 rounded-full bg-gradient-to-b from-primary-400 to-accent-500 shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center justify-center transition-all duration-100 ${isBlinking ? 'scale-y-0' : 'scale-y-100'}`}>
                                    <div className="w-4 h-8 bg-white/80 rounded-full blur-[1px]"></div>
                                </div>
                                {/* Right Eye */}
                                <div className={`w-16 h-24 rounded-full bg-gradient-to-b from-primary-400 to-accent-500 shadow-[0_0_30px_rgba(99,102,241,0.6)] flex items-center justify-center transition-all duration-100 ${isBlinking ? 'scale-y-0' : 'scale-y-100'}`}>
                                     <div className="w-4 h-8 bg-white/80 rounded-full blur-[1px]"></div>
                                </div>
                            </div>
                            
                            {/* Scanlines */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent animate-pulse pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Side Panels (Pseudo-3D thickness) */}
                    <div className="absolute inset-y-4 -left-4 w-4 bg-white/5 rounded-l-xl transform rotateY(-90deg) origin-right border-l border-white/10"></div>
                    <div className="absolute inset-y-4 -right-4 w-4 bg-white/5 rounded-r-xl transform rotateY(90deg) origin-left border-r border-white/10"></div>

                </div>
            </div>
            
            {/* Shadow base */}
            <div className="absolute bottom-10 w-40 h-10 bg-black/50 blur-xl rounded-[100%] animate-pulse-slow"></div>

        </div>
      </div>
    </section>
  );
};

export default AiRobot;

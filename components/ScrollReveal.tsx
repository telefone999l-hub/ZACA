import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Delay in ms
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = 'fit-content', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small timeout if delay is requested
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Optional: Stop observing once visible to keep it visible
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { 
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset slightly so it triggers before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`transform transition-all duration-1000 ease-out will-change-transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 blur-0' 
          : 'opacity-0 translate-y-12 blur-sm'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
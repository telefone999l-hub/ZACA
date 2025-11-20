import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // State
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;
    
    // Configuration
    const particleCount = Math.min(60, (width * height) / 15000); // Adjusted count for cleaner look
    const connectionDistance = 160;
    const mouseDistance = 250;
    
    // Mouse State
    const mouse = { x: -1000, y: -1000 };

    // Fluid Blobs (The "Aurora" effect)
    // These are large gradient circles that move slowly to create the fluid background
    const blobs = [
      { x: width * 0.3, y: height * 0.3, vx: 0.3, vy: 0.2, r: Math.min(width, height) * 0.4, color: 'rgba(99, 102, 241, 0.12)' }, // Indigo
      { x: width * 0.7, y: height * 0.7, vx: -0.2, vy: -0.3, r: Math.min(width, height) * 0.5, color: 'rgba(139, 92, 246, 0.12)' }, // Violet
      { x: width * 0.1, y: height * 0.8, vx: 0.4, vy: -0.1, r: Math.min(width, height) * 0.35, color: 'rgba(59, 130, 246, 0.1)' }, // Blue
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number; // Original position for organic return
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow base drift
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 1.5 + 0.5;
        this.density = (Math.random() * 20) + 1; // Weight for mouse interaction
      }

      update() {
        // 1. Mouse Interaction Physics
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseDistance) {
            // Move away from mouse
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            
            this.x -= directionX;
            this.y -= directionY;
        } else {
            // 2. Return to natural drift orbit if not disturbed
            if (this.x !== this.baseX) {
                const dx = this.x - this.baseX;
                this.x -= dx / 20; // Gently spring back towards base area
            }
            if (this.y !== this.baseY) {
                const dy = this.y - this.baseY;
                this.y -= dy / 20;
            }
        }

        // 3. Base movement
        this.x += this.vx;
        this.y += this.vy;
        this.baseX += this.vx;
        this.baseY += this.vy;

        // 4. Screen Wrapping
        if (this.baseX < 0 || this.baseX > width) {
             this.vx *= -1;
             this.baseX = Math.max(0, Math.min(width, this.baseX));
        }
        if (this.baseY < 0 || this.baseY > height) {
             this.vy *= -1;
             this.baseY = Math.max(0, Math.min(height, this.baseY));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 180, 252, 0.6)'; // Light Indigo/Slate
        ctx.fill();
      }
    }

    // Initialize Particles
    let particles: Particle[] = [];
    const initParticles = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };
    initParticles();

    // Handlers
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Reset blobs radius for new size
      blobs[0].r = Math.min(width, height) * 0.4;
      blobs[1].r = Math.min(width, height) * 0.5;
      blobs[2].r = Math.min(width, height) * 0.35;

      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.x;
        mouse.y = e.y;
    };

    const handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    // Animation Loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: FLUID BLOBS ---
      // Use 'screen' blending to make overlapping colors glow nicely
      ctx.globalCompositeOperation = 'screen';
      
      blobs.forEach(blob => {
        // Move blobs
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce blobs off screen edges with buffer
        if (blob.x < -100 || blob.x > width + 100) blob.vx *= -1;
        if (blob.y < -100 || blob.y > height + 100) blob.vy *= -1;

        // Draw Soft Gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.r * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Reset blending for particles
      ctx.globalCompositeOperation = 'source-over';


      // --- LAYER 2: PARTICLES & CONNECTIONS ---
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(148, 163, 232, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-80"
    />
  );
};

export default ParticleBackground;
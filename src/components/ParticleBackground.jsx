import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    const options = {
      velocity: 0.6,
      density: 15000,
      netLineDistance: 200,
      netLineColor: '#929292',
      particleColors: ['#aaa']
    };

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.radius = Math.random() * 1.5 + 1;
        this.opacity = 0;
        this.velocity = {
          x: (Math.random() - 0.5) * options.velocity,
          y: (Math.random() - 0.5) * options.velocity
        };
      }

      update() {
        if (this.opacity < 1) this.opacity += 0.01;
        
        if (this.x > canvas.width + 100 || this.x < -100) this.velocity.x = -this.velocity.x;
        if (this.y > canvas.height + 100 || this.y < -100) this.velocity.y = -this.velocity.y;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.particleColor || options.particleColors[0];
        ctx.globalAlpha = this.opacity;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const quantity = (canvas.width * canvas.height) / options.density;
      particles = [];
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < options.netLineDistance) {
            ctx.beginPath();
            ctx.strokeStyle = options.netLineColor;
            ctx.globalAlpha = ((options.netLineDistance - dist) / options.netLineDistance) * p1.opacity * p2.opacity * 0.5;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and Draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="particle-network-animation" ref={containerRef}>
      <canvas ref={canvasRef} />
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>
    </div>
  );
}


import { useEffect, useRef } from 'react';

const TechBar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = 4;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Define particles
    const particles: {x: number, speed: number, size: number}[] = [];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        speed: 1 + Math.random() * 3,
        size: 1 + Math.random() * 2
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#E55F00');
      gradient.addColorStop(0.5, '#FF6B00');
      gradient.addColorStop(1, '#FF8534');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, canvas.height / 2, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speed;
        
        // Reset position if off screen
        if (particle.x > canvas.width + particle.size) {
          particle.x = -particle.size;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <div className="w-full my-8 relative">
      <canvas ref={canvasRef} className="w-full h-1"></canvas>
    </div>
  );
};

export default TechBar;


import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

const StartupAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500), // Logo appears
      setTimeout(() => setPhase(2), 1500), // Text appears
      setTimeout(() => setPhase(3), 2500), // Particles spread
      setTimeout(() => setPhase(4), 3500), // Fade out
      setTimeout(onComplete, 4000), // Complete
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);
  
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#121212] transition-opacity duration-500 ${
      phase === 4 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-10 animate-pulse"></div>
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle}
            className={`absolute w-1 h-1 bg-orange rounded-full transition-all duration-1000 ${
              phase >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animation: phase >= 3 ? 'float 3s ease-in-out infinite' : 'none',
            }}
          />
        ))}
      </div>
      
      {/* Main logo and text */}
      <div className="relative z-10 text-center">
        {/* Logo container */}
        <div className={`relative mb-8 transition-all duration-1000 ${
          phase >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-dark via-orange to-orange-light rounded-full blur-xl opacity-50 animate-pulse"></div>
          
          {/* Logo circle */}
          <div className="relative w-32 h-32 mx-auto bg-gradient-to-tr from-orange-dark via-orange to-orange-light rounded-full flex items-center justify-center">
            <div className="w-28 h-28 bg-[#121212] rounded-full flex items-center justify-center">
              <Code className="w-12 h-12 text-orange" />
            </div>
          </div>
          
          {/* Rotating rings */}
          <div className="absolute inset-0 w-32 h-32 mx-auto">
            <div className="absolute inset-0 border-2 border-orange/30 rounded-full animate-spin"></div>
            <div className="absolute inset-2 border border-orange/20 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
          </div>
        </div>
        
        {/* Text */}
        <div className={`transition-all duration-1000 delay-500 ${
          phase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-orange">&lt;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              WeWantWilliams
            </span>
            <span className="text-orange">/&gt;</span>
          </h1>
          <p className="text-gray-400 font-mono">Initializing portfolio...</p>
          
          {/* Loading bar */}
          <div className="w-64 h-1 bg-darkgray/50 rounded-full mx-auto mt-4 overflow-hidden">
            <div className={`h-full bg-gradient-to-r from-orange-dark to-orange transition-all duration-2000 ${
              phase >= 2 ? 'w-full' : 'w-0'
            }`}></div>
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange/30 transition-all duration-1000 ${
        phase >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}></div>
      <div className={`absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-orange/30 transition-all duration-1000 ${
        phase >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}></div>
      <div className={`absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-orange/30 transition-all duration-1000 ${
        phase >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}></div>
      <div className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange/30 transition-all duration-1000 ${
        phase >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}></div>
    </div>
  );
};

export default StartupAnimation;


import { useState, useEffect } from 'react';

const StartupAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Hi, I'm James Williams";
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500), // Start typing
      setTimeout(() => setPhase(2), 3000), // Move to position
      setTimeout(() => setPhase(3), 4000), // Fade out
      setTimeout(onComplete, 4500), // Complete
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);
  
  useEffect(() => {
    if (phase >= 1) {
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 100);
      
      return () => clearInterval(typeTimer);
    }
  }, [phase]);
  
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorTimer);
  }, []);
  
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#121212] transition-opacity duration-500 ${
      phase === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-10 animate-pulse"></div>
      
      {/* Main typing text */}
      <div className="relative z-10 w-full">
        <div className={`transition-all duration-1000 ${
          phase >= 2 ? 'translate-x-[-50vw] translate-y-[-20vh] scale-90' : 'translate-x-0 translate-y-0 scale-100'
        } ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-center">
            <h1 className={`font-bold mb-4 flex items-center justify-center transition-all duration-1000 ${
              phase >= 2 ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-5xl'
            }`}>
              <span className={`transition-all duration-1000 ${
                phase >= 2 ? 'bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400' : 'bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'
              }`}>
                {phase >= 2 ? 'Hi, I\'m' : typedText}
              </span>
              {phase >= 2 && (
                <span className="block text-orange mt-2 ml-2">James Williams</span>
              )}
              <span className={`h-8 w-1 bg-orange ml-1 ${showCursor && phase < 2 ? 'opacity-100' : 'opacity-0'}`}></span>
            </h1>
            {phase < 2 && (
              <p className="text-gray-400 font-mono">Loading portfolio...</p>
            )}
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

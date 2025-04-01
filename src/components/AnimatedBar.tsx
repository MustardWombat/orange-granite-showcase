
import React from 'react';

interface AnimatedBarProps {
  isThick?: boolean;
}

const AnimatedBar: React.FC<AnimatedBarProps> = ({ isThick = false }) => {
  const heightClass = isThick ? "h-4" : "h-2";
  
  return (
    <div className={`w-full bg-gradient-to-r from-orange-dark via-orange to-orange-light overflow-hidden relative my-12 ${heightClass}`}>
      <div className="absolute top-0 h-full w-1/3 bg-orange/30 animate-animated-bar"></div>
    </div>
  );
};

export default AnimatedBar;

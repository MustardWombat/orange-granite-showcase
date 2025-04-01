
const AnimatedBar = () => {
  return (
    <div className="h-4 w-full bg-gradient-to-r from-orange-dark via-orange to-orange-light overflow-hidden relative my-12">
      <div className="absolute top-0 h-full w-1/3 bg-orange/30 animate-animated-bar"></div>
    </div>
  );
};

export default AnimatedBar;

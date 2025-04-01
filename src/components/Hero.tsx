
import { useEffect, useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-28 pb-16 relative slide border-orange-glow" id="home" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-5"></div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              James <span className="text-orange">Williams</span>
            </h1>
            <div className="h-1 w-24 bg-orange mb-6"></div>
            <p className="text-lg text-gray-300 mb-4">
              My whole life I have been fascinated with the idea of engineering and how the world around us was built.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Through perseverance, passion, and the support of my friends and family, I have been able to pursue my dreams of creating a better tomorrow.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I'd love to show you around, so below is everything there is to know about me, including my past or current projects, particular skills I'm proud of, and even my blog!
            </p>
            
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="bg-orange hover:bg-orange-light text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
                View Projects
              </a>
              <a href="#contact" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-3 px-6 rounded-md transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-orange-dark via-orange to-orange-light p-1 rounded-full">
              <div className="w-full h-full bg-darkgray rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="James Williams" 
                  className="w-[95%] h-[95%] object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

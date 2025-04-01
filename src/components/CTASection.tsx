
import { useRef, useEffect } from 'react';

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section className="py-20 bg-gradient-to-r from-orange-dark to-orange relative overflow-hidden slide" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-10"></div>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            Michigan State University student with a strong background in robotics and
            software development. Looking for internship opportunities and collaborative
            projects.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-orange font-medium py-3 px-8 rounded-md hover:bg-white/90 transition-colors duration-300">
              Get in Touch
            </a>
            <a href="#projects" className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-colors duration-300">
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

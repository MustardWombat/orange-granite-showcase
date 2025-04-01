
import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Computer Science Student";
  
  useEffect(() => {
    let index = 0;
    let timer: NodeJS.Timeout;
    
    const typeText = () => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
        timer = setTimeout(typeText, 100);
      }
    };
    
    typeText();
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(cursorTimer);
    };
  }, []);
  
  return (
    <section className="min-h-screen pt-28 relative z-10 flex items-center section-animate" id="home">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-col items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Hi, I'm
                </span> 
                <span className="block text-orange mt-2">James Williams</span>
              </h1>
              
              <div className="typewriter h-8 mb-6 flex items-center">
                <span className="text-xl font-mono">&gt; {text}</span>
                <span className={`h-5 w-2 bg-orange ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Passionate about finding solutions to complex problems through innovative design and development. 
                <span className="block mt-2">
                  I merge my skills in robotics, software development and system architecture to build technology that matters.
                </span>
              </p>
              
              <div className="flex gap-5 mb-8">
                <a href="#" className="social-icon-link" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="social-icon-link" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:will4379@msu.edu" className="social-icon-link" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="tech-btn primary flex items-center gap-2">
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#contact" className="tech-btn secondary">
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-dark via-orange to-orange-light rounded-full blur-xl opacity-25 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-tr from-orange-dark via-orange to-orange-light rounded-full"></div>
              <div className="absolute inset-3 bg-darkgray rounded-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                  alt="James Williams" 
                  className="w-[92%] h-[92%] object-cover rounded-full hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x400/FF6B00/FFFFFF?text=JW";
                  }}
                />
              </div>
              
              {/* Tech decorations */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-dashed border-orange/50 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 border border-orange/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

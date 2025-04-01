
import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-darkgray/90 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-mono font-bold text-white hover:text-orange transition-colors">
            <span className="text-orange">&lt;</span>WeWantWilliams<span className="text-orange">/&gt;</span>
          </a>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <ul className={`${
            isMenuOpen 
              ? 'flex flex-col absolute top-full left-0 w-full bg-darkgray/95 backdrop-blur-sm p-4 shadow-md' 
              : 'hidden'
            } md:flex md:flex-row md:static md:bg-transparent md:p-0 md:shadow-none items-center gap-6`}
          >
            <li><a href="#" className="nav-link">Home</a></li>
            <li className="md:ml-2"><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#roadmap" className="nav-link">Roadmap</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
            <li><a href="#organizations" className="nav-link">Organizations</a></li>
            <li><a href="#github" className="nav-link">GitHub</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            <li>
              <a 
                href="#" 
                className="flex items-center gap-2 bg-orange hover:bg-orange-light px-4 py-2 rounded-md text-white transition-colors duration-300"
              >
                <FileText size={16} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

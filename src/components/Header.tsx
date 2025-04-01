
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-darkgray/95 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white hover:text-orange transition-colors">
            &lt;<span className="text-orange">WeWantWilliams</span>/&gt;
          </a>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <ul className={`${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-darkgray/95 backdrop-blur-sm p-4 shadow-md' : 'hidden'} md:flex md:static md:flex-row md:bg-transparent md:p-0 md:shadow-none gap-6`}>
            <li><a href="#" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#projects" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#education" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#blog" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" className="text-white hover:text-orange transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li>
              <a href="#" className="bg-orange px-4 py-2 rounded text-white hover:bg-orange-light transition-colors" onClick={() => setIsMenuOpen(false)}>
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

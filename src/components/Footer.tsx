
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-12 pb-6 bg-darkgray border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-mono font-bold text-white hover:text-orange transition-colors">
              <span className="text-orange">&lt;</span>JW<span className="text-orange">/&gt;</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-sm">
              A Computer Science student passionate about robotics, software engineering, and building solutions that matter.
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:will4379@msu.edu" className="footer-social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400">
              will4379@msu.edu | (734) 394-8207
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm flex flex-col items-center">
          <p>
            &copy; {currentYear} James Williams. All rights reserved.
          </p>
          <p className="mt-2 flex items-center gap-1">
            Designed and developed with <Heart size={14} className="text-orange fill-orange" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

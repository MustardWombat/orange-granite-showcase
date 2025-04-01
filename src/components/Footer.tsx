
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-darkgray border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white hover:text-orange transition-colors">
              &lt;<span className="text-orange">WeWantWilliams</span>/&gt;
            </a>
            <p className="mt-2 text-gray-400">
              &copy; {currentYear} James Williams | Detroit, Michigan
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange/20 flex items-center justify-center transition-colors">
              <Github className="text-white" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange/20 flex items-center justify-center transition-colors">
              <Linkedin className="text-white" size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange/20 flex items-center justify-center transition-colors">
              <Twitter className="text-white" size={20} />
            </a>
            <a href="mailto:will4379@msu.edu" className="w-10 h-10 rounded-full bg-white/5 hover:bg-orange/20 flex items-center justify-center transition-colors">
              <Mail className="text-white" size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-gray-400">
          <p>will4379@msu.edu | (734) 394-8207</p>
          <p className="mt-2 text-sm">
            Website designed and developed with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

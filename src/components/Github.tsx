
import { useRef, useEffect } from 'react';
import { Github as GithubIcon, ExternalLink } from 'lucide-react';

const Github = () => {
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
    <section id="github" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          <div className="github-card flex-1">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GithubIcon className="mr-2 text-orange" size={20} />
              Open Source & Project Contributions
            </h3>
            <p className="text-gray-300">
              Building my portfolio of projects with a focus on robotics, blockchain technology,
              and mobile application development.
            </p>
            
            <div className="github-stats">
              <div className="github-stat">
                <h4>3+</h4>
                <p>Projects</p>
              </div>
              <div className="github-stat">
                <h4>2</h4>
                <p>Languages</p>
              </div>
              <div className="github-stat">
                <h4>3.9</h4>
                <p>GPA</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <a href="https://wewantwilliams.com" className="github-btn flex items-center">
                <ExternalLink size={16} className="mr-2" />
                Visit Portfolio
              </a>
              <a href="https://github.com/MustardWombat" className="github-btn flex items-center">
                <GithubIcon size={16} className="mr-2" />
                My Github
              </a>
            </div>
          </div>
          
          <div className="flex-1 rounded-lg overflow-hidden bg-granite">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="GitHub Contribution Graph" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Recent Commits</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 border-l-2 border-orange pl-4 py-1">Updated Neural Database schema optimization</li>
                <li className="text-gray-300 border-l-2 border-orange pl-4 py-1">Fixed robot arm inverse kinematics calculation</li>
                <li className="text-gray-300 border-l-2 border-orange pl-4 py-1">Added image recognition module to COSMOS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;

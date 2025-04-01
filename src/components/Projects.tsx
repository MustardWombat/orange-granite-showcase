
import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const projectsData = [
  {
    id: "project1",
    title: "Kinematic Vision Based Autonomous Robot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "A team and I started this project in September 2024. The goal was to create a robot that could recognize and differentiate between good and bad eggs, pick them up using a kinematic arm, and drop them off in a basket. This project is still a work in progress."
  },
  {
    id: "project2",
    title: "COSMOS OPEN AI Powered Study App",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "This project uses OpenAI's API to provide personalized study assistance. It analyzes user input and recommends optimal learning strategies. Currently in early development, it aims to revolutionize how students study."
  },
  {
    id: "project3",
    title: "Neural DataBase",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "An AI-Enhanced SQL Engine for Intelligent Query Optimization and Database Management. This innovation combines neural network concepts with traditional database operations to create more efficient and intelligent data retrieval systems."
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(projectsData[0]);
  const sectionRef = useRef<HTMLElement>(null);
  
  const openModal = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setModalOpen(true);
    }
  };
  
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
    <section id="projects" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="portfolio-item"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img src={project.image} alt={project.title} />
              <div className="portfolio-content">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <button 
                  className="view-btn"
                  onClick={() => openModal(project.id)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <div className="modal flex" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setModalOpen(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">{currentProject.title}</h2>
            <div className="mb-6">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
            </div>
            <p className="text-gray-300">{currentProject.description}</p>
            
            <div className="mt-6 flex gap-4">
              <button className="bg-orange hover:bg-orange-light text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                Live Demo
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium py-2 px-4 rounded-md transition-colors duration-300">
                GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

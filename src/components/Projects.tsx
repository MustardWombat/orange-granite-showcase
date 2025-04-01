import { useState } from 'react';
import { Code, ExternalLink, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

const projectsData = [
  {
    id: "project1",
    title: "Kinematic Vision Based Autonomous Robot",
    image: "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png",
    description: "A team and I started this project in September 2024. The goal was to create a robot that could recognize and differentiate between good and bad eggs, pick them up using a kinematic arm, and drop them off in a basket. This project is still a work in progress.",
    technologies: ["Python", "ROS2", "Computer Vision", "Robotics"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "project2",
    title: "COSMOS OPEN AI Powered Study App",
    image: "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png",
    description: "This project uses OpenAI's API to provide personalized study assistance. It analyzes user input and recommends optimal learning strategies. Currently in early development, it aims to revolutionize how students study.",
    technologies: ["React", "TypeScript", "OpenAI API", "Firebase"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: "project3",
    title: "Neural DataBase",
    image: "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png",
    description: "An AI-Enhanced SQL Engine for Intelligent Query Optimization and Database Management. This innovation combines neural network concepts with traditional database operations to create more efficient and intelligent data retrieval systems.",
    technologies: ["Python", "SQL", "TensorFlow", "Docker"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(projectsData[0]);
  
  const openModal = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
      setCurrentProject(project);
      setModalOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Code className="text-orange" />
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card group"
            onClick={() => openModal(project.id)}
          >
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <div className="absolute inset-0 bg-darkgray/50 group-hover:bg-darkgray/20 transition-all duration-300"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png";
                }}
              />
            </div>
            
            <div className="p-6 bg-granite border border-gray-700 rounded-b-lg group-hover:border-orange/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange transition-colors">{project.title}</h3>
              
              <p className="text-gray-400 line-clamp-2 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-darkgray/70 rounded text-orange">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-darkgray/70 rounded text-gray-400">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <button className="w-full py-2 text-center border border-orange/50 text-orange rounded hover:bg-orange/10 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-granite border border-gray-700 overflow-y-auto">
          <div className="sticky top-0 bg-granite z-10 flex justify-between items-center p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold">{currentProject.title}</h2>
            <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-auto max-h-[50vh] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png";
                }}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-orange">Description</h3>
              <p className="text-gray-300">{currentProject.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-orange">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-darkgray rounded text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={currentProject.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tech-btn primary flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a 
                href={currentProject.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tech-btn secondary flex items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;

import { useState } from 'react';
import { Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

const orgsData = [
  {
    id: "org1",
    title: "Precision Agriculture Robotics Club",
    description: "Perception and Navigation team member collaborating to create autonomously controlled robots using Python, C++, and microcontrollers.",
    image: "/lovable-uploads/a3069536-1c03-407a-8506-c59257b4b263.png",
    content: "As a member of the Perception and Navigation team within the Precision Agriculture Robotics Club, I've been instrumental in developing systems that allow robots to sense their environment and navigate autonomously through agricultural fields.\n\nOur team focuses on integrating computer vision with sensor data to create reliable navigation systems that can operate in the challenging and variable conditions of agricultural environments. Using technologies like LiDAR, RGB-D cameras, and various environmental sensors, we've developed algorithms that enable robots to detect crop rows, identify obstacles, and make real-time navigation decisions.\n\nThrough this club, I've gained hands-on experience implementing cutting-edge robotics concepts using Python and C++ while working with platforms like ROS (Robot Operating System). This practical experience has deepened my understanding of sensor fusion, computer vision, and autonomous navigation techniques that are essential in modern robotics.",
    tags: ["Robotics", "Python", "Computer Vision", "ROS"]
  },
  {
    id: "org2",
    title: "FRC Robotics Team 815",
    description: "President and Lead Programmer directing a team of 20+ members, supervising project timelines, and ensuring team cohesion for competition-ready robots.",
    image: "/lovable-uploads/0d606ddf-ff01-45db-883c-985996b10282.png",
    content: "As President and Lead Programmer of FRC Team 815, I led a diverse team of over 20 students through the entire robotics design and build process, from initial concept to competition-ready implementation.\n\nMy role involved overseeing all aspects of the robotics project, including mechanical design, electrical systems, and software development. I established project timelines, delegated responsibilities, and implemented agile methodologies to ensure steady progress despite the tight six-week build season constraints.\n\nOn the technical side, I architected and implemented the robot's control system using Java, focusing on reliable autonomous operations and responsive teleop control. This included developing sensor integration systems, motion control algorithms, and vision processing capabilities that allowed our robot to perform complex tasks during competition.\n\nBeyond technical leadership, I fostered a collaborative team environment by mentoring new members, facilitating communication between sub-teams, and organizing regular knowledge-sharing sessions. This approach not only improved our technical outcomes but also created a supportive community that attracted and retained diverse talent.",
    tags: ["Team Leadership", "Java", "Project Management", "Robotics"]
  },
  {
    id: "org3",
    title: "AI Club @ MSU",
    description: "Active member participating in workshops and hackathons focused on machine learning and artificial intelligence applications. Collaborated on NLP projects and neural network implementations.",
    image: "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png",
    content: "As an active member of the AI Club at Michigan State University, I've immersed myself in a community dedicated to exploring and advancing artificial intelligence technologies.\n\nI regularly participate in workshops covering various AI domains including computer vision, natural language processing, and reinforcement learning. These sessions have provided hands-on experience with frameworks like TensorFlow and PyTorch, allowing me to implement and experiment with state-of-the-art models.\n\nOne of my key contributions was collaborating on a team project that developed a sentiment analysis system for campus feedback. We implemented a BERT-based model that achieved over 85% accuracy in classifying student feedback across multiple categories. This project enhanced my skills in NLP preprocessing, model fine-tuning, and deploying machine learning systems for real-world applications.\n\nThe club's hackathons and competition events have been particularly valuable, pushing me to apply theoretical knowledge to solve complex problems under time constraints. These experiences have strengthened my abilities in rapid prototyping, collaborative development, and presenting technical solutions to diverse audiences.",
    tags: ["Machine Learning", "Python", "TensorFlow", "NLP"]
  }
];

const Organizations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentOrg, setCurrentOrg] = useState(orgsData[0]);
  
  const openModal = (orgId: string) => {
    const org = orgsData.find(o => o.id === orgId);
    if (org) {
      setCurrentOrg(org);
      setModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="organizations" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Users className="text-orange" />
          Student Organizations
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orgsData.map((org) => (
          <div 
            key={org.id} 
            className="org-card"
            onClick={() => openModal(org.id)}
          >
            <div className="bg-granite border border-gray-700 rounded-lg overflow-hidden hover:border-orange/50 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)] transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={org.image} 
                  alt={org.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png";
                  }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange transition-colors">{org.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{org.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {org.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-darkgray/70 rounded text-orange">
                      {tag}
                    </span>
                  ))}
                  {org.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-darkgray/70 rounded text-gray-400">
                      +{org.tags.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="text-orange hover:text-orange-light transition-colors flex items-center">
                  Learn More <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal using shadcn Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogOverlay className="bg-black/80" />
        <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-granite border border-gray-700 overflow-y-auto">
          <div className="sticky top-0 bg-granite z-10 flex justify-between items-center p-6 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">{currentOrg.title}</h2>
            </div>
            <button onClick={closeModal} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            {currentOrg.image && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={currentOrg.image} 
                  alt={currentOrg.title} 
                  className="w-full h-auto max-h-[50vh] object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            <div className="mb-6">
              <div className="text-gray-300 whitespace-pre-line">
                {currentOrg.content}
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-2 text-orange">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {currentOrg.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-darkgray rounded text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Organizations;

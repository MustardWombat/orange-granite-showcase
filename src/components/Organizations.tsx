
import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const orgsData = [
  {
    id: "org1",
    icon: "🤖",
    title: "Precision Agriculture Robotics Club",
    description: "Perception and Navigation team member collaborating to create autonomously controlled robots using Python, C++, and microcontrollers.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    content: "As a member of the Perception and Navigation team within the Precision Agriculture Robotics Club, I've been instrumental in developing systems that allow robots to sense their environment and navigate autonomously through agricultural fields.\n\nOur team focuses on integrating computer vision with sensor data to create reliable navigation systems that can operate in the challenging and variable conditions of agricultural environments. Using technologies like LiDAR, RGB-D cameras, and various environmental sensors, we've developed algorithms that enable robots to detect crop rows, identify obstacles, and make real-time navigation decisions.\n\nThrough this club, I've gained hands-on experience implementing cutting-edge robotics concepts using Python and C++ while working with platforms like ROS (Robot Operating System). This practical experience has deepened my understanding of sensor fusion, computer vision, and autonomous navigation techniques that are essential in modern robotics."
  },
  {
    id: "org2",
    icon: "🛠️",
    title: "FRC Robotics Team 815",
    description: "President and Lead Programmer directing a team of 20+ members, supervising project timelines, and ensuring team cohesion for competition-ready robots.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    content: "As President and Lead Programmer of FRC Team 815, I led a diverse team of over 20 students through the entire robotics design and build process, from initial concept to competition-ready implementation.\n\nMy role involved overseeing all aspects of the robotics project, including mechanical design, electrical systems, and software development. I established project timelines, delegated responsibilities, and implemented agile methodologies to ensure steady progress despite the tight six-week build season constraints.\n\nOn the technical side, I architected and implemented the robot's control system using Java, focusing on reliable autonomous operations and responsive teleop control. This included developing sensor integration systems, motion control algorithms, and vision processing capabilities that allowed our robot to perform complex tasks during competition.\n\nBeyond technical leadership, I fostered a collaborative team environment by mentoring new members, facilitating communication between sub-teams, and organizing regular knowledge-sharing sessions. This approach not only improved our technical outcomes but also created a supportive community that attracted and retained diverse talent."
  },
  {
    id: "org3",
    icon: "💼",
    title: "Work Experience",
    description: "Two years at Tim Hortons as Cashier/Closer, managing high-volume orders with accuracy and efficiency, increasing customer satisfaction by over 20%.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    content: "During my two years at Tim Hortons, I developed valuable skills in customer service, time management, and team collaboration that have proven transferable to my technical pursuits.\n\nAs a Cashier and Closer, I managed high-volume customer interactions during peak hours while maintaining accuracy and efficiency in order processing. This fast-paced environment taught me to prioritize tasks effectively, communicate clearly under pressure, and adapt quickly to changing conditions—skills that have proven invaluable in technical project management.\n\nMy responsibilities included reconciling daily transactions, managing inventory, and ensuring store cleanliness and readiness for the next business day. This role required attention to detail and systematic thinking, traits that translate directly to debugging code and building reliable systems.\n\nPerhaps most significantly, I implemented several process improvements that streamlined closing procedures and reduced closing time by approximately 30 minutes per shift. This initiative demonstrated my ability to analyze workflows, identify inefficiencies, and implement practical solutions—an approach I now apply to technical problem solving."
  }
];

const Organizations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentOrg, setCurrentOrg] = useState(orgsData[0]);
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

  const openModal = (orgId: string) => {
    const org = orgsData.find(o => o.id === orgId);
    if (org) {
      setCurrentOrg(org);
      setModalOpen(true);
    }
  };

  return (
    <section className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Student Organizations</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {orgsData.map((item, index) => (
            <div 
              key={item.id} 
              className="service-item cursor-pointer hover:border-orange hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => openModal(item.id)}
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
              <button className="mt-4 text-orange hover:text-orange-light transition-colors">
                Learn More
              </button>
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
            <h2 className="text-2xl font-bold mb-4 text-white">{currentOrg.title}</h2>
            <div className="service-icon text-4xl mb-4">{currentOrg.icon}</div>
            
            <div className="mb-6">
              <img 
                src={currentOrg.image} 
                alt={currentOrg.title} 
                className="w-full h-60 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="text-gray-300 whitespace-pre-line">
              {currentOrg.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Organizations;


import { useRef, useEffect } from 'react';

const orgsData = [
  {
    icon: "🤖",
    title: "Precision Agriculture Robotics Club",
    description: "Perception and Navigation team member collaborating to create autonomously controlled robots using Python, C++, and microcontrollers."
  },
  {
    icon: "🛠️",
    title: "FRC Robotics Team 815",
    description: "President and Lead Programmer directing a team of 20+ members, supervising project timelines, and ensuring team cohesion for competition-ready robots."
  },
  {
    icon: "💼",
    title: "Work Experience",
    description: "Two years at Tim Hortons as Cashier/Closer, managing high-volume orders with accuracy and efficiency, increasing customer satisfaction by over 20%."
  }
];

const Organizations = () => {
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
    <section className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Student Organizations</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {orgsData.map((item, index) => (
            <div 
              key={index} 
              className="service-item"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;

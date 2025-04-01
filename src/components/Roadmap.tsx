
import { Flag, MapPin } from 'lucide-react';

const roadmapSteps = [
  {
    title: "Learn Programming Fundamentals",
    description: "Master the basics of computer science including algorithms, data structures, and programming paradigms.",
    tags: ["Python", "Java", "C++"],
    completed: true,
    icon: <MapPin className="w-5 h-5 text-white" />
  },
  {
    title: "Web Development Essentials",
    description: "Build a solid foundation with HTML, CSS, and JavaScript. Create responsive websites and understand web architecture.",
    tags: ["HTML/CSS", "JavaScript", "Responsive Design"],
    completed: true,
    icon: <MapPin className="w-5 h-5 text-white" />
  },
  {
    title: "Robotics Programming",
    description: "Apply programming knowledge to robotics systems, working with hardware interfaces and control algorithms.",
    tags: ["ROS2", "Arduino", "C++"],
    completed: true,
    icon: <MapPin className="w-5 h-5 text-white" />
  },
  {
    title: "Hardware & Software Integration",
    description: "Bridge the gap between hardware and software, working with microcontrollers and embedded systems.",
    tags: ["Raspberry Pi", "Microcontrollers", "Sensor Integration"],
    completed: false,
    icon: <MapPin className="w-5 h-5 text-white" />
  },
  {
    title: "Professional Career",
    description: "Apply all skills in a professional engineering environment, contributing to significant projects.",
    tags: ["Robotics", "Software Engineering", "Team Leadership"],
    completed: false,
    icon: <Flag className="w-5 h-5 text-white" />
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Flag className="text-orange" />
          Career Roadmap
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-orange/30 -ml-0.5 md:ml-0 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline node */}
              <div 
                className={`absolute left-4 md:left-1/2 -ml-4 md:-ml-5 w-8 h-8 rounded-full flex items-center justify-center z-10 transform md:-translate-x-1/2 
                  ${step.completed ? 'bg-orange' : 'bg-gray-700 border-2 border-orange/30'}`}
              >
                {step.icon}
              </div>
              
              {/* Content card */}
              <div 
                className={`ml-16 md:ml-0 md:w-5/12 p-6 rounded-lg shadow-lg
                  ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} 
                  ${step.completed ? 'bg-granite border border-orange/30' : 'bg-darkgray border border-gray-700'}`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 mb-4">{step.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded text-sm 
                        ${step.completed ? 'bg-orange/20 text-orange' : 'bg-gray-800 text-gray-300'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-right">
                  <span className={step.completed ? "text-green-400" : "text-gray-400"}>
                    {step.completed ? "Completed" : "In Progress"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

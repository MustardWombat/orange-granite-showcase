
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Cashier & Closer",
    company: "Tim Hortons",
    period: "June 2022 - Present",
    description: "Managing high-volume orders with accuracy and efficiency, increasing customer satisfaction by over 20%. Responsible for end-of-day operations including inventory management and closing procedures.",
    skills: ["Customer Service", "Team Coordination", "Cash Handling", "Problem Solving"],
    logo: "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png"
  },
  {
    title: "Team Member",
    company: "Chick-fil-A",
    period: "January 2021 - May 2022",
    description: "Provided exceptional customer service in a fast-paced environment. Maintained cleanliness standards and food safety protocols while efficiently preparing orders. Contributed to team performance that exceeded monthly sales targets by 15%.",
    skills: ["Customer Service", "Food Preparation", "Team Collaboration", "Time Management"],
    logo: "/lovable-uploads/428be5f8-d7ad-4054-b69f-53c635d8de45.png"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Briefcase className="text-orange" />
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange/30 transform -translate-x-1/2"></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`mb-16 last:mb-0 md:w-1/2 relative ${
              index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
            }`}
          >
            {index % 2 === 0 && <div className="hidden md:block absolute top-6 left-[-10px] w-4 h-4 rounded-full bg-orange z-10"></div>}
            {index % 2 === 1 && <div className="hidden md:block absolute top-6 right-[-10px] w-4 h-4 rounded-full bg-orange z-10"></div>}
            
            <div className="bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300">
              <div className="flex items-center gap-2 text-orange mb-3">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-24 h-24 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/lovable-uploads/b9506242-ade4-45c3-8b75-dc1ba3d9de63.png";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-orange">{exp.company}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-darkgray px-3 py-1 rounded text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

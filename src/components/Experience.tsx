
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Cashier & Closer",
    company: "Tim Hortons",
    period: "June 2022 - Present",
    description: "Managing high-volume orders with accuracy and efficiency, increasing customer satisfaction by over 20%. Responsible for end-of-day operations including inventory management and closing procedures.",
    skills: ["Customer Service", "Team Coordination", "Cash Handling", "Problem Solving"]
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
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <p className="text-orange">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
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
        ))}
      </div>
    </section>
  );
};

export default Experience;

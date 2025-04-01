
import { useState } from 'react';
import { Code, Server, Cpu, Wrench, Award } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code className="w-6 h-6 text-orange" />,
    title: "Programming",
    skills: ["Python", "C++", "Java", "JavaScript", "Swift", "HTML/CSS", "RO2"]
  },
  {
    icon: <Cpu className="w-6 h-6 text-orange" />,
    title: "Hardware",
    skills: ["Arduino", "Raspberry Pi", "Robotics Systems", "Microcontrollers", "Sensor Integration"]
  },
  {
    icon: <Server className="w-6 h-6 text-orange" />,
    title: "Tools & Platforms",
    skills: ["VS Code", "AWS Tools", "Microsoft Excel", "Git/GitHub"]
  },
  {
    icon: <Award className="w-6 h-6 text-orange" />,
    title: "Certifications",
    skills: ["CS50X from Harvard", "AWS Cloud Practitioner Essentials", "Microsoft Excel Advanced"]
  }
];

// Pre-calculate skill percentages to avoid regenerating on hover
const skillPercentages = {};
skillCategories.forEach(category => {
  category.skills.forEach(skill => {
    skillPercentages[skill] = Math.random() * 40 + 60;
  });
});

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Wrench className="text-orange" />
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <ul className="space-y-3">
              {category.skills.map((skill, idx) => (
                <li 
                  key={idx}
                  className="skill-item"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange"></div>
                    <span className={hoveredSkill === skill ? "text-orange" : ""}>{skill}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar" 
                      style={{width: `${skillPercentages[skill]}%`}}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

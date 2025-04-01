
import { useRef, useEffect } from 'react';

const skillsCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "Java", "JavaScript", "Swift", "HTML/CSS", "RO2"]
  },
  {
    title: "Hardware",
    skills: ["Arduino", "Raspberry Pi", "Robotics Systems", "Microcontrollers", "Sensor Integration"]
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "AWS Tools", "Microsoft Excel", "Git/GitHub"]
  },
  {
    title: "Certifications",
    skills: ["CS50X from Harvard", "AWS Cloud Practitioner Essentials", "Microsoft Excel Advanced"]
  }
];

const Skills = () => {
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
    <section id="skills" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-orange">
                {category.title}
              </h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="opacity-0 translate-y-2" 
                    style={{ 
                      animation: 'slide-up 0.3s ease-out forwards',
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 100)}ms` 
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

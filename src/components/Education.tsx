
import { useState, useEffect, useRef } from 'react';

const educationData = [
  {
    id: 1,
    school: "Michigan State University",
    degree: "Bachelor of Science, Computer Science",
    details: ["GPA: 3.9", "Dean's List"],
    period: "August 2024 - May 2028"
  },
  {
    id: 2,
    school: "Allen Park High School",
    degree: "High School Diploma",
    details: ["GPA: 3.5"],
    period: "September 2020 - May 2024"
  }
];

const Education = () => {
  const [items, setItems] = useState<HTMLElement[]>([]);
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
    
    const itemElements = document.querySelectorAll('.education-item');
    setItems(Array.from(itemElements) as HTMLElement[]);
    
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('opacity-100', 'translate-y-0');
      }, 300 * (index + 1));
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [items.length]);

  return (
    <section id="education" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 relative">
          <div className="absolute left-0 md:left-1/2 h-full w-1 bg-orange/20 transform md:translate-x-[-0.5px]"></div>
          
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              className={`education-item relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              } opacity-0 translate-y-8 transition-all duration-500 ease-out`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="absolute left-[-8px] md:left-auto md:top-0 top-0 w-4 h-4 rounded-full bg-orange z-10 md:translate-x-[-8px]"></div>
              
              <div className="bg-granite p-6 rounded-lg border border-white/10 hover:border-orange/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                <span className="text-orange text-sm">{item.period}</span>
                <h3 className="text-xl font-bold mt-2">{item.school}</h3>
                <p className="text-gray-300 mt-1">{item.degree}</p>
                <ul className="mt-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-400">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

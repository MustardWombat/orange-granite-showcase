
import { GraduationCap, Calendar } from 'lucide-react';

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
  return (
    <section id="education" className="py-20 section-animate">
      <div className="section-heading mb-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap className="text-orange" />
          Education
        </h2>
        <div className="h-1 w-20 bg-orange"></div>
      </div>
      
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-orange/30 transform -translate-x-1/2"></div>
        
        {educationData.map((item, index) => (
          <div 
            key={item.id}
            className={`mb-16 last:mb-0 md:w-1/2 relative ${
              index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
            }`}
          >
            <div className="hidden md:block absolute top-6 -left-2 w-4 h-4 rounded-full bg-orange z-10"></div>
            {index % 2 === 0 && <div className="hidden md:block absolute top-6 left-[-10px] w-4 h-4 rounded-full bg-orange z-10"></div>}
            {index % 2 === 1 && <div className="hidden md:block absolute top-6 right-[-10px] w-4 h-4 rounded-full bg-orange z-10"></div>}
            
            <div className="bg-granite border border-gray-700 rounded-lg p-6 hover:border-orange/50 transition-all duration-300">
              <div className="flex items-center gap-2 text-orange mb-3">
                <Calendar className="w-4 h-4" />
                <span>{item.period}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-1">{item.school}</h3>
              <p className="text-gray-300 mb-4">{item.degree}</p>
              
              <ul className="space-y-1">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

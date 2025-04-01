
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    id: 1,
    school: "Michigan State University",
    degree: "Bachelor of Science, Computer Engineering",
    details: ["GPA: 3.9", "Dean's List"],
    period: "August 2024 - May 2028",
    logo: "/lovable-uploads/baaeb034-088e-4755-b8f6-e58fa7d4e9e7.png"
  },
  {
    id: 2,
    school: "Allen Park High School",
    degree: "High School Diploma",
    details: ["GPA: 3.5"],
    period: "September 2020 - May 2024",
    logo: "/lovable-uploads/e1d4484f-8353-43f9-b310-307fa100ba36.png"
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
              
              <div className="flex items-center gap-4 mb-4">
                {item.logo && (
                  <div className="w-20 h-20 rounded-md overflow-hidden flex items-center justify-center bg-white p-2">
                    <img 
                      src={item.logo} 
                      alt={`${item.school} logo`} 
                      className={`w-full h-full object-cover ${item.id === 1 ? 'scale-[1.5]' : ''}`}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold">{item.school}</h3>
                  <p className="text-gray-300">{item.degree}</p>
                </div>
              </div>
              
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

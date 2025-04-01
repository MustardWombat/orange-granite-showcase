
import { useRef, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const blogData = [
  {
    date: "February 10, 2025",
    title: "Understanding Blockchain Fundamentals",
    description: "A beginner's guide to understanding blockchain technology, encryption methods, and how to build a simple simulator."
  },
  {
    date: "January 15, 2025",
    title: "Getting Started with SwiftUI",
    description: "My journey learning Swift and SwiftUI for iOS app development, with insights from the Cosmos Study App project."
  },
  {
    date: "December 22, 2024",
    title: "Robotics Programming Fundamentals",
    description: "Lessons learned from FRC Team 815 and practical approaches to programming autonomous robot control systems."
  }
];

const Blog = () => {
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
    <section id="blog" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post, index) => (
            <div 
              key={index} 
              className="blog-post"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="blog-content">
                <div className="blog-date flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold my-2">{post.title}</h3>
                <p className="text-gray-300">{post.description}</p>
                <a href="#" className="read-more flex items-center mt-4 text-orange hover:text-orange-light transition-colors">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block bg-orange hover:bg-orange-light text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

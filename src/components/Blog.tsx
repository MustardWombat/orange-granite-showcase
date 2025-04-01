
import { useState, useRef, useEffect } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

const blogData = [
  {
    id: "blog1",
    date: "February 10, 2025",
    title: "Understanding Blockchain Fundamentals",
    description: "A beginner's guide to understanding blockchain technology, encryption methods, and how to build a simple simulator.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    content: "Blockchain technology represents one of the most significant technological advancements in recent years. At its core, a blockchain is a distributed ledger that maintains a continuously growing list of records called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.\n\nUnderstanding the fundamentals of blockchain begins with grasping its key components: decentralization, transparency, immutability, and security. Unlike traditional centralized systems, blockchain operates on a peer-to-peer network where no single entity has control over the entire chain.\n\nIn this article, I'll walk through the basic concepts of blockchain technology, explain different consensus mechanisms like Proof of Work and Proof of Stake, and provide a simple code example to build your own blockchain simulator using Python."
  },
  {
    id: "blog2",
    date: "January 15, 2025",
    title: "Getting Started with SwiftUI",
    description: "My journey learning Swift and SwiftUI for iOS app development, with insights from the Cosmos Study App project.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    content: "SwiftUI has revolutionized the way developers create user interfaces for Apple platforms. As someone who recently dove into iOS development for my Cosmos Study App project, I want to share my experience learning SwiftUI and some practical tips for beginners.\n\nSwiftUI is a declarative framework that allows you to build user interfaces across all Apple platforms with a unified set of tools and APIs. The learning curve might seem steep at first, especially if you're coming from UIKit or other frameworks, but the productivity gains are substantial once you get comfortable with it.\n\nIn this article, I'll walk through setting up your first SwiftUI project, explain the basics of view composition, state management, and demonstrate how to create custom reusable components. I'll also share some challenges I faced when implementing the AI-powered features in my Cosmos Study App and how I overcame them."
  },
  {
    id: "blog3",
    date: "December 22, 2024",
    title: "Robotics Programming Fundamentals",
    description: "Lessons learned from FRC Team 815 and practical approaches to programming autonomous robot control systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    content: "Programming autonomous robots presents unique challenges that blend hardware integration, sensor fusion, and real-time decision making. During my time as Lead Programmer with FRC Team 815, I had the opportunity to develop control systems for competition robots, which taught me valuable lessons about robotics programming fundamentals.\n\nEffective robot programming begins with understanding the hardware components and their limitations. Motors, sensors, actuators, and processors all have specific capabilities and constraints that influence your code architecture. Beyond hardware, a solid grasp of control theory concepts like PID controllers is essential for precise movement and positioning.\n\nIn this article, I'll share practical techniques for structuring robot code, implementing sensor fusion algorithms, and developing autonomous behaviors. I'll also discuss the importance of simulation and testing methodologies that helped our team create reliable robot control systems under the pressure of competition deadlines."
  }
];

const Blog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(blogData[0]);
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

  const openModal = (blogId: string) => {
    const blog = blogData.find(b => b.id === blogId);
    if (blog) {
      setCurrentBlog(blog);
      setModalOpen(true);
    }
  };

  return (
    <section id="blog" className="py-20 relative slide" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((post, index) => (
            <div 
              key={post.id} 
              className="blog-post"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="blog-content">
                <div className="blog-date flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold my-2">{post.title}</h3>
                <p className="text-gray-300">{post.description}</p>
                <button 
                  onClick={() => openModal(post.id)} 
                  className="read-more flex items-center mt-4 text-orange hover:text-orange-light transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block bg-orange hover:bg-orange-light text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 hover:scale-105 transform">
            View All Articles
          </a>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal flex" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setModalOpen(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">{currentBlog.title}</h2>
            <div className="flex items-center mb-4 text-orange">
              <Calendar size={16} className="mr-2" />
              <span>{currentBlog.date}</span>
            </div>
            
            <div className="mb-6">
              <img 
                src={currentBlog.image} 
                alt={currentBlog.title} 
                className="w-full h-60 object-cover rounded-lg mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="text-gray-300 whitespace-pre-line">
              {currentBlog.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;

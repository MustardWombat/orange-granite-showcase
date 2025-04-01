
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const artGalleryItems = [
  {
    id: 1,
    title: "Neural Network Visualization",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Abstract representation of neural pathways in deep learning"
  },
  {
    id: 2,
    title: "Robotics Concept Art",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    description: "Future robotics integration in everyday life"
  },
  {
    id: 3,
    title: "Circuit Board Patterns",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Macro photography showing the beauty of circuit design"
  },
  {
    id: 4,
    title: "Data Visualization",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    description: "Artistic rendering of complex data structures"
  },
  {
    id: 5,
    title: "Light Code",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    description: "Programming as an art form, represented through light"
  },
  {
    id: 6,
    title: "Digital Landscape",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Conceptual representation of the digital world we build"
  }
];

const EasterEggs = () => {
  const [konamiActivated, setKonamiActivated] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const [showGallery, setShowGallery] = useState(false);
  
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKeys = [...keys, e.key];
      if (newKeys.length > konamiCode.length) {
        newKeys.shift();
      }
      setKeys(newKeys);
      
      if (JSON.stringify(newKeys) === JSON.stringify(konamiCode)) {
        setKonamiActivated(true);
        document.body.classList.add('konami-active');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys]);
  
  const openGallery = () => {
    if (konamiActivated) {
      setShowGallery(true);
    }
  };
  
  return (
    <>
      <div 
        className={`konami-trigger ${konamiActivated ? 'animate-pulse' : ''}`}
        onClick={openGallery}
        title={konamiActivated ? "Click to open secret art gallery" : ""}
      />
      
      {showGallery && (
        <div className="art-gallery flex" onClick={() => setShowGallery(false)}>
          <div className="art-gallery-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-close" onClick={() => setShowGallery(false)}>
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">Secret Art Gallery</h2>
            <p className="text-gray-300 mb-4">You discovered my hidden collection of tech and engineering-inspired artwork!</p>
            
            <div className="gallery-grid">
              {artGalleryItems.map((item) => (
                <div key={item.id} className="gallery-item">
                  <img src={item.image} alt={item.title} />
                  <div className="p-2">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EasterEggs;

import { useEffect, useState } from 'react';

const slides = [
  { type: 'video', src: '/videos/tractor_autosteer.mp4' },
  { type: 'video', src: '/videos/robot_vision.mov' }
];

const BackgroundSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={slide.src}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlideshow;

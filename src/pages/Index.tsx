
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnimatedBar from '@/components/AnimatedBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Organizations from '@/components/Organizations';
import Github from '@/components/Github';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import EasterEggs from '@/components/EasterEggs';

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for slide animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      slides.forEach((slide) => {
        observer.unobserve(slide);
      });
    };
  }, []);

  return (
    <main className="bg-[#121212] text-white">
      <Header />
      <Hero />
      <AnimatedBar />
      <Projects />
      <Skills />
      <AnimatedBar />
      <CTASection />
      <AnimatedBar />
      <Education />
      <Organizations />
      <Github />
      <Blog />
      <Contact />
      <Footer />
      <EasterEggs />
      
      {/* This is a hidden element that reveals itself with the konami code */}
      <div id="konami-code-hint" className="fixed bottom-2 right-2 text-xs text-gray-600 opacity-50">
        Hint: Try the Konami code ↑↑↓↓←→←→ba
      </div>
    </main>
  );
};

export default Index;

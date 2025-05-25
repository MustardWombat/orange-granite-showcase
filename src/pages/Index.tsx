
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechBar from '@/components/TechBar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Organizations from '@/components/Organizations';
import Github from '@/components/Github';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Coursework from '@/components/Coursework';

const Index = () => {
  useEffect(() => {
    // Intersection observer for animations
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

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="bg-[#121212] text-white overflow-x-hidden">
      <div className="fixed w-full h-full top-0 left-0 bg-[url('/src/assets/grid-pattern.svg')] opacity-5 pointer-events-none z-0"></div>
      <Header />
      <Hero />
      <TechBar />
      <div className="container mx-auto px-4 z-10 relative">
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Coursework />
        <Organizations />
        <Github />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

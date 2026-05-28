import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [focusedSection, setFocusedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);

    const handleScroll = () => {
      setFocusedSection(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionFocus = (id) => {
    setFocusedSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="portfolio-loader">
        <div className="loader-inner">
          <div className="loader-spinner"></div>
          <div className="loader-text">
            Loading Portfolio...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="animated-bg" />
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />

      <Navbar onSectionFocus={handleSectionFocus} />

      <main className="main-content">
        {/* 
          Each component (Hero, About, Experience, etc.) already renders 
          its own <section id="..."> internally. We just render them directly
          here — no extra wrapper sections needed.
        */}
        <Hero focusedSection={focusedSection} />
        <About focusedSection={focusedSection} />
        <Experience focusedSection={focusedSection} />
        <Projects focusedSection={focusedSection} />
        <Skills focusedSection={focusedSection} />
        <Contact focusedSection={focusedSection} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

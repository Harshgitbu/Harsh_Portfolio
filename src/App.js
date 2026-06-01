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
    const timer = setTimeout(() => setIsLoading(false), 900);
    const handleScroll = () => setFocusedSection(null);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionFocus = (id) => {
    setFocusedSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="portfolio-loader">
        <div className="loader-logo">HS/</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar" />
        </div>
        <div className="loader-text">Initializing portfolio</div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar onSectionFocus={handleSectionFocus} />

      <main className="main-content">
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

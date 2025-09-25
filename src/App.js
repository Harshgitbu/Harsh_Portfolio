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

  useEffect(() => {
    const onScroll = () => {
      setFocusedSection(null);
    };
    window.addEventListener('wheel', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('touchmove', onScroll);
    };
  }, []);

  const handleSectionFocus = (id) => {
    setFocusedSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar onSectionFocus={handleSectionFocus} />
      <section id="hero" className={`section${focusedSection && focusedSection !== 'hero' ? ' faded' : ''}`}>
        <Hero />
      </section>
      <section id="about" className={`section${focusedSection && focusedSection !== 'about' ? ' faded' : ''}`}>
        <About />
      </section>
      <section id="experience" className={`section${focusedSection && focusedSection !== 'experience' ? ' faded' : ''}`}>
        <Experience />
      </section>
      <section id="projects" className={`section${focusedSection && focusedSection !== 'projects' ? ' faded' : ''}`}>
        <Projects />
      </section>
      <section id="skills" className={`section${focusedSection && focusedSection !== 'skills' ? ' faded' : ''}`}>
        <Skills />
      </section>
      <section id="contact" className={`section${focusedSection && focusedSection !== 'contact' ? ' faded' : ''}`}>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;

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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '3px solid white', 
            borderTopColor: 'transparent',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            animation: 'spin 1s linear infinite'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          Loading Portfolio...
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
        <section id="hero" className={focusedSection && focusedSection !== 'hero' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <Hero />
          </div>
        </section>

        <section id="about" className={focusedSection && focusedSection !== 'about' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <About />
          </div>
        </section>

        <section id="experience" className={focusedSection && focusedSection !== 'experience' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <Experience />
          </div>
        </section>

        <section id="projects" className={focusedSection && focusedSection !== 'projects' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <Projects />
          </div>
        </section>

        <section id="skills" className={focusedSection && focusedSection !== 'skills' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <Skills />
          </div>
        </section>

        <section id="contact" className={focusedSection && focusedSection !== 'contact' ? 'section faded' : 'section'}>
          <div className="section-inner">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
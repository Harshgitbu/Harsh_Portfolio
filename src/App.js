import React, { useEffect, useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionFocus = id => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
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
      <div className="animated-bg" />
      <div className="floating-shape shape-1" />
      <div className="floating-shape shape-2" />
      <div className="floating-shape shape-3" />

      <Navbar onSectionFocus={handleSectionFocus} />

      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
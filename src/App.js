import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />

      <footer style={{backgroundColor: '#1c2735', color: 'white', textAlign: 'center', padding: '1rem'}}>
        © 2025 Harsh Shah
      </footer>
    </>
  );
}

export default App;

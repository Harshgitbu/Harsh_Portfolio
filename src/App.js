import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <header id="hero" style={{height: '80vh', padding: '4rem', backgroundColor: '#f7f8fa'}}>
        <h1>Welcome to Harsh Shah's Portfolio</h1>
        <p>Master’s Data Scientist skilled in machine learning, data engineering, and analytics.</p>
      </header>
      <section id="about" style={{padding: '4rem'}}>
        <h2>About Me</h2>
        <p>This section will contain your bio and background.</p>
      </section>
      <section id="projects" style={{padding: '4rem'}}>
        <h2>Projects</h2>
        <p>Featured projects will be displayed here.</p>
      </section>
      <section id="contact" style={{padding: '4rem'}}>
        <h2>Contact</h2>
        <p>How to get in touch with me.</p>
      </section>
      <footer style={{backgroundColor: '#1c2735', color: 'white', textAlign: 'center', padding: '1rem'}}>
        © 2025 Harsh Shah
      </footer>
    </>
  );
}

export default App;

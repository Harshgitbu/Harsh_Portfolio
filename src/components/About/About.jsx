import React from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './About.css';

const About = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5", label: "Technologies Mastered" },
    { number: "2", label: "Cloud Platforms" }
  ];

  const skills = [
    "Python", "SQL", "Machine Learning", "Deep Learning", 
    "Data Engineering", "Azure ML", "AWS", "Tableau",
    "Spark", "TensorFlow", "Scikit-learn", "PyTorch"
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "Boston University",
      period: "2024 - 2025",
      gpa: "GPA: 3.64/4"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Fairleigh Dickinson University",
      period: "2017 - 2021", 
      gpa: "GPA: 3.69/4"
    }
  ];

  return (
    <section id="about" className="section">
      <div ref={ref} className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am Harsh Shah, a Master's candidate in Data Science at Boston University,
              graduating December 2025. With over 3 years of experience in machine learning,
              big data engineering, and analytics, I specialize in designing scalable end-to-end
              solutions using Python, SQL, and cloud platforms like Azure and AWS.
            </p>
            <p>
              My passion lies in transforming complex data into actionable insights and 
              building intelligent systems that drive business value. I thrive in challenging 
              environments where I can apply my expertise in data modeling, machine learning 
              algorithms, and cloud infrastructure to solve real-world problems.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="about-skills">
              <h3 style={{color: '#1a73e8', marginBottom: '1rem', fontSize: '1.5rem'}}>Core Competencies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <h3>Data Science Vision</h3>
              <p>Bridging the gap between complex data and business solutions through innovative machine learning and analytics</p>
            </div>
            
            <div className="education-timeline">
              <h3 style={{color: '#1a2a6c', marginBottom: '1.5rem', textAlign: 'center'}}>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">
                    {index === 0 ? 'MS' : 'BE'}
                  </div>
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <p style={{fontWeight: '600', color: '#1a2a6c'}}>{edu.school}</p>
                    <p className="education-period">{edu.period}</p>
                    <p style={{fontSize: '0.9rem'}}>{edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
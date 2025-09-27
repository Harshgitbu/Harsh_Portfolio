import React from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './About.css';

const About = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "12+", label: "Technologies" },
    { number: "2", label: "Cloud Platforms" }
  ];

  const skillsByCategory = {
    "Programming": ["Python", "SQL", "R", "JavaScript"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning"],
    "Data Engineering": ["Apache Spark", "Data Pipelines", "Data Modeling"],
    "Cloud & Tools": ["Azure ML", "AWS", "Tableau", "Git"]
  };

  const education = [
    {
      degree: "MS in Data Science",
      school: "Boston University",
      period: "2024 - 2025",
      gpa: "GPA: 3.64/4.0"
    },
    {
      degree: "BS in Computer Science", 
      school: "Fairleigh Dickinson University",
      period: "2017 - 2021",
      gpa: "GPA: 3.69/4.0"
    }
  ];

  return (
    <section id="about" className="section">
      <div ref={ref} className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <h2>About Me</h2>
        
        <div className="about-main">
          {/* Left Column - Text and Vision */}
          <div className="about-left">
            <div className="about-text">
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
            </div>
            
            <div className="data-science-vision">
              <h3>Data Science Vision</h3>
              <p>Bridging the gap between complex data and business solutions through innovative ML and analytics</p>
            </div>
          </div>

          {/* Right Column - Stats and Education */}
          <div className="about-right">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="education-compact">
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h4>{edu.degree}</h4>
                  <p>{edu.school}</p>
                  <p className="education-period">{edu.period}</p>
                  <p>{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies - Categorized Layout */}
        <div className="core-competencies">
          <h3>Core Competencies</h3>
          <div className="skills-categories">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4>{category}</h4>
                <div className="skills-grid-compact">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-tag-compact">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
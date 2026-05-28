import React, { useEffect, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './About.css';

const About = ({ focusedSection }) => {
  const [ref, isVisible] = useFadeInOnScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "4+", label: "Years Experience" },
    { number: "8+", label: "Projects Completed" },
    { number: "20+", label: "Technologies" },
    { number: "3", label: "Cloud Platforms" }
  ];

  const skillsByCategory = {
    "AI & ML": ["RAG Systems", "Deep Learning", "LLMs (GPT/BERT)", "Predictive Modeling", "NLP", "Time Series"],
    "MLOps & DevOps": ["Docker", "CI/CD", "Kubernetes", "FastAPI", "Terraform", "Model Monitoring"],
    "Data Engineering": ["Data Pipelines", "ETL", "Spark", "Hadoop", "Real-time Analytics", "Vector DBs"],
    "Cloud & Tools": ["Azure", "AWS", "Git", "Redis", "Grafana", "Power BI", "Tableau"]
  };

  const education = [
    {
      degree: "MS in Data Science",
      school: "Boston University",
      period: "2024 - 2026",
      gpa: "GPA: 3.60/4.00"
    },
    {
      degree: "BS in Computer Science",
      school: "Fairleigh Dickinson University",
      period: "2017 - 2021",
      gpa: "GPA: 3.69/4.00"
    }
  ];

  const isFaded = focusedSection && focusedSection !== 'about';

  return (
    <section id="about" className={isFaded ? 'section faded' : 'section'}>
      <div ref={sectionRef} className="reveal">
        <div ref={ref} className={`about fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <h2>About Me</h2>

          <div className="about-main">
            <div className="about-left">
              <div className="about-text">
                <p>
                  I'm a Data Scientist and AI Engineer with 4+ years of experience specializing in
                  production AI systems and scalable data solutions. Currently working at One Park Financial,
                  I design, develop, and deploy ML/AI models to solve complex business problems while
                  implementing MLOps best practices.
                </p>
                <p>
                  My expertise spans Retrieval-Augmented Generation (RAG) systems, MLOps infrastructure,
                  and real-time analytics. I've built enterprise AI platforms achieving 83% memory efficiency
                  and engineered data pipelines serving 30,000+ users with 85% faster deployment through automation.
                </p>
                <p>
                  I'm passionate about bridging the gap between cutting-edge AI research and production-ready
                  systems, delivering measurable business impact through technical innovation.
                </p>
              </div>

              <div className="data-science-vision">
                <h3>AI Engineering Vision</h3>
                <p>Building production-ready AI systems that deliver real business value through scalable, efficient, and innovative solutions</p>
              </div>
            </div>

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
      </div>
    </section>
  );
};

export default About;

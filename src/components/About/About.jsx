import React, { useEffect, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './About.css';

const stats = [
  { num: '4+', lbl: 'Years Exp.' },
  { num: '8+', lbl: 'Projects' },
  { num: '20+', lbl: 'Technologies' },
  { num: '3', lbl: 'Cloud Platforms' },
];

const education = [
  { degree: 'MS in Data Science', school: 'Boston University', period: '2024 – 2026', gpa: 'GPA 3.60/4.00' },
  { degree: 'BS in Computer Science', school: 'Fairleigh Dickinson University', period: '2017 – 2021', gpa: 'GPA 3.69/4.00' },
];

const competencies = {
  'AI & ML': ['RAG Systems', 'Deep Learning', 'LLMs (GPT/BERT)', 'NLP', 'Time Series', 'Predictive Modeling'],
  'MLOps & DevOps': ['Docker', 'Kubernetes', 'CI/CD', 'FastAPI', 'Terraform', 'Model Monitoring'],
  'Data Engineering': ['Data Pipelines', 'ETL', 'Apache Spark', 'Real-time Analytics', 'Vector DBs'],
  'Cloud & Tools': ['Azure', 'AWS', 'Git', 'Redis', 'Grafana', 'Power BI', 'Tableau'],
};

const About = ({ focusedSection }) => {
  const [ref, isVisible] = useFadeInOnScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('active'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className={`section ${focusedSection && focusedSection !== 'about' ? 'faded' : ''}`}>
      <div ref={sectionRef} className="reveal">
        <div ref={ref} className="about-wrap">
          <p className="section-label">01 — About Me</p>
          <h2 className="section-title">Who I Am</h2>

          <div className="about-grid">
            <div className="about-bio">
              <p>
                I'm a Data Scientist and AI Engineer with 4+ years specializing in
                production AI systems and scalable data solutions. Currently at One Park
                Financial, I architect, build, and ship ML/AI models that solve real
                business problems — not just demos.
              </p>
              <p>
                My sweet spot: Retrieval-Augmented Generation (RAG) systems, MLOps
                infrastructure, and real-time analytics. I've built enterprise AI platforms
                achieving 83% memory efficiency and engineered data pipelines serving
                30,000+ users with 85% faster deployment through automation.
              </p>
              <p>
                I care about the gap between research and production — and I obsessively
                close it. Every model I ship is monitored, versioned, and built to last.
              </p>
              <div className="vision-card">
                <h3>My Engineering Philosophy</h3>
                <p>Production-ready AI systems that deliver real business value through
                scalable, efficient, and innovative solutions — not just impressive demos.</p>
              </div>
            </div>

            <div className="about-right">
              <div className="about-stats">
                {stats.map(s => (
                  <div key={s.lbl} className="stat-card">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>

              <div className="edu-card">
                <h3>Education</h3>
                {education.map(e => (
                  <div key={e.degree} className="edu-item">
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-period">{e.period}</div>
                    <div className="edu-gpa">{e.gpa}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="competencies">
            <h3>Core Competencies</h3>
            <div className="comp-grid">
              {Object.entries(competencies).map(([cat, tags]) => (
                <div key={cat} className="comp-cat">
                  <h4>{cat}</h4>
                  <div className="comp-tags">
                    {tags.map(t => <span key={t} className="comp-tag">{t}</span>)}
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

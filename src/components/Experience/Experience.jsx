import React, { useEffect, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Experience.css';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'One Park Financial',
    location: 'USA · Remote',
    period: 'May 2026 – Present',
    details: [
      'Design, develop, and deploy ML/AI models to solve business problems and enhance product capabilities.',
      'Build and optimize data pipelines for model training, validation, and deployment on large-scale datasets.',
      'Implement MLOps practices: model versioning, deployment, and lifecycle management.',
      'Research and integrate generative AI and automation tools to drive innovation.',
      'Collaborate with cross-functional teams to translate business requirements into scalable AI solutions.',
    ],
    tech: ['Python', 'MLOps', 'Docker', 'Kubernetes', 'CI/CD', 'FastAPI', 'AWS', 'Terraform'],
    achievement: 'Leading AI initiatives and MLOps implementation for enterprise-scale solutions',
  },
  {
    role: 'AI/ML Freelance Consultant',
    company: 'GoCreation',
    location: 'Ahmedabad, India',
    period: 'Mar 2026 – May 2026',
    details: [
      'Engineered WhatsApp AI Sales Automation Agent using Claude API with constrained generation via structured prompt design.',
      'Designed data flywheel architecture enabling personalized RAG-style context injection for smarter recommendations.',
      'Built hybrid LLM + state machine orchestration layer enforcing business logic with natural language flexibility.',
      'Deployed full-stack system: Flask webhook server, PostgreSQL, React admin dashboard, and background scheduler.',
    ],
    tech: ['Python', 'Flask', 'Claude API', 'SQLAlchemy', 'Meta Cloud API', 'React', 'PostgreSQL'],
    achievement: 'Delivered production-ready AI sales automation system with $0 operational cost',
  },
  {
    role: 'Data Science Intern',
    company: 'Petpooja (Restaurant POS Software)',
    location: 'Ahmedabad, India',
    period: 'Jun 2025 – Jul 2025',
    details: [
      'Enhanced analytics dashboards (sales, inventory, taxation, staffing), improving reporting speed by 40%.',
      'Built aggregation logic for city/outlet-level data, boosting monitoring efficiency across 100+ outlets.',
      'Modeled user order flows and behavior, informing UI/UX updates that improved conversions by 15%.',
      'Explored ML-based tax categorization methods, reducing reporting errors by 25%.',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'Pandas', 'Data Analytics'],
    achievement: '40% faster reporting speed · 15% conversion improvement · 25% fewer errors',
  },
  {
    role: 'Data Scientist',
    company: 'General Motors',
    location: 'Warren, MI · USA',
    period: 'Jul 2022 – Jun 2024',
    details: [
      'Built 15+ APIs for OnStar customers using vehicle telemetry data, serving 30,000+ users across GM regions.',
      'Engineered data pipelines enabling real-time analytics, reducing reporting latency by 20%.',
      'Developed CI/CD workflows on Azure, accelerating model deployment by 85% and improving system reliability.',
      'Implemented validation frameworks ensuring 95%+ data accuracy across enterprise analytics platforms.',
    ],
    tech: ['Azure', 'CI/CD', 'Python', 'FastAPI', 'Grafana', 'Spark', 'Data Pipelines'],
    achievement: 'Reduced reporting latency 20% · Accelerated deployment 85% · 30K+ users served',
  },
  {
    role: 'Data Analyst',
    company: 'General Motors',
    location: 'Warren, MI · USA',
    period: 'Jun 2021 – Jun 2022',
    details: [
      'Validated 400+ API endpoints ensuring 90%+ data accuracy for enterprise analytics.',
      'Developed 100+ test cases in JIRA verifying data pipelines, dashboards, and ML model outputs.',
      'Implemented anomaly detection systems, reducing errors by 25%.',
      'Mentored junior analysts on data validation best practices and quality assurance methodologies.',
    ],
    tech: ['Python', 'SQL', 'JIRA', 'API Testing', 'Quality Assurance', 'Data Validation'],
    achievement: 'Reduced errors 25% · Improved team efficiency 15%',
  },
  {
    role: 'Android App Developer Intern',
    company: 'Silicon IT Hub Pvt Ltd.',
    location: 'Ahmedabad, India',
    period: 'Sep 2020 – Jan 2021',
    details: [
      'Designed Android app to identify nearby truck parking facilities using GPS.',
      'Reduced driver downtime through intelligent parking location recommendations.',
    ],
    tech: ['Android', 'Java', 'GPS Integration', 'Mobile Dev', 'UI/UX'],
    achievement: 'Successfully deployed app improving logistics efficiency',
  },
];

const Experience = ({ focusedSection }) => {
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
    <section id="experience" className={`section ${focusedSection && focusedSection !== 'experience' ? 'faded' : ''}`}>
      <div ref={sectionRef} className="reveal">
        <div ref={ref} className="exp-wrap">
          <p className="section-label">02 — Experience</p>
          <h2 className="section-title">Where I've Worked</h2>

          <div className="exp-timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item">
                <div className="exp-card">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-meta">
                        <span className="exp-company">{exp.company}</span>
                        <span className="exp-location">{exp.location}</span>
                      </div>
                    </div>
                    <span className="exp-period">{exp.period}</span>
                  </div>

                  <ul className="exp-details">
                    {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>

                  {exp.achievement && (
                    <div className="exp-achievement">
                      <strong>⚡ Key Impact:</strong> {exp.achievement}
                    </div>
                  )}

                  <div className="exp-tech">
                    {exp.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

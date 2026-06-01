import React, { useState } from 'react';
import { FaChartLine, FaRobot, FaBrain, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlask, SiWhatsapp } from 'react-icons/si';
import './Projects.css';

const projects = [
  {
    title: 'Enterprise AI Platform: Risk Intelligence with Scalable RAG',
    period: 'Dec 2025 – Jan 2026',
    desc: 'Production-grade RAG system with FAISS vector database for enterprise document intelligence. 83% memory efficiency on AWS EC2 through containerization and caching.',
    category: 'ml',
    tech: ['RAG', 'FAISS', 'AWS', 'Docker', 'FastAPI', 'Redis', 'LLMs'],
    features: ['Scalable RAG with intelligent retrieval', 'Multi-LLM routing, sub-second responses', 'Full MLOps CI/CD pipeline', 'Real-time analytics + domain adaptation'],
    github: '#', demo: '#',
    icon: <FaBrain />,
  },
  {
    title: 'WhatsApp AI Sales Automation Agent',
    period: 'Mar 2025 – May 2025',
    desc: 'AI sales automation via Claude API with constrained generation for reliable order processing. Hybrid LLM + state machine orchestration with React admin dashboard.',
    category: 'ml',
    tech: ['Python', 'Flask', 'Claude API', 'SQLAlchemy', 'Meta Cloud API', 'React', 'PostgreSQL'],
    features: ['Task-oriented dialogue system', 'Structured prompt engineering', 'RAG-style recommendation engine', 'Webhook server + admin dashboard'],
    github: '#', demo: '#',
    icon: <SiWhatsapp />,
  },
  {
    title: 'Multi-Factor Financial Analytics Engine',
    period: 'Mar 2025 – May 2025',
    desc: 'Real-time sentiment analysis pipeline processing Twitter and news data. Scoring system combining sentiment, fundamentals, and technical indicators for Buy/Hold/Sell signals.',
    category: 'analytics',
    tech: ['Python', 'NLP', 'Streamlit', 'Yahoo Finance API', 'Plotly', 'Pandas'],
    features: ['Real-time sentiment analysis', 'Multi-factor stock scoring', 'Interactive financial dashboard', 'Automated signal generation'],
    github: '#', demo: '#',
    icon: <FaChartLine />,
  },
  {
    title: 'Environmental Health Risk Prediction Platform',
    period: 'Mar 2025 – May 2025',
    desc: 'ML models predicting hospitalization risks using real-time air quality data. Cloud pipeline on Azure with batch and streaming capabilities and Power BI dashboards.',
    category: 'ml',
    tech: ['Azure ML', 'Python', 'Scikit-learn', 'Power BI', 'Data Factory', 'Event Hubs'],
    features: ['Real-time air quality ingestion', 'Time-series forecasting', 'Interactive Power BI dashboards', 'Automated health risk alerts'],
    github: '#', demo: '#',
    icon: <FaRobot />,
  },
  {
    title: 'Sports Performance Analysis Web App',
    period: 'Feb 2025 – Apr 2025',
    desc: 'End-to-end sports analytics platform with Flask backend for player performance analysis and strategy optimization using ensemble ML models.',
    category: 'web',
    tech: ['Flask', 'Python', 'Scikit-learn', 'Pandas', 'JavaScript', 'Data Visualization'],
    features: ['Player performance prediction', 'Team strategy optimization', 'Clustering-based segmentation', 'Interactive dashboards'],
    github: '#', demo: '#',
    icon: <SiFlask />,
  },
];

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'ml', label: 'AI / ML' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'web', label: 'Web Apps' },
];

const Projects = ({ focusedSection }) => {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className={`section ${focusedSection && focusedSection !== 'projects' ? 'faded' : ''}`}>
      <div className="proj-wrap">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">Featured Work</h2>

        <div className="proj-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-pill ${active === f.key ? 'active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div key={i} className={`proj-card ${p.category}`}>
              <div className="proj-banner">{p.icon}</div>
              <div className="proj-content">
                <div className="proj-top">
                  <h3 className="proj-title">{p.title}</h3>
                  <span className="proj-period">{p.period}</span>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <ul className="proj-features">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <div className="proj-tech">
                  {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div className="proj-links">
                  <a href={p.github} className="proj-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={p.demo} className="proj-link demo" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

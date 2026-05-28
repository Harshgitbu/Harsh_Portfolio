import React, { useState } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import './Projects.css';

import {
  FaChartLine,
  FaRobot,
  FaBrain,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa';

import { SiFlask, SiWhatsapp } from 'react-icons/si';

const projects = [
  {
    title: 'Enterprise AI Platform: Risk Intelligence with Scalable RAG',
    period: 'Dec 2025 – Jan 2026',
    description:
      'Architected production-grade RAG system with FAISS vector database for enterprise document intelligence. Optimized deployment on AWS EC2 achieving 83% memory efficiency and near-zero operational cost through containerization and caching.',
    category: 'ml',
    technologies: ['RAG', 'FAISS', 'AWS', 'Docker', 'FastAPI', 'Redis', 'LLMs'],
    features: [
      'Scalable RAG system with intelligent document retrieval',
      'Multi-LLM routing with sub-second response times',
      'Production MLOps infrastructure with CI/CD',
      'Real-time analytics and domain adaptation'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaBrain />
  },
  {
    title: 'WhatsApp AI Sales Automation Agent',
    period: 'Mar 2025 – May 2025',
    description:
      'Engineered AI sales automation system using Claude API with constrained generation for reliable order processing. Built hybrid LLM + state machine orchestration with React admin dashboard.',
    category: 'ml',
    technologies: ['Python', 'Flask', 'Claude API', 'SQLAlchemy', 'Meta Cloud API', 'React', 'PostgreSQL'],
    features: [
      'Task-oriented dialogue system',
      'Structured prompt engineering',
      'RAG-style recommendation engine',
      'Webhook server + admin dashboard'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <SiWhatsapp style={{ fontSize: '2rem' }} />
  },
  {
    title: 'Multi-Factor Financial Analytics Engine',
    period: 'Mar 2025 – May 2025',
    description:
      'Built real-time sentiment analysis pipeline processing Twitter and news data. Engineered scoring system combining sentiment, fundamentals, and technical indicators.',
    category: 'analytics',
    technologies: ['Python', 'NLP', 'Streamlit', 'Yahoo Finance API', 'Plotly', 'Pandas'],
    features: [
      'Real-time sentiment analysis',
      'Multi-factor stock scoring',
      'Interactive financial dashboard',
      'Buy/Hold/Sell signal generation'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaChartLine />
  },
  {
    title: 'Environmental Health Risk Prediction Platform',
    period: 'Mar 2025 – May 2025',
    description:
      'Built ML models predicting hospitalization risks using real-time air quality data. Engineered cloud pipeline on Azure with batch and streaming capabilities.',
    category: 'ml',
    technologies: ['Azure ML', 'Python', 'Scikit-learn', 'Power BI', 'Data Factory', 'Event Hubs'],
    features: [
      'Real-time air quality ingestion',
      'Time-series forecasting models',
      'Interactive Power BI dashboards',
      'Automated health risk alerts'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaRobot />
  },
  {
    title: 'Sports Performance Analysis Web App',
    period: 'Feb 2025 – Apr 2025',
    description:
      'Built end-to-end sports analytics platform with Flask application for player performance analysis and strategy optimization using ensemble ML models.',
    category: 'web',
    technologies: ['Flask', 'Python', 'Scikit-learn', 'Pandas', 'JavaScript', 'Data Visualization'],
    features: [
      'Player performance prediction',
      'Team strategy optimization',
      'Clustering-based player segmentation',
      'Interactive dashboards'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <SiFlask style={{ fontSize: '2rem' }} />
  }
];

const Projects = ({ focusedSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'AI/ML' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'web', label: 'Web Apps' }
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const isFaded = focusedSection && focusedSection !== 'projects';

  return (
    <section id="projects" className={isFaded ? 'section faded' : 'section'}>
      <SectionWrapper className="projects">
        <h2>Featured Projects</h2>

        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
              aria-label={`Filter ${filter.label}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.category}`}>
              <div className="project-image">
                <div className="project-icon">{project.icon}</div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demoLink}
                    className="project-link demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;

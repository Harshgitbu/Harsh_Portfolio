import React, { useEffect, useState, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Projects.css';

import { FaChartLine, FaRobot, FaBrain, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFlask, SiWhatsapp } from 'react-icons/si';

const projects = [
  {
    title: 'Enterprise AI Platform: Risk Intelligence with Scalable RAG',
    period: 'Dec 2025 – Jan 2026',
    description: 'Architected production RAG system with FAISS vector database for enterprise document intelligence. Optimized deployment on AWS EC2 achieving 83% memory efficiency and $0/month operational cost through containerization and caching.',
    category: 'ml',
    technologies: ['RAG', 'FAISS', 'AWS', 'Docker', 'FastAPI', 'Redis', 'LLMs'],
    features: [
      'Scalable RAG system with intelligent document retrieval',
      'Multi-LLM service with intelligent routing (<1s response time)',
      'Production MLOps infrastructure with CI/CD',
      'Domain adaptation and real-time analytics'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaBrain />
  },
  {
    title: 'WhatsApp AI Sales Automation Agent',
    period: 'Mar 2025 – May 2025',
    description: 'Engineered AI sales automation system using Claude API with constrained generation for reliable order processing. Built hybrid LLM + state machine orchestration with React admin dashboard.',
    category: 'ml',
    technologies: ['Python', 'Flask', 'Claude API', 'SQLAlchemy', 'Meta Cloud API', 'React', 'PostgreSQL'],
    features: [
      'Task-oriented dialogue system with structured prompt design',
      'Data flywheel architecture for personalized recommendations',
      'Full-stack deployment with webhook server and admin dashboard',
      'Background scheduler for re-engagement and analytics'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <SiWhatsapp style={{ fontSize: '2rem' }} />
  },
  {
    title: 'Multi-Factor Financial Analytics Engine',
    period: 'Mar 2025 – May 2025',
    description: 'Built real-time sentiment analysis pipeline processing Twitter and news data. Engineered scoring system combining sentiment, fundamentals, and technical indicators with customizable weights.',
    category: 'analytics',
    technologies: ['Python', 'NLP', 'Streamlit', 'Yahoo Finance API', 'Plotly', 'Pandas'],
    features: [
      'Real-time sentiment analysis pipeline',
      'Multi-factor scoring with customizable weights',
      'Interactive stock comparison dashboard',
      'Buy/Hold/Sell signal generation'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaChartLine />
  },
  {
    title: 'Environmental Health Risk Prediction Platform',
    period: 'Mar 2025 – May 2025',
    description: 'Built ML models predicting hospitalization risks with 54.8% accuracy using real-time air quality data. Engineered cloud data pipeline on Azure with batch and streaming capabilities.',
    category: 'ml',
    technologies: ['Azure ML', 'Python', 'Scikit-learn', 'Power BI', 'Data Factory', 'Event Hubs'],
    features: [
      'Real-time air quality data integration',
      'Time series forecasting for risk prediction',
      'Interactive Power BI dashboard',
      'Automated alert system for health interventions'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <FaRobot />
  },
  {
    title: 'Sports Performance Analysis Web App',
    period: 'Feb 2025 – Apr 2025',
    description: 'Built end-to-end sports analytics platform with Flask application for player performance analysis and team strategy optimization using ensemble models and clustering algorithms.',
    category: 'web',
    technologies: ['Flask', 'Python', 'Scikit-learn', 'Data Visualization', 'JavaScript', 'Pandas'],
    features: [
      'Player performance prediction models',
      'Team strategy optimization',
      'Clustering for player segmentation',
      'Interactive performance dashboards'
    ],
    githubLink: '#',
    demoLink: '#',
    icon: <SiFlask style={{ fontSize: '2rem' }} />
  }
];

const Projects = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);

  // Scroll reveal animation
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

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'AI/ML' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'web', label: 'Web Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div ref={sectionRef} className="reveal">  {/* Added sectionRef wrapper */}
        <div ref={ref} className={`projects fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <h2>Featured Projects</h2>
          
          <div className="projects-filters">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`project-card ${project.category}`}>
                <div className="project-image">
                  <div className="project-icon">
                    {project.icon}
                  </div>
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
                    <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                    <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
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

export default Projects;
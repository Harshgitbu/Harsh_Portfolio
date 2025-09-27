import React, { useState } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Projects.css';

// Import icons
import { FaChartLine, FaRobot, FaDatabase, FaLaptopCode, FaServer, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Financial Stock Analysis Web App',
    period: 'Mar 2025 – May 2025',
    description: 'Streamlit-based web app performing sentiment analysis on social media and financial news to assess stock trends with real-time data processing and interactive visualizations.',
    category: 'analytics',
    technologies: ['Python', 'Streamlit', 'NLP', 'Sentiment Analysis', 'Plotly', 'Yahoo Finance API'],
    features: [
      'Real-time sentiment analysis of financial news',
      'Interactive stock trend visualizations',
      'Social media sentiment correlation',
      'Predictive analytics dashboard'
    ],
    githubLink: 'https://github.com/Harshgitbu/FinancialScorePredictor_UsingSentimentAnalysis',
    demoLink: 'https://financialscorepredictorusingsentimentanalysis-jupccv2tasaebkph.streamlit.app/',
    icon: <FaChartLine />
  },
  {
    title: 'Predicting Respiratory Hospitalizations from Air Pollution',
    period: 'Mar 2025 – May 2025',
    description: 'Machine learning model on Azure ML Studio predicting hospitalization risks using real-time and historical air quality data with 55% accuracy.',
    category: 'ml',
    technologies: ['Azure ML', 'Python', 'Machine Learning', 'Time Series', 'Healthcare Analytics', 'Scikit-learn'],
    features: [
      'Real-time air quality data integration',
      'Time series forecasting model',
      'Healthcare risk prediction',
      'Azure cloud deployment'
    ],
    githubLink: 'https://github.com/Harshgitbu/Predicting_RespiratoryHospitalizations_AirPollution',
    demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiMmZmZTRkNzMtNzAwMC00MTliLTkyMTUtZDk5MGM0NTY1ZWY2IiwidCI6ImQ1N2QzMmNjLWMxMjEtNDg4Zi1iMDdiLWRmZTcwNTY4MGM3MSIsImMiOjN9&embedImagePlaceholder=true&pageName=ReportSection',
    icon: <FaRobot />
  },
  {
    title: 'Big Data Processing Pipeline for Analytics',
    period: 'Jan 2025 – Mar 2025',
    description: 'Scalable data engineering pipeline processing lots of sensor data using Apache Spark and cloud technologies for real-time analytics and monitoring.',
    category: 'engineering',
    technologies: ['Apache Spark', 'AWS', 'Python', 'Big Data', 'ETL', 'Hadoop', 'Kafka'],
    features: [
      'Distributed data processing for IoT sensor data',
      'Real-time streaming analytics pipeline',
      'Cloud-native architecture on AWS',
      'Automated ETL workflows and monitoring'
    ],
    githubLink: 'https://github.com/Harshgitbu/Boston_AirPollution_Weather_Analysis',
    demoLink: 'https://app.powerbi.com/view?r=eyJrIjoiMmQ1ZTQ0NzktZWYwOS00OGY0LWI0ODUtNTBmZTY5ZDkzODRhIiwidCI6ImQ1N2QzMmNjLWMxMjEtNDg4Zi1iMDdiLWRmZTcwNTY4MGM3MSIsImMiOjN9&embedImagePlaceholder=true',
    icon: <FaServer />
  },
  {
    title: 'Cricket Analytics Web Platform',
    period: 'Feb 2025 – Apr 2025',
    description: 'End-to-end DS & ML integration delivering ESPN-style cricket insights using Flask and ML-powered comparisons with player performance analytics.',
    category: 'web',
    technologies: ['Flask', 'Python', 'Machine Learning', 'Data Visualization', 'Sports Analytics', 'JavaScript'],
    features: [
      'Player performance prediction',
      'Real-time match analytics',
      'Historical data comparison',
      'Interactive dashboards'
    ],
    githubLink: 'https://github.com/Harshgitbu/Cricket_Insights_App',
    //demoLink: '#',
    icon: <FaLaptopCode />
  },
  {
    title: "Exploratory Data Analysis of Boston's District 7",
    period: 'Oct 2024 – Dec 2024',
    description: 'Geospatial modeling and interactive Python dashboards for socioeconomic trends and displacement analysis with policy recommendations.',
    category: 'analytics',
    technologies: ['Python', 'Geospatial Analysis', 'Tableau', 'Statistical Modeling', 'Data Visualization'],
    features: [
      'Geospatial data visualization',
      'Socioeconomic trend analysis',
      'Interactive dashboards',
      'Policy impact assessment'
    ],
    githubLink: 'https://github.com/BU-Spark/ds-boston-d7-indicators',
    //demoLink: '#',
    icon: <FaDatabase />
  }
];

const Projects = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'ml', label: 'Machine Learning' },
    { key: 'analytics', label: 'Analytics' },
    { key: 'engineering', label: 'Data Engineering' },
    { key: 'web', label: 'Web Applications' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
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
    </section>
  );
};

export default Projects;
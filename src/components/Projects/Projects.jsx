import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Financial Analytics Web App',
    period: 'Mar 2025 – May 2025',
    description: 'Streamlit-based web app performing sentiment analysis on social media and financial news to assess stock trends.',
    link: '#',
  },
  {
    title: 'Predicting Respiratory Hospitalizations from Air Pollution',
    period: 'Mar 2025 – May 2025',
    description: 'Machine learning model on Azure ML Studio predicting hospitalization risks using real-time and historical air quality data.',
    link: '#',
  },
  {
    title: 'Cricket Analytics Web Platform',
    period: 'Feb 2025 – Apr 2025',
    description: 'End-to-end DS & ML integration delivering ESPN-style cricket insights using Flask and ML-powered comparisons.',
    link: '#',
  },
  {
    title: "Exploratory Data Analysis of Boston's District 7",
    period: 'Oct 2024 – Dec 2024',
    description: 'Geospatial modeling and interactive Python dashboards for socioeconomic trends and displacement analysis.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, period, description, link }, index) => (
          <div key={index} className="project-card">
            <h3>{title}</h3>
            <p className="project-period">{period}</p>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

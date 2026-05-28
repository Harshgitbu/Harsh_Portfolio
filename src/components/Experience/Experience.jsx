// ==============================
// EXPERIENCE.JSX
// ==============================

import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import './Experience.css';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'One Park Financial',
    location: 'USA (Remote)',
    period: 'Feb 2026 – Present',

    details: [
      'Designing and deploying enterprise-grade AI and ML systems.',
      'Building scalable data pipelines for model training and inference.',
      'Collaborating with cross-functional teams to productionize AI solutions.',
      'Implementing MLOps workflows and lifecycle management.',
      'Researching and integrating modern Generative AI technologies.'
    ],

    technologies: [
      'Python',
      'MLOps',
      'Docker',
      'Kubernetes',
      'AWS',
      'FastAPI',
      'Terraform',
      'CI/CD'
    ],

    achievement:
      'Leading AI initiatives and scalable MLOps implementation.'
  },

  {
    role: 'AI/ML Freelance Consultant',
    company: 'GoCreation',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Mar 2025 – May 2025',

    details: [
      'Engineered WhatsApp AI Sales Automation Agent using Claude API.',
      'Achieved reliable slot filling from unstructured conversations.',
      'Built hybrid LLM + state-machine orchestration.',
      'Designed personalized recommendation architecture.',
      'Deployed full-stack production-ready system.'
    ],

    technologies: [
      'Python',
      'Flask',
      'Claude API',
      'SQLAlchemy',
      'React',
      'PostgreSQL'
    ],

    achievement:
      'Delivered production-ready AI sales automation platform.'
  },

  {
    role: 'Data Science Intern',
    company: 'Petpooja',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jun 2025 – Jul 2025',

    details: [
      'Enhanced analytics dashboards improving reporting speed by 40%.',
      'Built aggregation logic for outlet-level analytics.',
      'Analyzed customer order behavior improving conversions.',
      'Explored ML-based tax categorization systems.'
    ],

    technologies: [
      'Python',
      'SQL',
      'Tableau',
      'Machine Learning',
      'Pandas'
    ],

    achievement:
      'Improved reporting speed and conversion performance.'
  },

  {
    role: 'Data Scientist',
    company: 'General Motors',
    location: 'Warren, Michigan, USA',
    period: 'Jul 2022 – Jun 2024',

    details: [
      'Built APIs serving 30,000+ OnStar users.',
      'Engineered real-time analytics pipelines.',
      'Developed Azure CI/CD workflows accelerating deployments.',
      'Created KPI dashboards for business stakeholders.',
      'Implemented enterprise data validation frameworks.'
    ],

    technologies: [
      'Azure',
      'CI/CD',
      'Python',
      'Spark',
      'Grafana',
      'API Development'
    ],

    achievement:
      'Reduced reporting latency and accelerated deployment cycles.'
  },

  {
    role: 'Data Analyst',
    company: 'General Motors',
    location: 'Warren, Michigan, USA',
    period: 'Jun 2021 – Jun 2022',

    details: [
      'Validated 400+ API endpoints.',
      'Developed 100+ test cases for enterprise analytics.',
      'Implemented anomaly detection systems.',
      'Documented validation workflows and QA processes.',
      'Mentored junior analysts.'
    ],

    technologies: [
      'Python',
      'SQL',
      'JIRA',
      'QA',
      'API Testing'
    ],

    achievement:
      'Reduced analytics errors and improved workflow efficiency.'
  },

  {
    role: 'Android Application Developer Intern',
    company: 'Silicon IT Hub Pvt Ltd.',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Sep 2020 – Jan 2021',

    details: [
      'Developed Android logistics application using GPS.',
      'Designed intelligent truck parking recommendation system.'
    ],

    technologies: [
      'Android',
      'Java',
      'GPS Integration',
      'Mobile Development'
    ],

    achievement:
      'Successfully improved logistics operational efficiency.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <SectionWrapper className="experience">
        <h2>Professional Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item"
            >
              <div className="experience-marker"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="experience-role">
                      {exp.role}
                    </h3>

                    <div className="experience-company">
                      {exp.company}
                    </div>

                    <div className="experience-location">
                      {exp.location}
                    </div>
                  </div>

                  <div className="experience-period">
                    {exp.period}
                  </div>
                </div>

                <ul className="experience-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <div className="experience-achievement">
                  <span className="achievement-label">
                    Key Achievement:
                  </span>{' '}
                  {exp.achievement}
                </div>

                <div className="experience-tech">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Experience;
import React from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Experience.css';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Petpooja (Restaurant POS Software)',
    location: 'Ahmedabad, India',
    period: 'June 2025 – July 2025',
    details: [
      'Enhanced analytics dashboards (sales, inventory, taxation, staffing), improving reporting speed by 40%.',
      'Built aggregation logic for city/outlet-level data, boosting monitoring efficiency across 100+ outlets.',
      'Modeled user order flows and behavior, informing UI/UX updates that improved conversions by 15%.',
      'Explored ML-based tax categorization methods, reducing reporting errors by 25%.',
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Machine Learning', 'Data Analytics'],
    achievement: 'Improved operational efficiency by 15% through data-driven insights'
  },
  {
    role: 'Data Scientist',
    company: 'General Motors',
    location: 'Warren, MI',
    period: 'July 2022 – June 2024',
    details: [
      'Performed time series and statistical analysis on customer and vehicle data to improve forecasting accuracy and insights for 30k users.',
      'Developed Excel dashboards, KPI trackers, and pivot table reports to summarize data and support faster, data driven decisions.',
      'Built and evaluated machine learning models for user/vehicle usage estimation using data from secure database pipelines.',
      'Applied advanced analytical techniques to enhance customer experience insights and support strategic business decisions.',
      'Implemented data-quality checks, validation rules, and governance controls to ensure accurate and secure data across systems.',
    ],
    technologies: ['Azure', 'CI/CD', 'Python', 'API Development', 'Machine Learning', 'Git', 'PowerBI'],
    achievement: 'Automated ETL workflows and monitoring systems, enhancing decision-making for 30,000+ users'
  },
  {
    role: 'Data Analyst',
    company: 'General Motors',
    location: 'Warren, MI',
    period: 'June 2021 – June 2022',
    details: [
      'Validated and analyzed data outputs from 400+ API endpoints supporting enterprise analytics systems, ensuring 90%+ data accuracy in production reports.',
      'Created and maintained 100+ test cases and validation scenarios in JIRA to verify data pipelines, dashboards, and ML model outputs.',
      'Assisted in data quality checks, anomaly detection, and reconciliation to improve reliability of analytics workflows.',
      'Supported senior analysts by documenting validation processes and data issues, helping streamline reporting and analysis cycles.',
      'Mentored and collaborated with junior QA trainees on data validation and analysis best practices, improving team efficiency by 25%.',
    ],
    technologies: ['EDA', 'A/B Testing', 'Database Management', 'PowerBI', 'Data Quality Assurance'],
    achievement: 'Increased team productivity by 25% through mentorship and optimized testing'
  },
  {
    role: 'Android Application Developer Intern',
    company: 'Silicon IT Hub Pvt Ltd.',
    location: 'Ahmedabad, India',
    period: 'Sept 2020 – Jan 2021',
    details: [
      'Built Android app for truckers to locate nearby parking.',
      'Tested and optimized Android applications enhancing user experience.',
    ],
    technologies: ['Android', 'Java', 'Mobile Development', 'UI/UX'],
    achievement: 'Developed functional Android app solving real-world parking challenges'
  },
];

const Experience = () => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section id="experience" className="section">
      <div ref={ref} className={`experience fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map(({ role, company, location, period, details, technologies, achievement }, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="experience-role">{role}</h3>
                    <div className="experience-company">{company}</div>
                    <div className="experience-location">{location}</div>
                  </div>
                  <div className="experience-period">{period}</div>
                </div>
                
                <ul className="experience-details">
                  {details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                {achievement && (
                  <div className="experience-achievement">
                    <span className="achievement-label">Key Achievement:</span> {achievement}
                  </div>
                )}
                
                <div className="experience-tech">
                  {technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
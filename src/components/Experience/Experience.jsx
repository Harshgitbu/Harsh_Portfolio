import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Petpooja (Restaurant POS Software)',
    location: 'Ahmedabad, India',
    period: 'June 2025 – July 2025',
    details: [
      'Enhanced multi-dimensional dashboards, accelerating decision-making.',
      'Developed outlet & city-wise data aggregation logic for 100+ outlets.',
      'Designed user behavior models, improving UI/UX efficiency by 15%.',
      'Explored AI solutions to automate tax categorization, cutting errors by 25%.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'General Motors',
    location: 'Warren, MI',
    period: 'July 2022 – June 2024',
    details: [
      'Engineered 15+ APIs and automated pipelines supporting 30k users with Grafana monitoring.',
      'Built CI/CD pipelines in Azure improving deployment scalability by 85%.',
      'Applied cloud-native development and distributed processing for reliability.',
      'Implemented role-based access controls and security validations.',
      'Resolved daily software issues via Git workflows ensuring remote vehicle control.',
    ],
  },
  {
    role: 'Senior Quality Assurance Specialist',
    company: 'General Motors',
    location: 'Warren, MI',
    period: 'June 2021 – June 2022',
    details: [
      'Tested 400+ APIs using tools like Postman and ReadyAPI.',
      'Created 100+ automated/manual test plans improving API reliability.',
      'Mentored juniors, boosting team productivity by 25%.',
    ],
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
  },
];

const Experience = () => (
  <section id="experience" className="section">
    <div className="section-inner">
      <h2 className="section-heading">Experience</h2>
      <ul>
      {experiences.map(({ role, company, location, period, details }, index) => (
          <li key={index}>
            <h3>{role}</h3>
            <p className="company-location">{company} - <span>{location}</span></p>
            <p className="period">{period}</p>
            <ul className="details">
              {details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
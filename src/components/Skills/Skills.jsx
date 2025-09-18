import React from 'react';
import './Skills.css';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Azure ML Studio', level: 80 },
  { name: 'Data Engineering', level: 80 },
  { name: 'Tableau', level: 75 },
  { name: 'JavaScript', level: 70 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(({ name, level }, i) => (
          <div key={i} className="skill">
            <span className="skill-name">{name}</span>
            <div className="skill-bar-wrapper">
              <div className="skill-bar" style={{ width: `${level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

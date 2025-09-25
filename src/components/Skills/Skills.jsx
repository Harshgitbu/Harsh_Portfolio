import React, { useState, useEffect, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Skills.css';

// Import icons
import { FaPython, FaDatabase, FaCloud, FaTools, FaCode, FaRobot, FaChartLine, FaServer, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiApachespark, SiTensorflow, SiPytorch, SiScikitlearn, SiTableau, SiDocker, SiKubernetes } from 'react-icons/si';

const Skills = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeCategory, setActiveCategory] = useState('all');
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    { key: 'all', label: 'All Skills', icon: <FaCode /> },
    { key: 'languages', label: 'Programming', icon: <FaPython /> },
    { key: 'ml', label: 'Machine Learning', icon: <FaRobot /> },
    { key: 'engineering', label: 'Data Engineering', icon: <FaDatabase /> },
    { key: 'cloud', label: 'Cloud & DevOps', icon: <FaCloud /> },
    { key: 'tools', label: 'Tools & Visualization', icon: <FaTools /> }
  ];

  const skills = [
    // Programming Languages
    { name: 'Python', level: 95, category: 'languages', icon: <FaPython />, tags: ['Pandas', 'NumPy', 'Scipy'], levelClass: 'advanced' },
    { name: 'SQL', level: 90, category: 'languages', icon: <FaDatabase />, tags: ['PostgreSQL', 'MySQL', 'SQL Server'], levelClass: 'advanced' },
    { name: 'R', level: 75, category: 'languages', icon: <FaCode />, tags: ['Statistical Analysis', 'Data Visualization'], levelClass: 'intermediate' },
    { name: 'JavaScript', level: 70, category: 'languages', icon: <FaCode />, tags: ['React', 'Node.js', 'D3.js'], levelClass: 'intermediate' },
    
    // Machine Learning
    { name: 'Machine Learning', level: 90, category: 'ml', icon: <FaRobot />, tags: ['Supervised/Unsupervised', 'Deep Learning'], levelClass: 'advanced' },
    { name: 'TensorFlow', level: 85, category: 'ml', icon: <SiTensorflow />, tags: ['Keras', 'Neural Networks'], levelClass: 'advanced' },
    { name: 'PyTorch', level: 80, category: 'ml', icon: <SiPytorch />, tags: ['Deep Learning', 'Research'], levelClass: 'intermediate' },
    { name: 'Scikit-learn', level: 95, category: 'ml', icon: <SiScikitlearn />, tags: ['ML Algorithms', 'Model Evaluation'], levelClass: 'advanced' },
    
    // Data Engineering
    { name: 'Apache Spark', level: 85, category: 'engineering', icon: <SiApachespark />, tags: ['Big Data', 'Distributed Computing'], levelClass: 'advanced' },
    { name: 'Data Pipelines', level: 90, category: 'engineering', icon: <FaServer />, tags: ['ETL', 'Data Warehousing'], levelClass: 'advanced' },
    { name: 'Data Modeling', level: 88, category: 'engineering', icon: <FaDatabase />, tags: ['Database Design', 'Normalization'], levelClass: 'advanced' },
    
    // Cloud & DevOps
    { name: 'Azure', level: 85, category: 'cloud', icon: <FaMicrosoft />, tags: ['ML Studio', 'Data Factory'], levelClass: 'advanced' },
    { name: 'AWS', level: 75, category: 'cloud', icon: <FaAws />, tags: ['EC2', 'S3', 'Lambda'], levelClass: 'intermediate' },
    { name: 'Docker', level: 70, category: 'cloud', icon: <SiDocker />, tags: ['Containerization', 'Microservices'], levelClass: 'intermediate' },
    { name: 'Kubernetes', level: 65, category: 'cloud', icon: <SiKubernetes />, tags: ['Orchestration', 'Scaling'], levelClass: 'intermediate' },
    
    // Tools & Visualization
    { name: 'Tableau', level: 80, category: 'tools', icon: <SiTableau />, tags: ['Dashboards', 'Business Intelligence'], levelClass: 'intermediate' },
    { name: 'Data Visualization', level: 85, category: 'tools', icon: <FaChartLine />, tags: ['Matplotlib', 'Seaborn', 'Plotly'], levelClass: 'advanced' },
    { name: 'Git', level: 90, category: 'tools', icon: <FaTools />, tags: ['Version Control', 'CI/CD'], levelClass: 'advanced' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  // Group skills by category for the grid view
  const skillsByCategory = {
    languages: skills.filter(skill => skill.category === 'languages'),
    ml: skills.filter(skill => skill.category === 'ml'),
    engineering: skills.filter(skill => skill.category === 'engineering'),
    cloud: skills.filter(skill => skill.category === 'cloud'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimated(true);
    }
  }, [isVisible, animated]);

  const getCategorySkills = (category) => skillsByCategory[category] || [];

  return (
    <section id="skills" className="section">
      <div ref={ref} className={`skills fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <h2>Technical Skills</h2>
        
        <div className="skills-categories">
          {skillCategories.map(category => (
            <button
              key={category.key}
              className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {activeCategory === 'all' ? (
          <div className="skills-grid">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className={`skill-category ${category}`}>
                <div className="category-header">
                  <div className="category-icon">
                    {skillCategories.find(cat => cat.key === category)?.icon}
                  </div>
                  <h3 className="category-title">
                    {skillCategories.find(cat => cat.key === category)?.label}
                  </h3>
                </div>
                
                <div className="skills-list">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className={`skill-item ${skill.levelClass}`}>
                      <div className="skill-header">
                        <span className="skill-name">
                          {skill.icon}
                          {skill.name}
                        </span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ 
                            width: animated ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                      <div className="skill-tags">
                        {skill.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="skills-list" style={{maxWidth: '800px', margin: '0 auto'}}>
            {filteredSkills.map((skill, index) => (
              <div key={index} className={`skill-item ${skill.levelClass}`}>
                <div className="skill-header">
                  <span className="skill-name">
                    {skill.icon}
                    {skill.name}
                  </span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar" 
                    style={{ 
                      width: animated ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <div className="skill-tags">
                  {skill.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="skills-overview">
          <div className="overview-item">
            <span className="overview-number">{skills.length}+</span>
            <span className="overview-label">Technologies</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">3+</span>
            <span className="overview-label">Years Experience</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">5</span>
            <span className="overview-label">Skill Categories</span>
          </div>
          <div className="overview-item">
            <span className="overview-number">10+</span>
            <span className="overview-label">Projects Completed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
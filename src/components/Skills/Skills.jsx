import React, { useState, useEffect } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Skills.css';

// Import icons
import { FaPython, FaDatabase, FaCloud, FaTools, FaCode, FaRobot, FaChartLine, FaServer, FaAws, FaMicrosoft } from 'react-icons/fa';
import { SiApachespark, SiTensorflow, SiPytorch, SiScikitlearn, SiTableau, SiDocker, SiKubernetes, SiApachekafka } from 'react-icons/si';

const Skills = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeCategory, setActiveCategory] = useState('all');
  const [animated, setAnimated] = useState(false);

  // Helper function to determine skill level class
  const getSkillLevelClass = (level) => {
    if (level >= 85) return 'advanced';
    if (level >= 75) return 'intermediate';
    if (level >= 60) return 'beginner';
    return 'novice';
  };

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
    { name: 'Python', level: 95, category: 'languages', icon: <FaPython />, tags: ['Pandas', 'NumPy', 'Scipy'] },
    { name: 'SQL', level: 90, category: 'languages', icon: <FaDatabase />, tags: ['PostgreSQL', 'MySQL', 'SQL Server'] },
    { name: 'R', level: 75, category: 'languages', icon: <FaCode />, tags: ['Statistical Analysis', 'Data Visualization'] },
    { name: 'JavaScript', level: 70, category: 'languages', icon: <FaCode />, tags: ['React', 'Node.js', 'D3.js'] },
    
    // Machine Learning
    { name: 'Machine Learning', level: 90, category: 'ml', icon: <FaRobot />, tags: ['Supervised/Unsupervised', 'Deep Learning'] },
    { name: 'TensorFlow', level: 85, category: 'ml', icon: <SiTensorflow />, tags: ['Keras', 'Neural Networks'] },
    { name: 'PyTorch', level: 80, category: 'ml', icon: <SiPytorch />, tags: ['Deep Learning', 'Research'] },
    { name: 'Scikit-learn', level: 95, category: 'ml', icon: <SiScikitlearn />, tags: ['ML Algorithms', 'Model Evaluation'] },
    
    // Data Engineering
    { name: 'Apache Spark', level: 85, category: 'engineering', icon: <SiApachespark />, tags: ['Big Data', 'Distributed Computing'] },
    { name: 'Data Pipelines', level: 90, category: 'engineering', icon: <FaServer />, tags: ['ETL', 'Data Warehousing'] },
    { name: 'Apache Kafka', level: 75, category: 'engineering', icon: <SiApachekafka />, tags: ['Stream Processing', 'Real-time'] },
    { name: 'Data Modeling', level: 88, category: 'engineering', icon: <FaDatabase />, tags: ['Database Design', 'Normalization'] },
    
    // Cloud & DevOps
    { name: 'Azure', level: 85, category: 'cloud', icon: <FaMicrosoft />, tags: ['ML Studio', 'Data Factory'] },
    { name: 'AWS', level: 75, category: 'cloud', icon: <FaAws />, tags: ['EC2', 'S3', 'Lambda'] },
    { name: 'Docker', level: 70, category: 'cloud', icon: <SiDocker />, tags: ['Containerization', 'Microservices'] },
    { name: 'Kubernetes', level: 65, category: 'cloud', icon: <SiKubernetes />, tags: ['Orchestration', 'Scaling'] },
    
    // Tools & Visualization
    { name: 'Tableau', level: 80, category: 'tools', icon: <SiTableau />, tags: ['Dashboards', 'Business Intelligence'] },
    { name: 'Data Visualization', level: 85, category: 'tools', icon: <FaChartLine />, tags: ['Matplotlib', 'Seaborn', 'Plotly'] },
    { name: 'Git', level: 90, category: 'tools', icon: <FaTools />, tags: ['Version Control', 'CI/CD'] }
  ];

  // Add levelClass to each skill
  const skillsWithLevelClass = skills.map(skill => ({
    ...skill,
    levelClass: getSkillLevelClass(skill.level)
  }));

  const filteredSkills = activeCategory === 'all' 
    ? skillsWithLevelClass 
    : skillsWithLevelClass.filter(skill => skill.category === activeCategory);

  const skillsByCategory = {
    languages: skillsWithLevelClass.filter(skill => skill.category === 'languages'),
    ml: skillsWithLevelClass.filter(skill => skill.category === 'ml'),
    engineering: skillsWithLevelClass.filter(skill => skill.category === 'engineering'),
    cloud: skillsWithLevelClass.filter(skill => skill.category === 'cloud'),
    tools: skillsWithLevelClass.filter(skill => skill.category === 'tools')
  };

  useEffect(() => {
    if (isVisible && !animated) {
      setAnimated(true);
    }
  }, [isVisible, animated]);

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
          <div className="skills-list-single">
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

        
      </div>
    </section>
  );
};

export default Skills;
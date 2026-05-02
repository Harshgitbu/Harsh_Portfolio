import React, { useState, useEffect } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Skills.css';

// Import icons
import { 
  FaPython, FaDatabase, FaCloud, FaTools, FaCode, FaRobot, 
  FaChartLine, FaServer, FaAws, FaMicrosoft, FaBrain, 
  FaDocker, FaGitAlt, FaChartBar, FaMobile 
} from 'react-icons/fa';
import { 
  SiApachespark, SiTensorflow, SiPytorch, SiScikitlearn, 
  SiTableau, SiDocker, SiKubernetes, SiApachekafka, 
  SiFastapi, SiTerraform, SiJenkins, SiRedis, SiGrafana,
  SiFlask, SiReact, SiPostgresql
} from 'react-icons/si';

const Skills = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeCategory, setActiveCategory] = useState('all');
  const [animated, setAnimated] = useState(false);

  const getSkillLevelClass = (level) => {
    if (level >= 85) return 'advanced';
    if (level >= 75) return 'intermediate';
    if (level >= 60) return 'beginner';
    return 'novice';
  };

  const skillCategories = [
    { key: 'all', label: 'All Skills', icon: <FaCode /> },
    { key: 'ml', label: 'AI & ML', icon: <FaBrain /> },
    { key: 'mlops', label: 'MLOps & DevOps', icon: <FaDocker /> },
    { key: 'engineering', label: 'Data Engineering', icon: <FaDatabase /> },
    { key: 'cloud', label: 'Cloud Platforms', icon: <FaCloud /> },
    { key: 'tools', label: 'Tools & Visualization', icon: <FaTools /> }
  ];

  const skills = [
    // AI & Machine Learning
    { name: 'RAG Systems', level: 90, category: 'ml', icon: <FaRobot />, tags: ['FAISS', 'Vector DB', 'LLMs'] },
    { name: 'Deep Learning', level: 88, category: 'ml', icon: <SiTensorflow />, tags: ['CNNs', 'RNNs', 'Transformers'] },
    { name: 'LLMs (GPT/BERT)', level: 85, category: 'ml', icon: <FaBrain />, tags: ['Fine-tuning', 'Prompt Engineering'] },
    { name: 'Predictive Modeling', level: 92, category: 'ml', icon: <SiScikitlearn />, tags: ['Classification', 'Regression'] },
    { name: 'NLP', level: 87, category: 'ml', icon: <FaRobot />, tags: ['Sentiment', 'Classification'] },
    { name: 'Time Series', level: 85, category: 'ml', icon: <FaChartLine />, tags: ['Forecasting', 'Prophet'] },
    
    // MLOps & DevOps
    { name: 'Docker', level: 88, category: 'mlops', icon: <SiDocker />, tags: ['Containerization', 'Microservices'] },
    { name: 'Kubernetes', level: 80, category: 'mlops', icon: <SiKubernetes />, tags: ['Orchestration', 'Scaling'] },
    { name: 'CI/CD', level: 90, category: 'mlops', icon: <FaTools />, tags: ['Jenkins', 'GitHub Actions'] },
    { name: 'FastAPI', level: 85, category: 'mlops', icon: <SiFastapi />, tags: ['API Development', 'REST'] },
    { name: 'Terraform', level: 75, category: 'mlops', icon: <SiTerraform />, tags: ['IaC', 'AWS/Azure'] },
    { name: 'Model Monitoring', level: 82, category: 'mlops', icon: <SiGrafana />, tags: ['Prometheus', 'Grafana'] },
    
    // Data Engineering
    { name: 'Apache Spark', level: 85, category: 'engineering', icon: <SiApachespark />, tags: ['Big Data', 'Distributed'] },
    { name: 'Data Pipelines', level: 90, category: 'engineering', icon: <FaServer />, tags: ['ETL', 'Real-time'] },
    { name: 'Apache Kafka', level: 78, category: 'engineering', icon: <SiApachekafka />, tags: ['Streaming', 'Events'] },
    { name: 'Data Modeling', level: 88, category: 'engineering', icon: <FaDatabase />, tags: ['Warehousing', 'Schema'] },
    { name: 'Vector Databases', level: 85, category: 'engineering', icon: <FaDatabase />, tags: ['FAISS', 'Pinecone'] },
    
    // Cloud Platforms
    { name: 'Azure', level: 88, category: 'cloud', icon: <FaMicrosoft />, tags: ['ML Studio', 'Data Factory', 'Event Hubs'] },
    { name: 'AWS', level: 82, category: 'cloud', icon: <FaAws />, tags: ['S3', 'EC2', 'RDS', 'Lambda'] },
    { name: 'Redis', level: 80, category: 'cloud', icon: <SiRedis />, tags: ['Caching', 'Queue'] },
    
    // Tools & Visualization
    { name: 'Power BI', level: 85, category: 'tools', icon: <FaChartBar />, tags: ['Dashboards', 'DAX'] },
    { name: 'Tableau', level: 80, category: 'tools', icon: <SiTableau />, tags: ['Visualization', 'Analytics'] },
    { name: 'Git', level: 92, category: 'tools', icon: <FaGitAlt />, tags: ['Version Control', 'Collaboration'] },
    { name: 'Grafana', level: 78, category: 'tools', icon: <SiGrafana />, tags: ['Monitoring', 'Metrics'] }
  ];

  const skillsWithLevelClass = skills.map(skill => ({
    ...skill,
    levelClass: getSkillLevelClass(skill.level)
  }));

  const filteredSkills = activeCategory === 'all' 
    ? skillsWithLevelClass 
    : skillsWithLevelClass.filter(skill => skill.category === activeCategory);

  const skillsByCategory = {
    ml: skillsWithLevelClass.filter(skill => skill.category === 'ml'),
    mlops: skillsWithLevelClass.filter(skill => skill.category === 'mlops'),
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

        <div className="skills-overview">
          <div className="overview-item">
            <span className="overview-number" style={{color: '#10b981'}}>85%+</span>
            <span className="overview-label">Advanced</span>
          </div>
          <div className="overview-item">
            <span className="overview-number" style={{color: '#f59e0b'}}>75-85%</span>
            <span className="overview-label">Intermediate</span>
          </div>
          <div className="overview-item">
            <span className="overview-number" style={{color: '#eab308'}}>60-75%</span>
            <span className="overview-label">Beginner</span>
          </div>
          <div className="overview-item">
            <span className="overview-number" style={{color: '#ef4444'}}>Below 60%</span>
            <span className="overview-label">Novice</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
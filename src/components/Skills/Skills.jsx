import React, { useEffect, useState, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import {
  FaBrain, FaDatabase, FaCloud, FaTools, FaCode, FaDocker,
} from 'react-icons/fa';
import './Skills.css';

const skillData = [
  {
    key: 'ml', label: 'AI & ML', icon: <FaBrain />,
    skills: [
      { name: 'Predictive Modeling', level: 92, tags: ['Classification', 'Regression'] },
      { name: 'RAG Systems', level: 90, tags: ['FAISS', 'Vector DB'] },
      { name: 'NLP', level: 87, tags: ['Sentiment', 'Classification'] },
      { name: 'Deep Learning', level: 88, tags: ['CNNs', 'Transformers'] },
      { name: 'LLMs (GPT/BERT)', level: 85, tags: ['Fine-tuning', 'Prompt Eng.'] },
      { name: 'Time Series', level: 85, tags: ['Forecasting', 'Prophet'] },
    ]
  },
  {
    key: 'mlops', label: 'MLOps & DevOps', icon: <FaDocker />,
    skills: [
      { name: 'CI/CD', level: 90, tags: ['Jenkins', 'GitHub Actions'] },
      { name: 'Docker', level: 88, tags: ['Containers', 'Microservices'] },
      { name: 'FastAPI', level: 85, tags: ['REST', 'API Dev'] },
      { name: 'Kubernetes', level: 80, tags: ['Orchestration', 'Scaling'] },
      { name: 'Model Monitoring', level: 82, tags: ['Prometheus', 'Grafana'] },
      { name: 'Terraform', level: 75, tags: ['IaC', 'AWS/Azure'] },
    ]
  },
  {
    key: 'engineering', label: 'Data Engineering', icon: <FaDatabase />,
    skills: [
      { name: 'Data Pipelines', level: 90, tags: ['ETL', 'Real-time'] },
      { name: 'Apache Spark', level: 85, tags: ['Big Data', 'Distributed'] },
      { name: 'Vector Databases', level: 85, tags: ['FAISS', 'Pinecone'] },
      { name: 'Data Modeling', level: 88, tags: ['Warehousing', 'Schema'] },
      { name: 'Apache Kafka', level: 78, tags: ['Streaming', 'Events'] },
    ]
  },
  {
    key: 'cloud', label: 'Cloud Platforms', icon: <FaCloud />,
    skills: [
      { name: 'Azure', level: 88, tags: ['ML Studio', 'Data Factory'] },
      { name: 'AWS', level: 82, tags: ['EC2', 'S3', 'Lambda'] },
      { name: 'Redis', level: 80, tags: ['Caching', 'Queue'] },
    ]
  },
  {
    key: 'tools', label: 'Tools & Viz', icon: <FaTools />,
    skills: [
      { name: 'Git', level: 92, tags: ['Version Control'] },
      { name: 'Power BI', level: 85, tags: ['Dashboards', 'DAX'] },
      { name: 'Tableau', level: 80, tags: ['Visualization'] },
      { name: 'Grafana', level: 78, tags: ['Monitoring', 'Metrics'] },
    ]
  },
];

const getLevel = (l) => l >= 85 ? 'advanced' : l >= 75 ? 'intermediate' : 'beginner';

const tabs = [{ key: 'all', label: 'All Skills', icon: <FaCode /> }, ...skillData];

const Skills = ({ focusedSection }) => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [activeTab, setActiveTab] = useState('all');
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('active'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => { if (isVisible && !animated) setAnimated(true); }, [isVisible, animated]);

  const currentData = activeTab === 'all' ? skillData : skillData.filter(g => g.key === activeTab);

  return (
    <section id="skills" className={`section ${focusedSection && focusedSection !== 'skills' ? 'faded' : ''}`}>
      <div ref={sectionRef} className="reveal">
        <div ref={ref} className="skills-wrap">
          <p className="section-label">04 — Skills</p>
          <h2 className="section-title">Technical Stack</h2>

          <div className="skills-tabs">
            {tabs.map(t => (
              <button
                key={t.key}
                className={`skills-tab ${activeTab === t.key ? 'active' : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'all' ? (
            <div className="skills-grid">
              {currentData.map(group => (
                <div key={group.key} className="skill-group">
                  <div className="skill-group-header">
                    <div className="skill-group-icon">{group.icon}</div>
                    <span className="skill-group-title">{group.label}</span>
                  </div>
                  {group.skills.map((s, i) => (
                    <div key={i} className={`skill-item ${getLevel(s.level)}`}>
                      <div className="skill-row">
                        <span className="skill-name">{s.name}</span>
                        <span className="skill-pct">{s.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{ width: animated ? `${s.level}%` : '0%', transitionDelay: `${i * 0.07}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="skills-single">
              {currentData[0]?.skills.map((s, i) => (
                <div key={i} className={`skill-item ${getLevel(s.level)}`}>
                  <div className="skill-row">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: animated ? `${s.level}%` : '0%', transitionDelay: `${i * 0.07}s` }}
                    />
                  </div>
                  <div className="skill-tags-row">
                    {s.tags.map(t => <span key={t} className="skill-sub-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="skills-legend">
            <div className="legend-item">
              <div className="legend-dot" />
              <span className="legend-range">85%+</span>
              <span className="legend-label">Advanced</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot" />
              <span className="legend-range">75–85%</span>
              <span className="legend-label">Intermediate</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot" />
              <span className="legend-range">60–75%</span>
              <span className="legend-label">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

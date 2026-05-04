import React, { useEffect, useRef } from 'react'; // Removed useState since not needed
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Experience.css';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'One Park Financial',
    location: 'USA (Remote)',
    period: 'Feb 2026 – Present',
    details: [
      'Design, develop, and deploy machine learning and AI models to solve business problems and enhance product capabilities.',
      'Build and optimize data pipelines for model training, validation, and deployment using large-scale datasets.',
      'Collaborate with cross-functional teams (engineering, product, analytics) to translate business requirements into scalable AI solutions.',
      'Evaluate, fine-tune, and monitor model performance, ensuring accuracy, reliability, and continuous improvement.',
      'Implement MLOps practices, including model versioning, deployment, and lifecycle management.',
      'Research and integrate emerging AI/ML technologies (including generative AI and automation tools) to drive innovation.'
    ],
    technologies: ['Python', 'MLOps', 'Docker', 'Kubernetes', 'CI/CD', 'FastAPI', 'AWS', 'Terraform', 'Jenkins'],
    achievement: 'Leading AI initiatives and MLOps implementation for enterprise-scale solutions'
  },
  {
    role: 'AI/ML Freelance Consultant',
    company: 'GoCreation',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Mar 2025 – May 2025',
    details: [
      'Engineered WhatsApp AI Sales Automation Agent using Claude API with constrained generation via structured prompt design.',
      'Achieved reliable slot filling (product, quantity, city, frequency) from unstructured customer conversation.',
      'Designed data flywheel architecture enabling personalized RAG-style context injection for smarter recommendations.',
      'Built hybrid LLM + state machine orchestration layer enforcing business logic while preserving natural language flexibility.',
      'Deployed full-stack system with Flask webhook server, database, React admin dashboard, and background scheduler.'
    ],
    technologies: ['Python', 'Flask', 'Claude API', 'SQLAlchemy', 'Meta Cloud API', 'React', 'PostgreSQL'],
    achievement: 'Delivered production-ready AI sales automation system with $0 operational cost'
  },
  {
    role: 'Data Science Intern',
    company: 'Petpooja (Restaurant POS Software)',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Jun 2025 – Jul 2025',
    details: [
      'Enhanced analytics dashboards (sales, inventory, taxation, staffing), improving reporting speed by 40%.',
      'Built aggregation logic for city/outlet-level data, boosting monitoring efficiency across 100+ outlets.',
      'Modeled user order flows and behavior, informing UI/UX updates that improved conversions by 15%.',
      'Explored ML-based tax categorization methods, reducing reporting errors by 25%.'
    ],
    technologies: ['Python', 'SQL', 'Tableau', 'Data Analytics', 'Machine Learning', 'Pandas'],
    achievement: 'Improved reporting speed by 40% and conversions by 15% through data-driven insights'
  },
  {
    role: 'Data Scientist',
    company: 'General Motors',
    location: 'Warren, Michigan, USA',
    period: 'Jul 2022 – Jun 2024',
    details: [
      'Built 15+ APIs for OnStar customers using vehicle telemetry data, serving 30,000+ users across GM regions.',
      'Engineered data pipelines enabling real-time analytics and reducing reporting latency by 20% for business teams.',
      'Developed CI/CD workflows on Azure accelerating model deployment by 85% and improving system reliability.',
      'Created interactive dashboards and KPI trackers transforming raw data into actionable business insights.',
      'Implemented validation frameworks ensuring 95%+ data accuracy across enterprise analytics platforms.'
    ],
    technologies: ['Azure', 'CI/CD', 'Python', 'API Development', 'Grafana', 'Spark', 'Data Pipelines'],
    achievement: 'Reduced reporting latency by 20% and accelerated deployment by 85%'
  },
  {
    role: 'Data Analyst',
    company: 'General Motors',
    location: 'Warren, Michigan, USA',
    period: 'Jun 2021 – Jun 2022',
    details: [
      'Validated 400+ API endpoints ensuring 90%+ data accuracy for enterprise analytics.',
      'Developed 100+ test cases in JIRA verifying data pipelines, dashboards, and ML model outputs, reducing errors by 25%.',
      'Implemented anomaly detection systems identifying data quality issues before impacting analytics workflows.',
      'Documented validation processes and data issues, streamlining reporting cycles and improving team efficiency by 15%.',
      'Mentored junior analysts on data validation best practices and quality assurance methodologies.'
    ],
    technologies: ['Python', 'SQL', 'JIRA', 'API Testing', 'Quality Assurance', 'Data Validation'],
    achievement: 'Reduced errors by 25% and improved team efficiency by 15%'
  },
  {
    role: 'Android Application Developer Intern',
    company: 'Silicon IT Hub Pvt Ltd.',
    location: 'Ahmedabad, Gujarat, India',
    period: 'Sep 2020 – Jan 2021',
    details: [
      'Designed Android app to identify nearby truck parking facilities using GPS, improving logistics efficiency.',
      'Reduced downtime for truck drivers through intelligent parking location recommendations.'
    ],
    technologies: ['Android', 'Java', 'GPS Integration', 'Mobile Development', 'UI/UX'],
    achievement: 'Successfully deployed application improving logistics efficiency'
  }
];

const Experience = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const sectionRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div ref={sectionRef} className="reveal">  {/* Added sectionRef wrapper */}
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
      </div>
    </section>
  );
};

export default Experience;
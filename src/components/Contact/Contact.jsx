import React, { useState } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import './Contact.css';

// Import icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [ref, isVisible] = useFadeInOnScroll();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'shahharsh0612@gmail.com',
      link: 'mailto:shahharsh0612@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '(908) 636-1325',
      link: 'tel:+19086361325'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Boston, MA',
      link: 'https://maps.google.com/?q=Boston,MA'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      details: 'linkedin.com/in/harsh612',
      link: 'https://www.linkedin.com/in/harsh612/'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/harsh612/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/Harshgitbu',
      label: 'GitHub'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:shahharsh0612@gmail.com',
      label: 'Email'
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section">
        <div ref={ref} className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`}>
          <h2>Contact Me</h2>
          <div className="success-message">
            <FaCheck style={{ marginRight: '0.5rem' }} />
            Thank you for your message! I'll get back to you within 24 hours.
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-description">
                In the meantime, feel free to connect with me through any of these channels:
              </p>
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <a key={index} href={method.link} className="contact-method" target="_blank" rel="noopener noreferrer">
                    <div className="contact-icon">
                      {method.icon}
                    </div>
                    <div className="contact-details">
                      <h3>{method.title}</h3>
                      <p>{method.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section">
      <div ref={ref} className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`}>
        <h2>Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">
              I'm currently available for full-time data science opportunities starting January 2026. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a key={index} href={method.link} className="contact-method" target="_blank" rel="noopener noreferrer">
                  <div className="contact-icon">
                    {method.icon}
                  </div>
                  <div className="contact-details">
                    <h3>{method.title}</h3>
                    <p>{method.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links-contact">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link-contact" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="availability-dot"></div>
              <span className="availability-text">Available for opportunities starting January 2026</span>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What's this about?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                  rows="5"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {errors.submit && <span className="error-message">{errors.submit}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
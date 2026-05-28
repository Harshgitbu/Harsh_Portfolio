// ==============================
// CONTACT.JSX
// ==============================

import React, { useState } from 'react';

import SectionWrapper from '../common/SectionWrapper';

import './Contact.css';

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaGlobe
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <SectionWrapper className="contact">
        <h2>Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              <a
                href="mailto:harshtemp612@gmail.com"
                className="contact-method"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span>harshtemp612@gmail.com</span>
              </a>

              <a
                href="tel:+919023974413"
                className="contact-method"
                aria-label="Call Phone Number"
              >
                <FaPhone />
                <span>+91 9023974413</span>
              </a>

              <div className="contact-method">
                <FaMapMarkerAlt />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="social-links-contact">
              <a
                href="https://github.com/Harshgitbu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/harsh612/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://harshshah-portfolio.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Website"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Full Name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email Address"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              aria-label="Subject"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
            />

            <button
              type="submit"
              className="submit-btn"
              aria-label="Send Message"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
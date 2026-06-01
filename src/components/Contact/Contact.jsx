import React, { useEffect, useState, useRef } from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheck, FaGlobe } from 'react-icons/fa';
import './Contact.css';

const methods = [
  { icon: <FaEnvelope />, title: 'Email', val: 'harshtemp612@gmail.com', href: 'mailto:harshtemp612@gmail.com' },
  { icon: <FaPhone />, title: 'Phone', val: '+91 9023974413', href: 'tel:+919023974413' },
  { icon: <FaMapMarkerAlt />, title: 'Location', val: 'Ahmedabad, India', href: 'https://maps.google.com/?q=Ahmedabad,Gujarat,India' },
];

const socials = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/harsh612/', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/Harshgitbu', label: 'GitHub' },
  { icon: <FaGlobe />, href: 'https://harshshah-portfolio.netlify.app', label: 'Portfolio' },
];

const Contact = ({ focusedSection }) => {
  const [ref] = useFadeInOnScroll();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('active'); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'At least 10 chars required';
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className={`section ${focusedSection && focusedSection !== 'contact' ? 'faded' : ''}`}>
      <div ref={sectionRef} className="reveal">
        <div ref={ref} className="contact-wrap">
          <p className="section-label">05 — Contact</p>
          <h2 className="section-title">Let's Build Together</h2>

          <div className="contact-grid">
            <div>
              <p className="contact-desc">
                I'm currently available for AI Engineer and Data Scientist opportunities.
                Whether you have a project in mind, want to collaborate, or just want to connect — drop a message.
              </p>

              <div className="contact-methods">
                {methods.map(m => (
                  <a key={m.title} href={m.href} className="contact-method" target="_blank" rel="noopener noreferrer">
                    <div className="method-icon">{m.icon}</div>
                    <div>
                      <div className="method-title">{m.title}</div>
                      <div className="method-val">{m.val}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-socials">
                {socials.map(s => (
                  <a key={s.label} href={s.href} className="social-btn" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="avail-badge">
                <div className="avail-dot" />
                <span className="avail-text">Open to work · 4+ years experience</span>
              </div>
            </div>

            <div className="contact-form-card">
              {submitted ? (
                <div className="success-card">
                  <FaCheck style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block', margin: '0 auto 1rem' }} />
                  <strong>Message sent!</strong> I'll get back to you within 24 hours.
                </div>
              ) : (
                <form className="contact-form" onSubmit={onSubmit}>
                  {[
                    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { name: 'subject', label: 'Subject', type: 'text', placeholder: "What's this about?" },
                  ].map(f => (
                    <div key={f.name} className="form-group">
                      <label className="form-label">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name]}
                        onChange={onChange}
                        placeholder={f.placeholder}
                        className={`form-input ${errors[f.name] ? 'err' : ''}`}
                      />
                      {errors[f.name] && <span className="field-error">{errors[f.name]}</span>}
                    </div>
                  ))}

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`form-textarea ${errors.message ? 'err' : ''}`}
                      rows="5"
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

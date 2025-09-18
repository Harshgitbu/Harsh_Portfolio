import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the following channels:</p>
      <ul>
        <li>Email: <a href="mailto:shahharsh0612@gmail.com">shahharsh0612@gmail.com</a></li>
        <li>Phone: <a href="tel:+19086361325">(908) 636-1325</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/harshshah" target="_blank" rel="noopener noreferrer">linkedin.com/in/harshshah</a></li>
        <li>GitHub: <a href="https://github.com/Harshgitbu" target="_blank" rel="noopener noreferrer">github.com/Harshgitbu</a></li>
      </ul>
    </section>
  );
};

export default Contact;

import React from 'react';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

const SectionWrapper = ({ children, className = '' }) => {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <div
      ref={ref}
      className={`${className} fade-in-section ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
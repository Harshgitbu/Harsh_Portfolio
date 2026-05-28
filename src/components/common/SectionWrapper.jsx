import React from 'react';

const SectionWrapper = ({ children, className = '' }) => {
  return (
    <div className={`section-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default SectionWrapper;

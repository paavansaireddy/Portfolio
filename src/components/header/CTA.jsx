import React from 'react';
import CV from '/Users/paavansai/Downloads/MyPort/src/assets/PaavanaBandi_ResumeSD.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;

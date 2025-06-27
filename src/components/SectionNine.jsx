import React from 'react';
import './SectionNine.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionNine = () => {
  return (
    <section className="section-nine">
      <div className="section-nine-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-nine-content">
        <h2 className="section-nine-title"><span>NEW SECTION</span></h2>
        <p>This is a new section using the s2 background image.</p>
      </div>
    </section>
  );
};

export default SectionNine; 
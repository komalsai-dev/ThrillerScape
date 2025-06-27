import React from 'react';
import './SectionEight.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionEight = () => {
  return (
    <section className="section-eight">
      <div className="section-eight-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-eight-content">
        <h2 className="section-eight-title"><span>NEW SECTION</span></h2>
        <p>This is a new section using the s2 background image.</p>
      </div>
    </section>
  );
};

export default SectionEight; 
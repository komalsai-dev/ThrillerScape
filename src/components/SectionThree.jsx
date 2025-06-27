import React from 'react';
import './SectionThree.css';

const images = [
  'ChatGPT Image Jun 21, 2025, 01_02_42 PM.png',
  'ChatGPT Image Jun 21, 2025, 01_02_44 PM.png',
  'ChatGPT Image Jun 21, 2025, 01_02_46 PM.png',
  'ChatGPT Image Jun 21, 2025, 01_02_50 PM.png',
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="section-three-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-three-content">
        <h2 className="section-three-title"><span>12D SPECIAL EFFECTS CINEMA THEATRE (4D CINEMA)</span></h2>
        <div className="section-three-futureline">
          <svg width="420" height="28" viewBox="0 0 420 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 120,20 130,10 410,10 420,20" stroke="#A9F6FF" strokeWidth="4" fill="none" />
            <circle cx="130" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="410" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="390" cy="10" r="2" fill="#A9F6FF" />
          </svg>
        </div>
        <div className="section-three-image-grid">
          {images.map((img, idx) => (
            <div className="section-three-image-frame" key={img}>
              <img src={process.env.PUBLIC_URL + '/assets/' + encodeURIComponent(img)} alt={`Cinema ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree; 
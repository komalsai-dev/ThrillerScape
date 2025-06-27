import React from 'react';
import './SectionTwo.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionTwo = () => {
  return (
    <section className="section-two">
      <div className="section-two-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-two-content no-card">
        <h2 className="section-two-title"><span>ABOUT US</span></h2>
        <div className="section-two-futureline">
          <svg width="420" height="28" viewBox="0 0 420 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 120,20 130,10 410,10 420,20" stroke="#A9F6FF" strokeWidth="4" fill="none" />
            <circle cx="130" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="410" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="390" cy="10" r="2" fill="#A9F6FF" />
          </svg>
        </div>
        <div className="section-two-accent" />
        <p>
          Welcome to <span className="highlight">Thrillscape Creations</span>, where innovation meets experience in amusement ride manufacturing. With over <span className="highlight">50 years</span> of combined industry experience, our team brings a wealth of knowledge and expertise. For <span className="highlight">four decades</span>, one of our key personnel has been shaping the industry's landscape, with others adding invaluable insight and innovation over a decade.<br /><br />
          At Thrillscape Creations, we pride ourselves on being pioneers, such as being India's first 4D cinema theatre manufacturers. Our portfolio includes state-of-the-art rides like <span className="highlight">VR roller coasters, flying rides, and customized simulators</span>.<br /><br />
          We also offer consultancy services for amusement parks and family entertainment centers, providing guidance to elevate their experiences.<br /><br />
          Our technical strengths enable us to push innovation boundaries, delivering unparalleled experiences.<br /><br />
          Join us at Thrillscape Creations, where imagination meets craftsmanship to create unforgettable experiences!
        </p>
        <img src={process.env.PUBLIC_URL + '/assets/character.png'} alt="Character" className="section-two-character overlap" />
      </div>
    </section>
  );
};

export default SectionTwo; 
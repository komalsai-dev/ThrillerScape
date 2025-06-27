import React from 'react';
import './SectionFive.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionFive = () => {
  return (
    <section className="section-five">
      <div className="section-five-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-five-content">
        <div className="section-five-icon-row">
          <div className="section-five-icon">🎮</div>
          <div className="section-five-icon">⚡</div>
          <div className="section-five-icon">🌐</div>
          <div className="section-five-icon">💫</div>
          <div className="section-five-icon">🔮</div>
        </div>
        <h2 className="section-five-title"><span>THRILLSCAPE</span></h2>
        <div className="section-five-subtitle">
          {Array.from('CREATIONS').map((letter, index) => (
            <span 
              key={index} 
              className="section-five-letter" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: `translateY(${Math.sin(index) * 5}px)`
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="section-five-manufacturer-text">
          <h3>Manufacturers of</h3>
          <h4>SIMULATORS & RIDES!</h4>
        </div>
        <div className="section-five-website">www.thrillscapecreations.in</div>
      </div>
    </section>
  );
};

export default SectionFive; 
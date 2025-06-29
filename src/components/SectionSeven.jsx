import React from 'react';
import './SectionSeven.css';

const attractions = [
  { title: 'HOUSE OF HORRORS', image: 'house-of-horrors.png' },
  { title: 'MIRROR MAZE', image: 'mirror-maze.png' },
  { title: 'ILLUSIONS', image: 'illusions-1.png' },
  { title: 'ILLUSIONS', image: 'illusions-2.png' },
  { title: 'CARNIVAL GAMES', image: 'carnival-games.png' },
  { title: 'SPINNING VORTEX TUNNEL', image: 'spinning-vortex-tunnel.png' }
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionSeven = () => {
  return (
    <section className="section-seven-new">
      <div className="section-seven-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-seven-content-new">
        <div className="section-seven-header-row">
          <div className="section-seven-title">ATTRACTIONS</div>
          <div className="section-seven-logo">THRILLSCAPE <span>CREATIONS</span></div>
        </div>
        <div className="section-seven-attraction-grid">
          {attractions.map((attr, idx) => (
            <div className="section-seven-attraction-card" key={attr.title + idx}>
              <div className="section-seven-attraction-title">{attr.title}</div>
              <div className="section-seven-attraction-frame">
                <img src={process.env.PUBLIC_URL + '/assets/' + attr.image} alt={attr.title} className="section-seven-attraction-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSeven; 
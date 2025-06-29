import React from 'react';
import './SectionEight.css';

const simulators = [
  { title: 'EARTHQUAKE CAFE', image: 'earthquake-cafe.png' },
  { title: 'CAR RACING SIMULATOR', image: 'car-racing-simulator.png' },
  { title: 'CINEMA SIMULATOR RIDE', image: 'cinema-simulator-ride.png' },
  { title: 'DEEP SEA DIVING CONTAINER SIMULATOR', image: 'deep-sea-diving-simulator.png' }
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionEight = () => {
  return (
    <section className="section-eight-new">
      <div className="section-eight-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-eight-content-new">
        <div className="section-eight-header-row">
          <div className="section-eight-title">CUSTOMIZED 3DOF OR 6DOF SIMULATORS</div>
          <div className="section-eight-logo">THRILLSCAPE <span>CREATIONS</span></div>
        </div>
        <div className="section-eight-simulator-grid">
          {simulators.map((sim, idx) => (
            <div className="section-eight-simulator-card" key={sim.title + idx}>
              <div className="section-eight-simulator-title">{sim.title}</div>
              <div className="section-eight-simulator-frame">
                <img src={process.env.PUBLIC_URL + '/assets/' + sim.image} alt={sim.title} className="section-eight-simulator-img" />
              </div>
            </div>
          ))}
        </div>
        <div className="section-eight-description">
          <p>As a manufacturer, we specialize in customizing <b>3Dof or 6Dof simulators</b> to meet a wide range of customer requirements. Whether you need an earthquake simulator, a truck simulator, or a deep-sea diving simulation, we have the expertise to create a tailored solution for your specific needs.</p>
          <p>Our team is dedicated to delivering high-quality simulators that provide an immersive and realistic experience for various entertainment & recreational purposes.</p>
          <p>Our custom simulators are designed to deliver an unparalleled level of realism and performance. With our state-of-the-art technology and extensive customization options, we can bring your simulation ideas to life.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionEight; 
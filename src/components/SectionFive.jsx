import React from 'react';
import './SectionFive.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionFive = () => {
  return (
    <section className="section-five-new">
      <div className="section-five-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-five-content-new">
        <div className="simulator-header-row no-box">
          <div className="simulator-title">FLIGHT SIMULATOR</div>
          <div className="simulator-logo">THRILLSCAPE <span>CREATIONS</span></div>
        </div>
        <div className="simulator-images-row no-box">
          <img src={process.env.PUBLIC_URL + '/assets/flight1.png'} alt="Flight Simulator 1" className="simulator-img" />
          <img src={process.env.PUBLIC_URL + '/assets/flight2.png'} alt="Flight Simulator 2" className="simulator-img" />
        </div>
        <div className="simulator-description no-box">
          Introducing our <span className="highlight-green">Full Motion 6DOF Flight Simulator</span>, now available for public experience in the amusement industry. With unparalleled realism and immersion, prepare to be captivated by breath-taking flying adventures like never before. Our wide range of flight simulators, from Cessna to Boeing, ensures an authentic and thrilling experience for aviation enthusiasts of all levels. Get ready to take to the skies and soar in the most immersive flight simulator available.
        </div>
        <div className="simulator-title car-title">CAR DRIVER TRAINING<br/>SIMULATOR - 6 DOF</div>
        <div className="simulator-images-row no-box">
          <img src={process.env.PUBLIC_URL + '/assets/car1.png'} alt="Car Simulator 1" className="simulator-img" />
          <img src={process.env.PUBLIC_URL + '/assets/car2.png'} alt="Car Simulator 2" className="simulator-img" />
        </div>
        <div className="simulator-description simulator-description-blue no-box">
          The Car Driver Training Simulator 6DoF offers a cutting-edge and immersive experience for individuals looking to improve their driving skills. With its six degrees of freedom (6dof) technology, users can practice various driving scenarios in a highly realistic and interactive setting and enjoy the racing with immersive environment.
        </div>
      </div>
    </section>
  );
};

export default SectionFive; 
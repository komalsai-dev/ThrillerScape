import React from 'react';
import './SectionSix.css';

const cards = [
  {
    title: 'FLIGHT SIMULATOR',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_42 PM.png',
    description: 'Introducing our Full Motion 6DOF Flight Simulator, now available for public experience in the amusement industry. With unparalleled realism and immersion, prepare to be captivated by breath-taking flying adventures like never before. Our wide range of flight simulators, from Cessna to Boeing, ensures an authentic and thrilling experience for aviation enthusiasts of all levels. Get ready to take to the skies and soar in the most immersive flight simulator available.'
  },
  {
    title: 'FLIGHT SIMULATOR (COCKPIT)',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_44 PM.png',
    description: 'Experience the thrill of piloting with our advanced cockpit setup, designed for maximum realism and engagement. Perfect for both training and entertainment, this simulator brings the cockpit environment to life.'
  },
  {
    title: 'CAR DRIVER TRAINING SIMULATOR - 6 DOF',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_46 PM.png',
    description: 'The Car Driver Training Simulator 6Dof offers a cutting-edge and immersive experience for individuals looking to improve their driving skills. With its six degrees of freedom (6dof) technology, users can practice various driving scenarios in a highly realistic and interactive setting and enjoy the racing with immersive environment.'
  },
  {
    title: 'CAR DRIVER TRAINING SIMULATOR (INTERIOR)',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_50 PM.png',
    description: 'Step inside our simulator for a fully immersive driving experience. The interior is designed to replicate real-world conditions, providing feedback and interactivity for effective training.'
  }
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionSix = () => {
  return (
    <section className="section-six">
      <div className="section-six-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-six-content">
        <h2 className="section-six-title"><span>SIMULATOR EXPERIENCES</span></h2>
        <div className="section-six-futureline">
          <svg width="420" height="28" viewBox="0 0 420 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 120,20 130,10 410,10 420,20" stroke="#A9F6FF" strokeWidth="4" fill="none" />
            <circle cx="130" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="410" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="390" cy="10" r="2" fill="#A9F6FF" />
          </svg>
        </div>
        <div className="section-six-card-grid">
          {cards.map((card, idx) => (
            <div className="section-six-card" key={card.title}>
              <div className="section-six-card-frame">
                <img src={process.env.PUBLIC_URL + '/assets/' + encodeURIComponent(card.image)} alt={card.title} />
              </div>
              <div className="section-six-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSix; 
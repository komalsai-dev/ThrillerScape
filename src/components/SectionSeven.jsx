import React from 'react';
import './SectionSeven.css';

const cards = [
  {
    title: 'VR SHOOTING GAME',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_42 PM.png',
    description: `Immerse yourself in the heart-pounding action of our VR shooting game, where every shot feels lifelike and intense. With realistic graphics and responsive gameplay, you'll feel like you're right in the middle of the action. We customize the environment for 2 player or 4 player models.`
  },
  {
    title: 'VR SHOOTING GAME (ARENA)',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_44 PM.png',
    description: 'Experience the thrill of competitive VR shooting in our advanced arena setup, designed for maximum excitement and engagement. Perfect for both casual and competitive players.'
  },
  {
    title: 'VR DARK RIDE',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_46 PM.png',
    description: 'Step into a world of thrilling excitement with our VR Dark Ride experience. Combining state-of-the-art virtual reality technology with the classic immersive journey of a dark ride, this experience promises to take you on an unforgettable adventure like never before.'
  },
  {
    title: 'VR DARK RIDE (FANTASY)',
    image: 'ChatGPT Image Jun 21, 2025, 01_02_50 PM.png',
    description: 'From haunted mansions to alien worlds, the VR Dark Ride offers a wide range of experiences suitable for all thrill-seekers. With sensory effects synchronizing with the VR content, every moment feels more real than ever, creating a fully engaging and immersive escape.'
  }
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionSeven = () => {
  return (
    <section className="section-seven">
      <div className="section-seven-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-seven-content">
        <h2 className="section-seven-title"><span>VR EXPERIENCES</span></h2>
        <div className="section-seven-futureline">
          <svg width="420" height="28" viewBox="0 0 420 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 120,20 130,10 410,10 420,20" stroke="#A9F6FF" strokeWidth="4" fill="none" />
            <circle cx="130" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="410" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="390" cy="10" r="2" fill="#A9F6FF" />
          </svg>
        </div>
        <div className="section-seven-card-grid">
          {cards.map((card, idx) => (
            <div className="section-seven-card" key={card.title}>
              <div className="section-seven-card-frame">
                <img src={process.env.PUBLIC_URL + '/assets/' + encodeURIComponent(card.image)} alt={card.title} />
              </div>
              <div className="section-seven-card-content">
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

export default SectionSeven; 
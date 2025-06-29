import React from 'react';
import './SectionFour.css';

const cards = [
  {
    title: 'VR ROLLER COASTER - 6 DOF',
    image: 'vr-roller-coaster.png', // placeholder, replace with actual image
    description: 'The VR Roller Coaster offers an immersive experience with a 6DOF (Degrees of Freedom) motion platform, diverse tracks, and environments. With high-resolution visuals, realistic motion, and safety features, it guarantees an unforgettable roller coaster adventure.'
  },
  {
    title: 'VR CINEMA RIDE - 7DOF',
    image: 'vr-cinema-ride.png', // placeholder, replace with actual image
    description: 'The VR Roller Coaster is an immersive experience that utilizes cutting-edge technology and a 6DOF (Degrees of Freedom) motion platform for thrilling rides. Users can select from diverse tracks and environments, enjoying high-resolution visuals and realistic motion. With a focus on safety, this Suspended Roller Coaster promises an unforgettable adventure.'
  },
  {
    title: 'VR FLYING RIDE',
    image: 'vr-flying-ride.png', // placeholder, replace with actual image
    description: 'VR Flying Ride experiences offer users the thrill of soaring through virtual environments with 6DOF technology. With 360-degree immersion, users can fly over landscapes, canyons, or landmarks. Sensations of wind, elements like mist, and lifelike experiences provide an exhilarating and lifelike ride. Available with 6DOF or 3DOF motion platforms, VR Flying Rides offer excitement and wonder as users explore virtual worlds.'
  },
  {
    title: 'VR & NON-VR CAR SIMULATOR',
    image: 'vr-car-simulator.jpg', // placeholder, replace with actual image
    description: 'Get your heart racing with our single-seat VR Racing Car Simulator, offering an adrenaline-pumping experience as you speed through realistic VR tracks, with 2DOF (Degrees of Freedom) motion technology. Enjoy a fully immersive ride, enhanced as you feel every force, vibration, and drift, all while speeding through the circuits and leaving your competitors in the dust.'
  }
];

const s2Bg = encodeURIComponent('s2 background.png');

const SectionFour = () => {
  return (
    <section className="section-four">
      <div className="section-four-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-four-content">
        <h2 className="section-four-title"><span>OUR PRODUCTS</span></h2>
        <div className="section-four-futureline">
          <svg width="420" height="28" viewBox="0 0 420 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 120,20 130,10 410,10 420,20" stroke="#A9F6FF" strokeWidth="4" fill="none" />
            <circle cx="130" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="410" cy="10" r="3" fill="#A9F6FF" />
            <circle cx="390" cy="10" r="2" fill="#A9F6FF" />
          </svg>
        </div>
        <div className="section-four-card-grid">
          {cards.map((card, idx) => (
            <div
              className={`section-four-card ${idx % 2 === 1 ? 'reverse' : ''}`}
              key={card.title}
            >
              <div className="section-four-card-frame">
                <img src={process.env.PUBLIC_URL + '/assets/' + card.image} alt={card.title} />
              </div>
              <div className="section-four-card-content">
                <h3>
                  {card.title.split(' ').map((word, i) =>
                    i === 0 ? <span key={i} className="highlight">{word} </span> : word + ' '
                  )}
                </h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour; 
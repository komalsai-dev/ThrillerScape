import React from 'react';
import './SectionSix.css';

const s2Bg = encodeURIComponent('s2 background.png');

const SectionSix = () => {
  return (
    <section className="section-six-new">
      <div className="section-six-bg" style={{ background: `url(${process.env.PUBLIC_URL + '/assets/' + s2Bg}) no-repeat center center/cover` }} />
      <div className="section-six-content-new">
        {/* VR Shooting Game Block */}
        <div className="simulator-header-row no-box">
          <div className="simulator-title">VR SHOOTING GAME</div>
          <div className="simulator-logo">THRILLSCAPE <span>CREATIONS</span></div>
        </div>
        <div className="simulator-images-row no-box">
          <img src={process.env.PUBLIC_URL + '/assets/vr-shooting-1.png'} alt="VR Shooting 1" className="simulator-img" />
          <img src={process.env.PUBLIC_URL + '/assets/vr-shooting-2.png'} alt="VR Shooting 2" className="simulator-img" />
        </div>
        <div className="simulator-description no-box">
          Immerse yourself in the heart-pounding action of our VR shooting game, where every shot feels lifelike and intense. With realistic graphics and responsive gameplay, you'll feel like you're right in the middle of the action. We customize the environment for 2 player or 4 player Models.
        </div>
        {/* VR Dark Ride Block */}
        <div className="simulator-title car-title">VR DARK RIDE</div>
        <div className="simulator-images-row no-box">
          <img src={process.env.PUBLIC_URL + '/assets/vr-dark-1.png'} alt="VR Dark Ride 1" className="simulator-img" />
          <img src={process.env.PUBLIC_URL + '/assets/vr-dark-2.png'} alt="VR Dark Ride 2" className="simulator-img" />
        </div>
        <div className="simulator-description simulator-description-blue no-box">
          Step into a world of thrilling excitement with our <span className="highlight-green">VR Dark Ride experience</span>. Combining state-of-the-art virtual reality technology with the classic immersive journey of a dark ride, this experience promises to take you on a unforgettable adventure like never before.<br/><br/>
          As you don your VR headset, you'll find yourself transported to different realms and landscapes, each filled with mesmerizing visuals and heart-pounding scenarios. Feel the G-forces as you twist and turn through fantastical environments, all while seated comfortably in the ride vehicle.<br/><br/>
          From haunted mansions to alien worlds, the VR Dark Ride offers a wide range of experiences suitable for all thrill-seekers. With sensory effects synchronizing with the VR content, every moment feels more real than ever, creating a fully engaging and awe-inspiring escapade. Get ready to explore new worlds, face daring challenges, and immerse yourself in the magic of our VR Dark Ride.
        </div>
      </div>
    </section>
  );
};

export default SectionSix; 
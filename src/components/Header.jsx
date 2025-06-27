import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/home-bg.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img 
        src={process.env.PUBLIC_URL + '/assets/ChatGPT Image Jun 21, 2025, 12_49_49 PM.png'} 
        alt="Hero Overlay" 
        className="header-overlay-image"
      />
      <div className="icon-row">
        <div className="icon">🎮</div>
        <div className="icon">⚡</div>
        <div className="icon">🌐</div>
        <div className="icon">💫</div>
        <div className="icon">🔮</div>
      </div>
      <h1 className="title">THRILLSCAPE</h1>
      <div className="subtitle">
        {Array.from('CREATIONS').map((letter, index) => (
          <span 
            key={index} 
            className="letter" 
            style={{ 
              animationDelay: `${index * 0.1}s`,
              transform: `translateY(${Math.sin(index) * 5}px)`
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="manufacturer-text">
        <h2>Manufacturers of</h2>
        <h3>SIMULATORS & RIDES!</h3>
      </div>
      <div className="website">www.thrillscapecreations.in</div>
    </header>
  );
};

export default Header; 
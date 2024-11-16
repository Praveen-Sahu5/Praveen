import React from 'react';
import './Hero.css';
import logo from '../Assets/logoP.png';
import heroImage from '../Assets/hero-image.png';

const Hero = () => {
  return (
    <div className="hero">
      <header className="hero-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-info">
          <span>📧 hr@conative.in</span>
          <span>📧 info@conative.in</span>
          <span>📞 +91-8269788173</span>
        </div>
        <div className="menu-buttons">
          <button>Our Work</button>
          <button>Menu</button>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-left">
          <h2>We Believe In</h2>
          <h1>Passion</h1>
          <p>
            We offer the best web development services and are committed to
            providing quick solutions to our customer's problems.
          </p>
          <div className="hero-buttons">
            <button className="start-project">Start A Project</button>
            <button className="grow-career">Grow Career With Us</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

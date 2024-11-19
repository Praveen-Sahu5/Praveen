import React, { useState, useEffect } from 'react';
import './Hero.css';
import logo from '../Assets/logoP.png';
import heroImage from '../Assets/hero-image.png';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.className === 'overlay') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero">
      <header className="hero-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-info">
          <span>📧 hr@YashiITServices.in</span>
          <span>📧 info@YashiITServices.in</span>
          <span>📞 +91-8269788173</span>
        </div>
        <div className="menu-buttons">
          <button>Our Work</button>
          <div className="menu-icon" onClick={toggleMenu}>
            <span className={`bar ${isMenuOpen ? 'bar1' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'bar2' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'bar3' : ''}`}></span>
          </div>
        </div>
      </header>

      
      {isMenuOpen && (
        <div className="overlay">
          <div className="menu-dropdown">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      )}

      <div className="hero-content">
        <div className="hero-left">
          <h1>CODE, CREATE, CONQUER</h1>
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

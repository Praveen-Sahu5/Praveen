import React, { useState, useEffect, useRef } from 'react';
import './Main.css';

const Main = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const bulletPointsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = bulletPointsRef.current.getBoundingClientRect();
      if (rect.left < 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="heading">We are a</div>
        <h1 className="tech-company">Tech Company</h1>
      </div>
      <div className="paragraph">
        <p>
          Yashi IT Solutions has worked with various businesses and organizations to provide instant services and web solutions that enable clients to quickly reconfigure and develop new business potential.
        </p>
        <ul className={`bullet-points ${isScrolling ? 'scrolling' : ''}`} ref={bulletPointsRef}>
          <li><span className="bullet-point-symbol">.</span>Learning Ambience</li>
          <li><span className="bullet-point-symbol">.</span>Building Relationships</li>
          <li><span className="bullet-point-symbol">.</span>Client Satisfaction</li>
          <li><span className="bullet-point-symbol">.</span>Brand Exposure</li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
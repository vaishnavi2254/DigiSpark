import React from 'react';
import './HeroSection.css';
import heroGraphic from '../assets/hero-graphic.png';

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>We Grow Your Brand Online</h1>
          <p>
            Innovative digital marketing strategies that drive results and transform your business presence online.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Consultation</button>
            <button className="btn-secondary">Our Services</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroGraphic} alt="Digital Marketing Illustration" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

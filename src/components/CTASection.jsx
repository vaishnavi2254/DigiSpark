import React from 'react';
import './CTASection.css';

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready to Grow Your Business?</h2>
        <p>Contact DigiSpark today and let's make your brand shine online!</p>
        <a href="/contact" className="cta-button">Get In Touch</a>
      </div>
    </section>
  );
}

export default CTASection;

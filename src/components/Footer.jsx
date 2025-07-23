import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>DigiSpark</h3>
          <p>
            Igniting digital growth for businesses worldwide through innovative marketing strategies.
          </p>
          <div className="social-icons">
            <a href="#"><span>🌐</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>📸</span></a>
            <a href="#"><span>💼</span></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Social Media Marketing</a></li>
            <li><a href="#">Google Ads</a></li>
            <li><a href="#">Content Marketing</a></li>
            <li><a href="#">Branding</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📍 123 Marketing Street, Digital City, 10001</p>
          <p>✉️ hello@digispark.com</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 DigiSpark. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

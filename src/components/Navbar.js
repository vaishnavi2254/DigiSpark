import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo"><span className="blue">Digi</span><span className="orange">Spark</span></div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <button className="get-started">Get Started</button>
      </nav>
    </header>
  );
}

export default Navbar;

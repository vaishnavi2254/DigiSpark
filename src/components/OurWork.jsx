import React from 'react';
import './OurWork.css';

import research from '../assets/research.png';
import strategy from '../assets/strategy.png';
import launch from '../assets/launch.png';

const OurWork = () => {
  return (
    <section className="our-work">
      <h2 className="our-work-title">Our Work</h2>
      <p className="our-work-subtitle">
        Check out some of our recent projects and success stories.
      </p>

      <div className="work-images">
        <img src={research} alt="research" />
        <img src={strategy} alt="strategy" />
        <img src={launch} alt="launch" />
      </div>

      <button className="view-projects-btn">View All Projects</button>
    </section>
  );
};

export default OurWork;

import React from 'react';
import './WhyChooseUs.css';

// import analyticsIcon from '../assets/analytics.svg';
// import teamIcon from '../assets/team.svg';
// import strategyIcon from '../assets/strategy.svg';
// import deliveryIcon from '../assets/delivery.svg';

const features = [
  {
    title: 'Data-Driven Approach',
    desc: 'We base all strategies on solid analytics and measurable results.',
    // icon: analyticsIcon,
  },
  {
    title: 'Expert Team',
    desc: 'Our specialists have years of experience across all digital marketing disciplines.',
    // icon: teamIcon,
  },
  {
    title: 'Customized Strategies',
    desc: 'We create tailored solutions that align with your unique business goals.',
    // icon: strategyIcon,
  },
  {
    title: 'Timely Delivery',
    desc: 'We respect deadlines and deliver projects on time, every time.',
    // icon: deliveryIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why Choose DigiSpark</h2>
      <p className="why-subtitle">
        We’re not just another marketing agency. Here’s what sets us apart.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {/* <img src={feature.icon} alt={feature.title} /> */}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

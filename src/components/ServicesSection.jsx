import React from 'react';
import './ServicesSection.css';

import { ReactComponent as SeoIcon } from '../assets/seo.svg';
import { ReactComponent as SmmIcon } from '../assets/smm.svg';
import { ReactComponent as GoogleAdsIcon } from '../assets/googleads.svg';
import { ReactComponent as ContentIcon } from '../assets/content.svg';
import { ReactComponent as BrandingIcon } from '../assets/branding.svg';

const services = [
  {
    title: 'Search Engine Optimization',
    desc: 'Boost your visibility with our data-driven SEO strategies that improve rankings.',
    Icon: SeoIcon,
  },
  {
    title: 'Social Media Marketing',
    desc: 'Engage your audience and build brand loyalty across all social platforms.',
    Icon: SmmIcon,
  },
  {
    title: 'Google Ads',
    desc: 'Targeted PPC campaigns that maximize ROI and drive quality traffic.',
    Icon: GoogleAdsIcon,
  },
  {
    title: 'Content Marketing',
    desc: 'Compelling content that tells your story and connects with customers.',
    Icon: ContentIcon,
  },
  {
    title: 'Branding',
    desc: 'Develop a distinctive brand identity that resonates with your audience.',
    Icon: BrandingIcon,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Digital Marketing Services</h2>
      <p className="section-subtitle">
        Comprehensive solutions tailored to elevate your online presence and drive measurable results.
      </p>

      <div className="services-grid">
        {services.map((service, idx) => {
          const Icon = service.Icon;
          return (
            <div className="service-card" key={idx}>
              <div className="icon-wrapper">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

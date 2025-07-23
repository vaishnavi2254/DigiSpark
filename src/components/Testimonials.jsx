import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <p className="testimonial-subtitle">
        Don’t just take our word for it. Hear from businesses we’ve helped grow.
      </p>

      <div className="testimonial-slider">
        <input type="radio" name="slider" id="slide1" defaultChecked />
        <input type="radio" name="slider" id="slide2" />
        <input type="radio" name="slider" id="slide3" />

        <div className="slides">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "DigiSpark completely transformed our online presence. Their SEO strategy increased our organic traffic by 200% in just three months."
            </p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael" />
              <div>
                <strong>Michael Johnson</strong>
                <small>CEO, TechNova</small>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "The social media campaign they created for us generated incredible engagement. Our followers increased by 5K in just two weeks!"
            </p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah" />
              <div>
                <strong>Sarah Williams</strong>
                <small>Marketing Director, Bloom Retail</small>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p>
              "DigiSpark’s Google Ads campaign delivered a 300% ROI. Their team is responsive, professional, and truly understands our business needs."
            </p>
            <div className="client-info">
              <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="David" />
              <div>
                <strong>David Chen</strong>
                <small>Founder, Innovate Solutions</small>
              </div>
            </div>
          </div>
        </div>

        <div className="dots">
          <label htmlFor="slide1"></label>
          <label htmlFor="slide2"></label>
          <label htmlFor="slide3"></label>
        </div>
      </div>
    </section>
  );
}

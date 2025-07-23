import React from 'react';
import './NewsletterSubscribe.css';

export default function NewsletterSubscribe() {
  return (
    <section className="newsletter-container">
      <h2 className="newsletter-title">Stay Updated with Digital Trends</h2>
      <p className="newsletter-subtitle">
        Subscribe to our newsletter for the latest marketing tips, industry insights, and exclusive offers.
      </p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter-input"
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
      <p className="newsletter-privacy">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </section>
  );
}

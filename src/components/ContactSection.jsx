import React from 'react';
import './ContactSection.css';

export default function ContactSection() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-form">
                    <h2>Ready to Grow Your Business?</h2>
                    <p>
                        Schedule a free consultation with our experts to discuss your digital marketing needs.
                    </p>
                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" />
                        <label>Message</label>
                        <textarea placeholder="Tell us about your project" rows="4"></textarea>
                        <button type="submit">Get Free Consultation</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>📍Address</strong><br />123 Marketing Street, Digital City, 10001</p>
                    <p><strong>✉️ Email</strong><br />hello@digispark.com</p>
                    <p><strong>📞 Phone</strong><br />+1 (555) 123-4567</p>
                    <div className="social-icons">
                        <a href="www.google.com"><span>🌐</span></a>
                        <a href="www.twitter.com"><span>🐦</span></a>
                        <a href="www.instagram.com"><span>📸</span></a>
                        <a href="www.likedin.com"><span>💼</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

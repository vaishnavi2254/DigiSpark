import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_user_id'
    ).then(
      (result) => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
      }
    );
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

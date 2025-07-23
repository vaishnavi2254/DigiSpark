
import React from 'react';
import './Testimonials.css';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

function Testimonials() {
    const testimonials = [
        {
            name: 'Riya Sharma',
            role: 'Startup Founder',
            message:
                'DigiSpark helped us triple our traffic in just 3 months. Their strategy is brilliant!',
            avatar: avatar1,
        },
        {
            name: 'Amit Khanna',
            role: 'E-commerce Owner',
            message:
                'Very professional team! Great communication and real measurable results.',
            avatar: avatar2,
        },
        {
            name: 'Sneha Verma',
            role: 'Marketing Manager',
            message:
                'Our brand visibility skyrocketed. Their SEO and social campaigns truly deliver.',
            avatar: avatar3,
        },
    ];

    return (
        <section className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <img src={testimonial.avatar} alt={testimonial.name} />
                        <p className="message">“{testimonial.message}”</p>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;

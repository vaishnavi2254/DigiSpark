import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs  from '../components/WhyChooseUs';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ContactSection from '../components/ContactSection';


function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <OurWork />
            <Testimonials />
            <NewsletterSubscribe />
            <ContactSection />
        </div>
    );
}

export default Home;

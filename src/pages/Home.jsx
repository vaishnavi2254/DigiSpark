import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs  from '../components/WhyChooseUs';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

function Home() {
    return (
        <div>
            <HeroSection />
            <ServicesSection />
            <WhyChooseUs />
            <OurWork />
            <Testimonials />
            <CTASection />
        </div>
    );
}

export default Home;

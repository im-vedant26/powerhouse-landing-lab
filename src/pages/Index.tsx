
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Power House Gym - Unleash Your Strength';
    
    // You could add more meta tags here if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Power House Gym offers state-of-the-art fitness facilities, expert personal training, and diverse group classes to help you achieve your fitness goals.');
    }
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
    </MainLayout>
  );
};

export default Index;

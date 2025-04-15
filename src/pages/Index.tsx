
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import OfferingsSection from '@/components/OfferingsSection';
import SolutionsSection from '@/components/SolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import VideoShowcase from '@/components/VideoShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <VideoShowcase />
        <OfferingsSection />
        <SolutionsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

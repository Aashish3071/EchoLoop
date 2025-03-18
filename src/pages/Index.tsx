
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ContentCreation from '@/components/home/ContentCreation';
import CommunitySection from '@/components/home/CommunitySection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ContentCreation />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ContentCreation from '@/components/home/ContentCreation';
import CommunitySection from '@/components/home/CommunitySection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Show welcome toast when the page loads
    toast({
      title: "Welcome to Echo Collective",
      description: "Your community-driven platform for growth and collaboration.",
    });
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

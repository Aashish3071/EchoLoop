
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0);
      const translateY = scrollPosition * 0.3;
      
      heroRef.current.style.opacity = String(opacity);
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-echo-light-blue/10 via-white to-white z-0" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-echo-purple/10 rounded-full filter blur-3xl animate-pulse-soft z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-echo-blue/10 rounded-full filter blur-3xl animate-pulse-soft z-0" style={{ animationDelay: '1s' }} />
      
      <div ref={heroRef} className="echo-container relative z-10 transition-all duration-300 ease-out">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-echo-blue/10 text-echo-blue">
              Reimagining social learning
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-echo-black animate-slide-up text-balance">
            Learn, Create, and Grow Together
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-echo-gray animate-slide-up animation-delay-100 text-balance max-w-2xl mx-auto">
            A social learning platform powered by psychology and AI to help you build lasting skills through community.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
            <Button 
              asChild
              size="lg" 
              className="rounded-xl bg-echo-blue hover:bg-echo-blue/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Link to="/explore">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="rounded-xl border-echo-gray/20 hover:bg-echo-light-gray px-8 py-6 text-lg transition-all"
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Preview mockup */}
        <div className="mt-16 relative mx-auto max-w-5xl animate-blur-in animation-delay-300">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-echo-gray/10 bg-white shadow-2xl">
            <div className="relative w-full h-full bg-echo-light-gray overflow-hidden">
              {/* Dashboard preview mock */}
              <div className="absolute inset-0 p-4 flex flex-col">
                <div className="h-14 bg-white rounded-xl mb-4 flex items-center px-4">
                  <div className="w-32 h-6 bg-echo-gray/10 rounded-md"></div>
                  <div className="ml-auto flex space-x-2">
                    <div className="w-8 h-8 bg-echo-gray/10 rounded-full"></div>
                    <div className="w-8 h-8 bg-echo-blue/20 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1 flex gap-4">
                  <div className="w-64 bg-white rounded-xl p-4 flex flex-col">
                    <div className="w-full h-6 bg-echo-gray/10 rounded-md mb-4"></div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={cn("w-full h-10 rounded-lg mb-2", i === 1 ? "bg-echo-blue/20" : "bg-echo-gray/10")}></div>
                    ))}
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white rounded-xl p-4 flex flex-col">
                        <div className="w-full h-32 bg-echo-gray/10 rounded-lg mb-4"></div>
                        <div className="w-2/3 h-5 bg-echo-gray/10 rounded-md mb-2"></div>
                        <div className="w-1/2 h-4 bg-echo-gray/10 rounded-md"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -bottom-10 -left-10 w-64 h-32 glass-card rounded-xl p-4 animate-slide-up animation-delay-400 shadow-xl">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-echo-purple/20 rounded-md"></div>
              <div className="ml-3">
                <div className="w-20 h-4 bg-echo-gray/20 rounded-sm"></div>
                <div className="w-16 h-3 bg-echo-gray/10 rounded-sm mt-1"></div>
              </div>
              <div className="ml-auto w-12 h-6 bg-echo-blue/20 rounded-full"></div>
            </div>
            <div className="h-4 bg-echo-gray/10 rounded-sm mb-2"></div>
            <div className="h-4 w-3/4 bg-echo-gray/10 rounded-sm"></div>
          </div>
          
          <div className="absolute -top-8 right-10 w-48 glass-card rounded-xl p-4 animate-slide-down animation-delay-600 shadow-xl">
            <div className="flex space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={cn("w-6 h-6 rounded-md", i <= 3 ? "bg-echo-blue/30" : "bg-echo-gray/20")}></div>
              ))}
            </div>
            <div className="h-4 bg-echo-gray/10 rounded-sm mb-2"></div>
            <div className="h-4 w-3/4 bg-echo-gray/10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Brain, Users, Trophy, Infinity, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Install framer-motion
import { lov-add-dependency } from "framer-motion@latest";
import { lov-add-dependency } from "react-intersection-observer@latest";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-white rounded-2xl p-6 shadow-sm border border-echo-gray/10 flex flex-col h-full hover-lift"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-echo-blue/10 text-echo-blue mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-echo-gray text-base flex-grow">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Psychology-Driven",
      description: "Using proven psychological principles like the IKEA Effect and Benjamin Franklin Effect to drive engagement and retention."
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI Personalization",
      description: "Our AI engine curates content based on your interests while ensuring cognitive diversity to avoid echo chambers."
    },
    {
      icon: <Users size={24} />,
      title: "Community-Focused",
      description: "Peer reviews and community challenges create accountability and foster deeper connections through learning."
    },
    {
      icon: <Trophy size={24} />,
      title: "Gamified Progress",
      description: "Track your learning with streaks, badges, and milestones to celebrate achievements and build lasting habits."
    },
    {
      icon: <Check size={24} />,
      title: "Content Creation",
      description: "Create engaging short videos, quizzes, or mind maps using our AI-powered templates to share knowledge."
    },
    {
      icon: <Infinity size={24} />,
      title: "Lifelong Learning",
      description: "Our platform encourages continuous growth and skill-building through regular engagement and practice."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleControls = useAnimation();

  useEffect(() => {
    if (inView) {
      titleControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1] 
        }
      });
    }
  }, [inView, titleControls]);

  return (
    <section className="py-24 bg-echo-light-gray">
      <div className="echo-container">
        <div ref={ref} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={titleControls}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-echo-purple/10 text-echo-purple"
          >
            Key Features
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={titleControls}
            className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-echo-black text-balance"
          >
            What Makes EchoLoop Different
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={titleControls}
            className="mt-4 text-lg text-echo-gray text-balance"
          >
            Our platform combines psychological principles, AI personalization, and community engagement to create a truly unique learning experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

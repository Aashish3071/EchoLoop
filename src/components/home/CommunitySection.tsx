
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, TrendingUp, MessageCircle, Heart, ThumbsUp } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CommunitySection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const challenges = [
    {
      title: "30 Days of Python",
      description: "Master Python basics in just 30 days with daily challenges",
      participants: 1248,
      icon: <Award className="w-6 h-6 text-echo-blue" />,
      color: "bg-echo-blue/10"
    },
    {
      title: "UX Design Sprint",
      description: "Improve your UX skills with this 2-week intensive challenge",
      participants: 856,
      icon: <TrendingUp className="w-6 h-6 text-echo-purple" />,
      color: "bg-echo-purple/10"
    },
    {
      title: "Public Speaking Mastery",
      description: "Overcome your fear of public speaking with daily exercises",
      participants: 624,
      icon: <Users className="w-6 h-6 text-echo-pink" />,
      color: "bg-echo-pink/10"
    }
  ];

  const userAvatars = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-echo-light-gray">
      <div className="echo-container">
        <motion.div 
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex-1">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-echo-indigo/10 text-echo-indigo">
              Community Learning
            </span>
            
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-echo-black text-balance">
              Learn Better Together Through Community Challenges
            </h2>
            
            <p className="mt-4 text-lg text-echo-gray">
              Join group-based challenges to boost accountability, share insights, and celebrate achievements together with like-minded learners.
            </p>
            
            <div className="mt-8 space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div 
                  custom={index}
                  variants={cardVariants}
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-echo-gray/10 p-5 hover-lift"
                >
                  <div className="flex items-center">
                    <div className={cn("flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center", challenge.color)}>
                      {challenge.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-lg">{challenge.title}</h3>
                      <p className="text-echo-gray text-sm">{challenge.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {userAvatars.slice(0, 3).map((avatar, i) => (
                        <Avatar key={i} className="border-2 border-white w-8 h-8">
                          <img src={avatar} alt="User avatar" />
                        </Avatar>
                      ))}
                      {challenge.participants > 3 && (
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-echo-light-gray border-2 border-white text-xs font-medium">
                          +{challenge.participants - 3}
                        </div>
                      )}
                    </div>
                    
                    <span className="text-sm text-echo-gray">
                      {challenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <Button 
                asChild
                size="lg" 
                className="rounded-xl bg-echo-indigo hover:bg-echo-indigo/90 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link to="/challenges">
                  Browse All Challenges
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:flex-1 w-full"
          >
            <div className="relative max-w-[500px] mx-auto">
              {/* Challenge leaderboard */}
              <div className="bg-white rounded-2xl shadow-xl border border-echo-gray/10 overflow-hidden">
                <div className="bg-echo-indigo p-6 text-white">
                  <h3 className="text-xl font-semibold">30 Days of Python</h3>
                  <p className="text-white/80 text-sm">Community Challenge</p>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {userAvatars.map((avatar, i) => (
                        <Avatar key={i} className="border-2 border-white w-8 h-8">
                          <img src={avatar} alt="User avatar" />
                        </Avatar>
                      ))}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      Day 18 of 30
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-medium text-echo-black mb-4">Leaderboard</h4>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((position) => (
                      <div key={position} className="flex items-center p-3 bg-echo-light-gray/50 rounded-xl">
                        <div className="font-semibold text-lg w-6">{position}</div>
                        <Avatar className="ml-2 border-2 border-white">
                          <img src="/placeholder.svg" alt="User avatar" />
                        </Avatar>
                        <div className="ml-3 flex-1">
                          <div className="font-medium">User Name</div>
                          <div className="text-sm text-echo-gray">18/30 days completed</div>
                        </div>
                        <div className="bg-echo-indigo/10 text-echo-indigo px-2 py-1 rounded-lg text-sm font-medium">
                          {(position === 1 ? "96" : position === 2 ? "84" : "72")} pts
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-echo-light-gray/30 rounded-xl">
                    <h4 className="font-medium text-echo-black mb-3">Today's Challenge</h4>
                    <p className="text-echo-gray text-sm mb-4">Build a simple web scraper with Python and BeautifulSoup</p>
                    <div className="flex space-x-3">
                      <div className="flex items-center text-sm text-echo-gray">
                        <Heart className="w-4 h-4 mr-1" />
                        24
                      </div>
                      <div className="flex items-center text-sm text-echo-gray">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        12
                      </div>
                      <div className="flex items-center text-sm text-echo-gray">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        36
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-10 -right-10 glass-card rounded-xl shadow-lg p-4 bg-white/80 backdrop-blur-sm border border-white/20 w-56">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-echo-light-blue flex items-center justify-center text-white">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Python Expert</div>
                    <div className="text-xs text-echo-gray">Badge Earned</div>
                  </div>
                </div>
                <div className="h-1.5 bg-echo-gray/10 rounded-full">
                  <div className="h-full w-3/4 bg-echo-light-blue rounded-full"></div>
                </div>
                <div className="mt-2 flex justify-between items-center text-xs">
                  <span className="text-echo-gray">Level Progress</span>
                  <span className="font-medium">75%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;

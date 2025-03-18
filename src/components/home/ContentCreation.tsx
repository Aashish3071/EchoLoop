
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Video, PenTool, VideoIcon, CheckCircle, Clock, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContentCreation = () => {
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

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="echo-container">
        <motion.div 
          ref={containerRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex-1">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-echo-pink/10 text-echo-pink">
              Content Creation
            </span>
            
            <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-echo-black text-balance">
              Create Engaging Learning Content in Minutes
            </h2>
            
            <p className="mt-4 text-lg text-echo-gray">
              Our AI-powered templates make it easy to create high-quality videos, quizzes, and mind maps to share your knowledge with the community.
            </p>
            
            <div className="mt-8 space-y-4">
              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-3"
              >
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-echo-blue/10 text-echo-blue">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-echo-black">AI-Powered Templates</h3>
                  <p className="text-echo-gray">Start with professionally designed templates that you can customize to fit your style.</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-3"
              >
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-echo-blue/10 text-echo-blue">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-echo-black">Built-In Feedback System</h3>
                  <p className="text-echo-gray">Get constructive feedback from peers to improve your content and earn Karma Points.</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start space-x-3"
              >
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-echo-blue/10 text-echo-blue">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h3 className="font-medium text-echo-black">Track Your Impact</h3>
                  <p className="text-echo-gray">See how your content is helping others learn and grow with detailed analytics.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-10">
              <Button 
                asChild
                size="lg" 
                className="rounded-xl bg-echo-blue hover:bg-echo-blue/90 text-white px-8 py-6 text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link to="/create">
                  Start Creating
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="lg:flex-1 w-full h-full"
          >
            <div className="relative h-[500px] w-full max-w-[500px] mx-auto">
              {/* Main content editor mockup */}
              <div className="absolute top-0 left-0 right-0 w-full h-[400px] bg-white rounded-2xl shadow-xl border border-echo-gray/10 overflow-hidden">
                <div className="h-12 bg-echo-black flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-echo-pink"></div>
                    <div className="w-3 h-3 rounded-full bg-echo-blue"></div>
                    <div className="w-3 h-3 rounded-full bg-echo-purple"></div>
                  </div>
                  <div className="mx-auto bg-echo-gray/20 rounded-full text-sm text-white px-4 py-1">
                    Content Creator
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex mb-4 gap-2">
                    <div className="flex-1 h-10 bg-echo-blue/10 rounded-lg flex items-center justify-center text-echo-blue text-sm">
                      Video
                    </div>
                    <div className="flex-1 h-10 bg-echo-gray/10 rounded-lg flex items-center justify-center text-echo-gray text-sm">
                      Quiz
                    </div>
                    <div className="flex-1 h-10 bg-echo-gray/10 rounded-lg flex items-center justify-center text-echo-gray text-sm">
                      Mind Map
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-10 bg-echo-gray/10 rounded-lg mb-2"></div>
                    <div className="h-32 bg-echo-gray/5 rounded-lg border-2 border-dashed border-echo-gray/20 flex flex-col items-center justify-center">
                      <VideoIcon size={32} className="text-echo-gray/40 mb-2" />
                      <span className="text-sm text-echo-gray/60">Drop your video here</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-6 bg-echo-gray/10 rounded-lg w-1/3 mb-2"></div>
                    <div className="h-24 bg-echo-gray/5 rounded-lg border border-echo-gray/10 p-3">
                      <div className="h-4 bg-echo-gray/10 rounded w-full mb-2"></div>
                      <div className="h-4 bg-echo-gray/10 rounded w-4/5 mb-2"></div>
                      <div className="h-4 bg-echo-gray/10 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="h-10 w-24 bg-echo-blue rounded-lg flex items-center justify-center text-white text-sm">
                      Publish
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute bottom-0 right-10 w-64 h-36 glass-card rounded-xl shadow-lg p-4 bg-white/80 backdrop-blur-sm border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-echo-purple rounded-full flex items-center justify-center text-white">
                    <BarChart size={16} />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">Content Stats</div>
                    <div className="text-xs text-echo-gray">Last 7 days</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-echo-light-gray/50 rounded-lg p-2">
                    <div className="text-sm text-echo-gray">Views</div>
                    <div className="text-lg font-semibold">1,234</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-lg p-2">
                    <div className="text-sm text-echo-gray">Likes</div>
                    <div className="text-lg font-semibold">56</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-lg p-2">
                    <div className="text-sm text-echo-gray">Comments</div>
                    <div className="text-lg font-semibold">23</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-lg p-2">
                    <div className="text-sm text-echo-gray">Shares</div>
                    <div className="text-lg font-semibold">7</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-5 top-16 w-36 glass-card rounded-xl shadow-lg p-3 bg-white/80 backdrop-blur-sm border border-white/20 flex flex-col items-center">
                <Clock size={20} className="text-echo-pink mb-1" />
                <div className="text-xs text-center">Avg. completion time</div>
                <div className="text-base font-semibold">3:24</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentCreation;

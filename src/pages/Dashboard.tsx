
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  BookOpen, 
  Award, 
  Users, 
  Clock, 
  BarChart3, 
  ArrowUpRight, 
  Video,
  FileText,
  Network,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';
import StreakCounter from '@/components/ui/streak-counter';
import BadgeCustom from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Dashboard = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-echo-light-gray">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="echo-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            {/* Header with user info and stats */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-echo-black">Welcome back, User</h1>
                  <p className="text-echo-gray mt-1">Track your progress and continue learning</p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <StreakCounter days={7} />
                  <div className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm">
                    <Award className="w-4 h-4 text-echo-blue mr-1.5" />
                    <span className="text-sm font-medium">256 Karma Points</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Current challenges */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-echo-black">Your Active Challenges</h2>
                <Link to="/challenges" className="text-echo-blue hover:text-echo-blue/80 text-sm font-medium flex items-center">
                  View all
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "Python for Data Science",
                    progress: 68,
                    days: "Day 17 of 30",
                    icon: <Rocket className="w-5 h-5" />,
                    color: "text-echo-blue"
                  },
                  {
                    title: "UX Research Fundamentals",
                    progress: 42,
                    days: "Day 8 of 20",
                    icon: <FileText className="w-5 h-5" />,
                    color: "text-echo-purple"
                  },
                  {
                    title: "Public Speaking Mastery",
                    progress: 24,
                    days: "Day 6 of 14",
                    icon: <Users className="w-5 h-5" />,
                    color: "text-echo-pink"
                  }
                ].map((challenge, index) => (
                  <Card key={index} className="p-5" hoverEffect>
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${challenge.color.replace('text-', 'bg-')}`}>
                        {challenge.icon}
                      </div>
                      <div className="ml-3 flex-1">
                        <h3 className="font-medium">{challenge.title}</h3>
                        <p className="text-echo-gray text-sm">{challenge.days}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="h-2 bg-echo-gray/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${challenge.color.replace('text-', 'bg-')}`}
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 flex justify-between items-center text-sm">
                        <span className="text-echo-gray">Progress</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-echo-gray/10">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full bg-echo-light-gray hover:bg-echo-gray/20 text-echo-black"
                      >
                        Continue
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
            
            {/* Recently viewed content */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-echo-black">Recently Viewed</h2>
                <Link to="/explore" className="text-echo-blue hover:text-echo-blue/80 text-sm font-medium flex items-center">
                  Browse more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Introduction to Neural Networks",
                    type: "Video",
                    duration: "12:36",
                    author: "AI Expert",
                    icon: <Video className="w-4 h-4" />
                  },
                  {
                    title: "UI Design Principles",
                    type: "Article",
                    duration: "8 min read",
                    author: "UX Designer",
                    icon: <FileText className="w-4 h-4" />
                  },
                  {
                    title: "Data Structures Explained",
                    type: "Mind Map",
                    duration: "5 sections",
                    author: "CS Professor",
                    icon: <Network className="w-4 h-4" />
                  },
                  {
                    title: "JavaScript Best Practices",
                    type: "Quiz",
                    duration: "10 questions",
                    author: "Web Developer",
                    icon: <BookOpen className="w-4 h-4" />
                  }
                ].map((content, index) => (
                  <Card key={index} className="overflow-hidden hover-lift">
                    <div className="aspect-video bg-echo-gray/10 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {content.icon}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {content.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium line-clamp-1">{content.title}</h3>
                      <p className="text-echo-gray text-sm mt-1">by {content.author}</p>
                      <div className="mt-2">
                        <BadgeCustom variant="secondary" size="sm">
                          {content.type}
                        </BadgeCustom>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
            
            {/* Stats and insights */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-echo-black">Your Learning Stats</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-echo-blue hover:text-echo-blue/80 hover:bg-echo-blue/5"
                >
                  This Week
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Hours Learned",
                    value: "12.5",
                    change: "+2.4",
                    icon: <Clock className="w-5 h-5" />,
                    color: "text-echo-blue"
                  },
                  {
                    title: "Content Created",
                    value: "3",
                    change: "+1",
                    icon: <Video className="w-5 h-5" />,
                    color: "text-echo-purple"
                  },
                  {
                    title: "Karma Points Earned",
                    value: "28",
                    change: "+8",
                    icon: <Award className="w-5 h-5" />,
                    color: "text-amber-500"
                  },
                  {
                    title: "Community Rank",
                    value: "#156",
                    change: "↑12",
                    icon: <BarChart3 className="w-5 h-5" />,
                    color: "text-echo-pink"
                  }
                ].map((stat, index) => (
                  <Card key={index} className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-echo-gray text-sm">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      </div>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="mt-3 flex items-center">
                      <span className="text-emerald-500 text-sm font-medium">
                        {stat.change}
                      </span>
                      <span className="text-echo-gray text-sm ml-1">
                        vs last week
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Clock, 
  Award, 
  ThumbsUp, 
  MessageCircle,
  User,
  Video,
  FileText,
  HelpCircle,
  Network,
  Zap,
  ChevronDown,
  X
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';
import BadgeCustom from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState<string>('For You');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
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

  const filters = [
    { name: 'For You', icon: <Zap className="w-4 h-4" /> },
    { name: 'Trending', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Latest', icon: <Clock className="w-4 h-4" /> },
    { name: 'Popular', icon: <ThumbsUp className="w-4 h-4" /> }
  ];

  const contentTypes = [
    { name: 'All Types', active: true },
    { name: 'Videos', active: false },
    { name: 'Articles', active: false },
    { name: 'Mind Maps', active: false },
    { name: 'Quizzes', active: false }
  ];

  const contentItems = [
    {
      title: "Introduction to Machine Learning",
      author: "AI Enthusiast",
      type: "Video",
      duration: "15:24",
      stats: { views: 1234, likes: 87, comments: 23 },
      tags: ["AI", "Programming", "Data Science"],
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "UX Design Principles for Beginners",
      author: "Design Expert",
      type: "Article",
      duration: "10 min read",
      stats: { views: 856, likes: 62, comments: 14 },
      tags: ["Design", "UX", "Principles"],
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Python Data Structures Explained",
      author: "Code Master",
      type: "Mind Map",
      duration: "7 sections",
      stats: { views: 2134, likes: 154, comments: 42 },
      tags: ["Python", "Programming", "Basics"],
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "Web Development Quiz",
      author: "Frontend Developer",
      type: "Quiz",
      duration: "20 questions",
      stats: { views: 1567, likes: 98, comments: 32 },
      tags: ["JavaScript", "CSS", "HTML"],
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      title: "Public Speaking Mastery",
      author: "Communication Coach",
      type: "Video",
      duration: "22:47",
      stats: { views: 3421, likes: 245, comments: 78 },
      tags: ["Speaking", "Communication", "Skills"],
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "Financial Planning 101",
      author: "Financial Advisor",
      type: "Article",
      duration: "12 min read",
      stats: { views: 892, likes: 76, comments: 19 },
      tags: ["Finance", "Planning", "Money"],
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Digital Marketing Strategy",
      author: "Marketing Expert",
      type: "Mind Map",
      duration: "5 sections",
      stats: { views: 1354, likes: 92, comments: 27 },
      tags: ["Marketing", "Digital", "Strategy"],
      icon: <Network className="w-5 h-5" />
    },
    {
      title: "History Trivia Challenge",
      author: "History Professor",
      type: "Quiz",
      duration: "15 questions",
      stats: { views: 764, likes: 54, comments: 12 },
      tags: ["History", "Trivia", "Knowledge"],
      icon: <HelpCircle className="w-5 h-5" />
    }
  ];

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
            {/* Header and search */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-echo-black mb-4">Explore Content</h1>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-echo-gray" />
                  <Input
                    type="text"
                    placeholder="Search for content..."
                    className="pl-10 h-12 bg-white border-echo-gray/20 rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-echo-gray hover:text-echo-black"
                      onClick={() => setSearchQuery('')}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="h-12 border-echo-gray/20 text-echo-gray flex gap-2 items-center rounded-xl px-4"
                  >
                    <Filter className="w-4 h-4" />
                    Filters
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    className="h-12 bg-echo-blue hover:bg-echo-blue/90 rounded-xl px-6"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Main tab filters */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white rounded-xl p-2 flex overflow-x-auto hide-scrollbar">
                {filters.map((filter) => (
                  <button
                    key={filter.name}
                    className={cn(
                      "flex items-center justify-center px-4 py-2 rounded-lg whitespace-nowrap transition-all",
                      activeFilter === filter.name
                        ? "bg-echo-blue text-white"
                        : "text-echo-gray hover:bg-echo-light-gray"
                    )}
                    onClick={() => setActiveFilter(filter.name)}
                  >
                    {filter.icon}
                    <span className="ml-2">{filter.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* Content type filters */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-2">
                {contentTypes.map((type) => (
                  <BadgeCustom
                    key={type.name}
                    variant={type.active ? "default" : "secondary"}
                    size="md"
                    className="cursor-pointer"
                  >
                    {type.name}
                  </BadgeCustom>
                ))}
              </div>
            </motion.div>
            
            {/* Content grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover-lift">
                    <div className="aspect-video bg-echo-gray/10 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-echo-gray">
                        {item.icon}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center mb-3">
                        <Avatar className="w-6 h-6 mr-2">
                          <User className="w-4 h-4" />
                        </Avatar>
                        <span className="text-sm text-echo-gray">{item.author}</span>
                      </div>
                      
                      <h3 className="font-medium line-clamp-2 mb-2">{item.title}</h3>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-echo-gray/10 text-echo-gray px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-echo-gray border-t border-echo-gray/10 pt-3">
                        <div className="flex items-center">
                          <BadgeCustom
                            variant="secondary"
                            size="sm"
                          >
                            {item.type}
                          </BadgeCustom>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <ThumbsUp className="w-3 h-3 mr-1" />
                            {item.stats.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {item.stats.comments}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-xl border-echo-gray/20"
                >
                  Load More
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;

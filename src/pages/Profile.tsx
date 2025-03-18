
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  User, 
  Award, 
  BookOpen, 
  Video, 
  FileText, 
  Network,
  Medal,
  Edit,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  Calendar,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Mail,
  Globe
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';
import StreakCounter from '@/components/ui/streak-counter';
import BadgeCustom from '@/components/ui/badge-custom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<string>('content');
  
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

  const badges = [
    {
      name: "Content Creator",
      description: "Created 10+ pieces of content",
      icon: <Video className="w-5 h-5" />,
      color: "bg-echo-blue"
    },
    {
      name: "Knowledge Seeker",
      description: "Completed 20+ learning modules",
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-echo-purple"
    },
    {
      name: "Community Contributor",
      description: "Provided feedback on 50+ posts",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "bg-echo-pink"
    }
  ];

  const userContent = [
    {
      title: "Introduction to Neural Networks",
      type: "Video",
      date: "3 days ago",
      stats: { views: 1234, likes: 87, comments: 23 },
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "How to Master Public Speaking",
      type: "Article",
      date: "1 week ago",
      stats: { views: 856, likes: 62, comments: 14 },
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Python Data Structures Map",
      type: "Mind Map",
      date: "2 weeks ago",
      stats: { views: 2134, likes: 154, comments: 42 },
      icon: <Network className="w-5 h-5" />
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
            {/* Profile header */}
            <motion.div variants={itemVariants} className="mb-8">
              <Card className="overflow-hidden">
                <div className="h-48 md:h-64 bg-gradient-to-r from-echo-blue to-echo-purple relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Cover
                  </Button>
                </div>
                
                <div className="px-6 pb-6 relative">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16">
                    <div className="flex flex-col md:flex-row md:items-end">
                      <Avatar className="w-32 h-32 border-4 border-white bg-echo-gray/10">
                        <User className="w-16 h-16 text-echo-gray/50" />
                      </Avatar>
                      
                      <div className="mt-4 md:mt-0 md:ml-6 md:mb-4">
                        <h1 className="text-2xl font-bold text-echo-black">John Doe</h1>
                        <p className="text-echo-gray">Lifelong learner | AI Enthusiast | Educator</p>
                        
                        <div className="flex flex-wrap gap-4 mt-3">
                          <div className="flex items-center text-echo-gray">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">Joined June 2023</span>
                          </div>
                          <div className="flex items-center text-echo-gray">
                            <Globe className="w-4 h-4 mr-1" />
                            <span className="text-sm">San Francisco, CA</span>
                          </div>
                          <div className="flex items-center text-echo-gray">
                            <Mail className="w-4 h-4 mr-1" />
                            <span className="text-sm">john.doe@example.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-6 md:mt-0">
                      <Button
                        variant="outline"
                        className="border-echo-gray/20"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                      <Button>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Stats and badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-echo-black mb-4">Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-echo-blue/10 text-echo-blue mb-3">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">158</div>
                    <div className="text-sm text-echo-gray">Karma Points</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-echo-purple/10 text-echo-purple mb-3">
                      <Medal className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-echo-gray">Badges Earned</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-echo-pink/10 text-echo-pink mb-3">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-echo-gray">Content Created</div>
                  </div>
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 mb-3">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">34</div>
                    <div className="text-sm text-echo-gray">Lessons Completed</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-echo-gray/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-echo-gray">Current Streak</span>
                    <StreakCounter days={16} size="sm" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-echo-black mb-4">Top Badges</h2>
                <div className="space-y-4">
                  {badges.map((badge, index) => (
                    <div key={index} className="flex items-start">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", badge.color)}>
                        {badge.icon}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">{badge.name}</h3>
                        <p className="text-echo-gray text-sm">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-echo-blue" 
                >
                  View All Badges
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-echo-black mb-4">Active Challenges</h2>
                <div className="space-y-4">
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <h3 className="font-medium">30 Days of Python</h3>
                    <div className="flex justify-between text-sm text-echo-gray mb-2">
                      <span>Day 18 of 30</span>
                      <span>60% complete</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-echo-blue rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-echo-light-gray/50 rounded-xl p-4">
                    <h3 className="font-medium">Public Speaking Challenge</h3>
                    <div className="flex justify-between text-sm text-echo-gray mb-2">
                      <span>Day 6 of 14</span>
                      <span>43% complete</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div className="h-full bg-echo-pink rounded-full" style={{ width: '43%' }}></div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-echo-gray/20" 
                >
                  Join New Challenge
                  <Plus className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            </motion.div>
            
            {/* Content tabs */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <Tabs defaultValue="content" onValueChange={setActiveTab}>
                  <TabsList className="w-full bg-echo-light-gray/50 p-1 rounded-none grid grid-cols-3 border-b border-echo-gray/10">
                    <TabsTrigger 
                      value="content"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none py-3"
                    >
                      Your Content
                    </TabsTrigger>
                    <TabsTrigger 
                      value="saved"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none py-3"
                    >
                      Saved Items
                    </TabsTrigger>
                    <TabsTrigger 
                      value="activity"
                      className="data-[state=active]:bg-white data-[state=active]:shadow-none rounded-none py-3"
                    >
                      Recent Activity
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="content" className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-semibold text-echo-black">Your Content</h2>
                      <Button 
                        variant="outline" 
                        className="border-echo-gray/20 text-echo-gray"
                      >
                        Filter
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {userContent.map((content, index) => (
                        <Card key={index} className="p-4 flex flex-col md:flex-row md:items-center hover-lift">
                          <div className="w-full md:w-48 h-24 bg-echo-gray/10 rounded-lg flex items-center justify-center mr-4 mb-4 md:mb-0">
                            {content.icon}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <BadgeCustom
                                variant="secondary"
                                size="sm"
                                className="mr-2"
                              >
                                {content.type}
                              </BadgeCustom>
                              <span className="text-xs text-echo-gray">{content.date}</span>
                            </div>
                            <h3 className="font-medium mb-2">{content.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-echo-gray">
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {content.stats.views}
                              </div>
                              <div className="flex items-center">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {content.stats.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {content.stats.comments}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex mt-4 md:mt-0 space-x-2">
                            <Button variant="ghost" size="sm" className="text-echo-gray">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-echo-gray">
                              <Share2 className="w-4 h-4" />
                            </Button>
                            <Button size="sm">
                              View
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Button 
                        variant="outline" 
                        className="border-echo-gray/20"
                      >
                        Load More
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="saved" className="p-6">
                    <div className="flex justify-center items-center h-48 flex-col">
                      <BookOpen className="w-12 h-12 text-echo-gray/30 mb-4" />
                      <h3 className="text-lg font-medium text-echo-black mb-2">No Saved Items Yet</h3>
                      <p className="text-echo-gray text-center max-w-md">
                        Save videos, articles, and other content to access them easily later
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="activity" className="p-6">
                    <div className="flex justify-center items-center h-48 flex-col">
                      <BarChart3 className="w-12 h-12 text-echo-gray/30 mb-4" />
                      <h3 className="text-lg font-medium text-echo-black mb-2">Activity Feed Coming Soon</h3>
                      <p className="text-echo-gray text-center max-w-md">
                        We're working on bringing you a detailed activity feed to track your progress
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;

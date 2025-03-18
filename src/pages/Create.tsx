
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  FileText, 
  Network, 
  HelpCircle, 
  Upload, 
  Image as ImageIcon, 
  Mic, 
  Link as LinkIcon,
  Plus,
  Save,
  ChevronDown,
  Sparkles,
  X,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Card from '@/components/shared/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const Create = () => {
  const [activeTab, setActiveTab] = useState<string>('video');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>('');
  const [generatingWithAI, setGeneratingWithAI] = useState<boolean>(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const generateWithAI = () => {
    setGeneratingWithAI(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setTitle('Introduction to Neural Networks');
      setDescription('A comprehensive explanation of neural networks and how they work, with practical examples and applications.');
      setTags(['AI', 'Machine Learning', 'Programming']);
      setGeneratingWithAI(false);
      
      toast({
        title: 'AI Generation Complete',
        description: 'Your content template has been generated successfully.',
        duration: 5000,
      });
    }, 2000);
  };

  const publishContent = () => {
    if (!title.trim()) {
      toast({
        title: 'Title Required',
        description: 'Please add a title for your content.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }
    
    toast({
      title: 'Content Published',
      description: 'Your content has been published successfully.',
      duration: 5000,
    });
  };

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

  const contentTypes = [
    { id: 'video', name: 'Video', icon: <Video className="w-5 h-5" /> },
    { id: 'article', name: 'Article', icon: <FileText className="w-5 h-5" /> },
    { id: 'mindmap', name: 'Mind Map', icon: <Network className="w-5 h-5" /> },
    { id: 'quiz', name: 'Quiz', icon: <HelpCircle className="w-5 h-5" /> },
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
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-3xl font-bold text-echo-black">Create Content</h1>
              <p className="text-echo-gray mt-1">Share your knowledge with the EchoLoop community</p>
            </motion.div>
            
            {/* Content creator */}
            <motion.div variants={itemVariants}>
              <Card className="overflow-hidden">
                <Tabs defaultValue="video" onValueChange={setActiveTab}>
                  <div className="bg-white border-b border-echo-gray/10 p-4">
                    <TabsList className="w-full bg-echo-light-gray/50 p-1 rounded-lg grid grid-cols-4">
                      {contentTypes.map((type) => (
                        <TabsTrigger 
                          key={type.id}
                          value={type.id}
                          className={cn(
                            "flex items-center justify-center py-3 gap-2", 
                            "data-[state=active]:bg-white data-[state=active]:shadow-sm"
                          )}
                        >
                          {type.icon}
                          <span>{type.name}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-end mb-6">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 mr-3 text-echo-purple border-echo-purple/20 hover:bg-echo-purple/5"
                        onClick={generateWithAI}
                        disabled={generatingWithAI}
                      >
                        {generatingWithAI ? (
                          <>
                            <div className="animate-spin w-4 h-4 border-2 border-echo-purple/20 border-t-echo-purple rounded-full mr-1" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4" />
                            Generate with AI
                          </>
                        )}
                      </Button>
                      
                      <Button
                        variant="outline"
                        className="border-echo-gray/20 text-echo-gray"
                      >
                        Templates
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-echo-black mb-1">
                          Title
                        </label>
                        <Input
                          id="title"
                          placeholder="Enter a title for your content"
                          className="bg-white border-echo-gray/20"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-echo-black mb-1">
                          Description
                        </label>
                        <Textarea
                          id="description"
                          placeholder="Provide a brief description of your content"
                          className="bg-white border-echo-gray/20 min-h-[100px]"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-echo-black mb-1">
                          Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {tags.map((tag) => (
                            <div
                              key={tag}
                              className="flex items-center bg-echo-blue/10 text-echo-blue rounded-full px-3 py-1 text-sm"
                            >
                              {tag}
                              <button
                                className="ml-2"
                                onClick={() => handleRemoveTag(tag)}
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="flex">
                          <Input
                            placeholder="Add tags (press Enter)"
                            className="bg-white border-echo-gray/20 rounded-r-none"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            onKeyDown={handleTagKeyDown}
                          />
                          <Button 
                            variant="outline" 
                            className="rounded-l-none border-l-0" 
                            onClick={handleAddTag}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <TabsContent value="video" className="space-y-6 mt-6">
                        <div className="border-2 border-dashed border-echo-gray/20 rounded-xl p-8 text-center">
                          <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-echo-blue/10 rounded-full flex items-center justify-center">
                              <Upload className="w-8 h-8 text-echo-blue" />
                            </div>
                          </div>
                          <h3 className="text-lg font-medium text-echo-black mb-2">Upload your video</h3>
                          <p className="text-echo-gray text-sm mb-4">Drag and drop your video file here or click to browse</p>
                          <Button variant="outline" className="border-echo-gray/20">
                            Browse Files
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <Button variant="outline" className="border-echo-gray/20 flex items-center justify-center gap-2 py-6">
                            <ImageIcon className="w-5 h-5 text-echo-gray" />
                            Add Thumbnail
                          </Button>
                          <Button variant="outline" className="border-echo-gray/20 flex items-center justify-center gap-2 py-6">
                            <Mic className="w-5 h-5 text-echo-gray" />
                            Add Voice-over
                          </Button>
                          <Button variant="outline" className="border-echo-gray/20 flex items-center justify-center gap-2 py-6">
                            <LinkIcon className="w-5 h-5 text-echo-gray" />
                            Add Resources
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="article" className="space-y-6 mt-6">
                        <div className="border border-echo-gray/20 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-4 border-b border-echo-gray/10 pb-3">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                  <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" fill="currentColor" />
                                </svg>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2 font-bold">B</Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2 italic">I</Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2 underline">U</Button>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 px-2 flex items-center gap-1">
                              <Sparkles className="w-4 h-4" />
                              AI Writer
                            </Button>
                          </div>
                          <Textarea
                            placeholder="Start writing your article here..."
                            className="bg-white border-0 resize-none min-h-[300px] focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                          />
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="mindmap" className="space-y-6 mt-6">
                        <div className="border-2 border-dashed border-echo-gray/20 rounded-xl p-8 text-center aspect-video flex flex-col items-center justify-center">
                          <div className="mb-4">
                            <Network className="w-12 h-12 text-echo-gray/40" />
                          </div>
                          <h3 className="text-lg font-medium text-echo-black mb-2">Create a Mind Map</h3>
                          <p className="text-echo-gray text-sm mb-4 max-w-md">
                            Visualize concepts and ideas with our interactive mind map tool
                          </p>
                          <Button>
                            Start Creating
                          </Button>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="quiz" className="space-y-6 mt-6">
                        <div className="border border-echo-gray/20 rounded-xl p-6">
                          <h3 className="text-lg font-medium text-echo-black mb-4">Quiz Questions</h3>
                          
                          <div className="mb-6 p-4 bg-echo-light-gray/30 rounded-xl">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <Input
                                  placeholder="Enter your question here"
                                  className="bg-white border-echo-gray/20 mb-3"
                                  defaultValue="What is the primary purpose of a neural network?"
                                />
                                
                                {[
                                  "To process data sequentially",
                                  "To recognize patterns in data",
                                  "To store large amounts of data",
                                  "To create user interfaces"
                                ].map((option, i) => (
                                  <div key={i} className="flex items-center mb-2 last:mb-0">
                                    <div className={cn(
                                      "w-5 h-5 rounded-full border mr-2 flex items-center justify-center",
                                      i === 1 ? "bg-echo-blue border-echo-blue text-white" : "border-echo-gray/30 bg-white"
                                    )}>
                                      {i === 1 && <Check className="w-3 h-3" />}
                                    </div>
                                    <Input
                                      placeholder={`Option ${i + 1}`}
                                      className="bg-white border-echo-gray/20"
                                      defaultValue={option}
                                    />
                                  </div>
                                ))}
                              </div>
                              <Button variant="ghost" size="sm" className="text-echo-gray">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          
                          <Button variant="outline" className="w-full border-echo-gray/20 flex items-center justify-center gap-2">
                            <Plus className="w-4 h-4" />
                            Add Question
                          </Button>
                        </div>
                      </TabsContent>
                    </div>
                  </div>
                  
                  <div className="bg-white border-t border-echo-gray/10 p-4 flex justify-between">
                    <Button variant="outline" className="border-echo-gray/20">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button variant="outline" className="border-echo-gray/20">
                        Preview
                      </Button>
                      <Button onClick={publishContent}>
                        Publish
                      </Button>
                    </div>
                  </div>
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

export default Create;

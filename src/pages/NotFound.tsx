
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from '@/components/ui/use-toast';

const NotFound = () => {
  const location = useLocation();
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;
    const errorMessage = `404 Error: Resource not found at path: ${path}`;
    console.error(errorMessage);
    
    // Save error details for display
    setErrorDetails(errorMessage);
    
    // Show toast notification
    toast({
      title: "Page Not Found",
      description: "We couldn't find the page you were looking for.",
      variant: "destructive",
    });
  }, [location.pathname]);

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

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex items-center justify-center pt-24 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-lg mx-auto px-4"
        >
          <motion.div 
            variants={itemVariants}
            className="w-32 h-32 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <span className="text-6xl font-bold text-red-500">404</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-echo-black mb-4"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-echo-gray text-lg mb-4"
          >
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </motion.p>
          
          {errorDetails && (
            <motion.div
              variants={itemVariants}
              className="bg-gray-100 p-3 rounded-lg mb-8 overflow-x-auto text-sm text-left text-gray-700 font-mono"
            >
              {errorDetails}
            </motion.div>
          )}
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              asChild
              variant="outline" 
              className="border-echo-gray/20"
            >
              <Link to="/" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="default"
            >
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleRefresh}
              className="text-echo-gray hover:text-echo-black"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

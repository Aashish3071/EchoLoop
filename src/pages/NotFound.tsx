
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
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

  return (
    <div className="min-h-screen">
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
            className="w-32 h-32 bg-echo-light-gray rounded-3xl flex items-center justify-center mx-auto mb-8"
          >
            <span className="text-6xl font-bold text-echo-gray">404</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-echo-black mb-4"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-echo-gray text-lg mb-8"
          >
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
            
            <Button asChild>
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

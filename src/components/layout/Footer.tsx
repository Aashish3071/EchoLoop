
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border">
      <div className="echo-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8 bg-echo-blue rounded-lg flex items-center justify-center">
                <span className="absolute w-4 h-4 bg-echo-purple rounded-md"></span>
              </div>
              <span className="font-bold text-xl tracking-tight">EchoLoop</span>
            </Link>
            <p className="mt-4 text-sm text-echo-gray max-w-xs">
              A social learning platform powered by psychology and AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-echo-black tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/explore" className="text-base text-echo-gray hover:text-echo-black transition-colors">Explore</Link></li>
              <li><Link to="/create" className="text-base text-echo-gray hover:text-echo-black transition-colors">Create</Link></li>
              <li><Link to="/challenges" className="text-base text-echo-gray hover:text-echo-black transition-colors">Challenges</Link></li>
              <li><Link to="/dashboard" className="text-base text-echo-gray hover:text-echo-black transition-colors">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-echo-black tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="text-base text-echo-gray hover:text-echo-black transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-base text-echo-gray hover:text-echo-black transition-colors">Blog</Link></li>
              <li><Link to="/help" className="text-base text-echo-gray hover:text-echo-black transition-colors">Help Center</Link></li>
              <li><Link to="/feedback" className="text-base text-echo-gray hover:text-echo-black transition-colors">Feedback</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-echo-black tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/privacy" className="text-base text-echo-gray hover:text-echo-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-echo-gray hover:text-echo-black transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-base text-echo-gray hover:text-echo-black transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-base text-echo-gray hover:text-echo-black transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-echo-gray">
            &copy; {new Date().getFullYear()} EchoLoop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Search, 
  PlusCircle, 
  User,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Explore', path: '/explore', icon: <Search className="w-5 h-5" /> },
    { name: 'Create', path: '/create', icon: <PlusCircle className="w-5 h-5" /> },
    { name: 'Profile', path: '/profile', icon: <User className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="echo-container">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="EchoLoop"
          >
            <div className="relative w-8 h-8 bg-echo-blue rounded-lg flex items-center justify-center">
              <span className="absolute w-4 h-4 bg-echo-purple rounded-md animate-pulse-soft" style={{ animationDelay: '0.5s' }}></span>
            </div>
            <span className="font-bold text-xl tracking-tight">EchoLoop</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'flex items-center space-x-1 px-3 py-2 rounded-full transition-all',
                  isActive(link.path)
                    ? 'text-echo-blue font-medium'
                    : 'text-echo-gray hover:text-echo-black'
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="default"
              size="sm"
              className="bg-echo-blue hover:bg-echo-blue/90 rounded-full px-6"
            >
              Sign In
            </Button>
          </div>

          <button
            className="flex md:hidden items-center justify-center rounded-md p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'flex items-center space-x-3 p-4 rounded-xl transition-all',
                  isActive(link.path)
                    ? 'bg-echo-blue/10 text-echo-blue font-medium'
                    : 'text-echo-gray hover:bg-echo-light-gray'
                )}
              >
                {link.icon}
                <span className="text-lg">{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button
              variant="default"
              className="w-full bg-echo-blue hover:bg-echo-blue/90 rounded-xl py-6 text-lg"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive' | 'success';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  progress?: number;
  icon?: React.ReactNode;
  className?: string;
}

const BadgeCustom = ({
  children,
  variant = 'default',
  size = 'md',
  animated = false,
  progress,
  icon,
  className,
}: BadgeProps) => {
  // Variant styles
  const variantStyles = {
    default: 'bg-echo-blue text-white',
    outline: 'bg-transparent border border-echo-blue text-echo-blue',
    secondary: 'bg-echo-gray/10 text-echo-gray',
    destructive: 'bg-echo-pink text-white',
    success: 'bg-emerald-500 text-white',
  };

  // Size styles
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  // Progress indicator (for badges showing completion)
  const ProgressIndicator = () => {
    if (progress === undefined) return null;
    
    return (
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div 
          className="h-full bg-black/10" 
          style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }} 
        />
      </div>
    );
  };

  // Basic badge component
  const BadgeContent = () => (
    <span className={cn(
      'relative inline-flex items-center justify-center rounded-full font-medium',
      variantStyles[variant],
      sizeStyles[size],
      progress !== undefined && 'pr-2',
      className
    )}>
      {progress !== undefined && <ProgressIndicator />}
      {icon && <span className="mr-1">{icon}</span>}
      <span className="relative">{children}</span>
      {progress !== undefined && (
        <span className="ml-1 relative text-xs opacity-80">{progress}%</span>
      )}
    </span>
  );

  // Return animated version if requested
  if (animated) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block"
      >
        <BadgeContent />
      </motion.span>
    );
  }

  // Return standard badge
  return <BadgeContent />;
};

export default BadgeCustom;


import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'outline' | 'elevated';
  hoverEffect?: boolean;
  as?: React.ElementType;
}

const Card = ({
  children,
  className,
  variant = 'default',
  hoverEffect = false,
  as: Component = 'div',
  ...props
}: CardProps) => {
  const variants = {
    default: 'bg-white border border-echo-gray/10',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20',
    outline: 'bg-transparent border border-echo-gray/20',
    elevated: 'bg-white border border-echo-gray/10 shadow-md'
  };

  return (
    <Component
      className={cn(
        'rounded-xl overflow-hidden',
        variants[variant],
        hoverEffect && 'hover-lift',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

// Using Framer Motion
export const AnimatedCard = ({ 
  children, 
  className, 
  variant = 'default', 
  hoverEffect = false,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  ...props 
}: CardProps & { 
  initial?: any; 
  animate?: any; 
  transition?: any;
}) => {
  const variants = {
    default: 'bg-white border border-echo-gray/10',
    glass: 'bg-white/80 backdrop-blur-md border border-white/20',
    outline: 'bg-transparent border border-echo-gray/20',
    elevated: 'bg-white border border-echo-gray/10 shadow-md'
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={cn(
        'rounded-xl overflow-hidden',
        variants[variant],
        hoverEffect && 'hover-lift',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

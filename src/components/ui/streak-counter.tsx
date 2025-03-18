
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

interface StreakCounterProps {
  days: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'minimal';
  className?: string;
  animated?: boolean;
}

const StreakCounter = ({
  days,
  size = 'md',
  variant = 'default',
  className,
  animated = true,
}: StreakCounterProps) => {
  // Size configuration
  const sizeConfig = {
    sm: {
      container: 'h-8 px-2',
      icon: 'w-3 h-3',
      text: 'text-xs',
    },
    md: {
      container: 'h-10 px-3',
      icon: 'w-4 h-4',
      text: 'text-sm',
    },
    lg: {
      container: 'h-12 px-4',
      icon: 'w-5 h-5',
      text: 'text-base',
    },
  };

  // Variant configuration
  const variantConfig = {
    default: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm',
    outline: 'bg-transparent border border-amber-500 text-amber-500',
    minimal: 'bg-amber-100 text-amber-600',
  };

  // Flame animation variants
  const flameAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  // Counter animation
  const counterAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  const Content = () => (
    <div
      className={cn(
        'flex items-center space-x-1.5 rounded-full',
        variantConfig[variant],
        sizeConfig[size].container,
        className
      )}
    >
      {animated ? (
        <motion.div
          variants={flameAnimation}
          initial="initial"
          animate="animate"
          className="flex-shrink-0"
        >
          <Flame className={cn(sizeConfig[size].icon, 'text-amber-100')} />
        </motion.div>
      ) : (
        <Flame className={cn(sizeConfig[size].icon, 'text-amber-100')} />
      )}
      
      <span className={cn('font-semibold', sizeConfig[size].text)}>
        {days} day{days !== 1 ? 's' : ''}
      </span>
    </div>
  );

  // Return animated version if requested for the whole component
  if (animated) {
    return (
      <motion.div
        variants={counterAnimation}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4 }}
      >
        <Content />
      </motion.div>
    );
  }

  return <Content />;
};

export default StreakCounter;

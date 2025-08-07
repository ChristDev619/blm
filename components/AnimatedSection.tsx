'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay
      }
    }
  };

  // Add direction-specific animations
  if (direction === 'up') {
    variants.hidden = { ...variants.hidden, y: 60 };
    variants.visible = { ...variants.visible, y: 0 };
  } else if (direction === 'down') {
    variants.hidden = { ...variants.hidden, y: -60 };
    variants.visible = { ...variants.visible, y: 0 };
  } else if (direction === 'left') {
    variants.hidden = { ...variants.hidden, x: 60 };
    variants.visible = { ...variants.visible, x: 0 };
  } else if (direction === 'right') {
    variants.hidden = { ...variants.hidden, x: -60 };
    variants.visible = { ...variants.visible, x: 0 };
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
} 
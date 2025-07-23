import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  onAnimationComplete?: () => void;
  className?: string;
}

const getInitial = (direction: string) => {
  switch (direction) {
    case 'top': return { y: 30, opacity: 0, filter: 'blur(8px)' };
    case 'bottom': return { y: -30, opacity: 0, filter: 'blur(8px)' };
    case 'left': return { x: 30, opacity: 0, filter: 'blur(8px)' };
    case 'right': return { x: -30, opacity: 0, filter: 'blur(8px)' };
    default: return { opacity: 0, filter: 'blur(8px)' };
  }
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 100,
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  className = '',
}) => {
  const items = animateBy === 'words' ? text.split(' ') : text.split('');
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      ...getInitial(direction),
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: i * (delay / 1000), duration: 0.7, ease: 'easeOut' },
    })).then(() => {
      if (onAnimationComplete) onAnimationComplete();
    });
  }, [controls, delay, direction, onAnimationComplete, items.length]);

  return (
    <span className={className}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={getInitial(direction)}
          animate={controls}
          style={{ display: 'inline-block', marginRight: animateBy === 'words' ? 8 : 0 }}
        >
          {item}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText; 
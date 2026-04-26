import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide' | 'scale';
  delay?: number;
  className?: string;
}

const animationClasses = {
  fade: {
    initial: 'opacity-0',
    animate: 'opacity-100',
    transition: 'transition-opacity duration-700 ease-out',
  },
  slide: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-700 ease-out',
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade',
  delay = 0,
  className,
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    triggerOnce: true,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (hasIntersected || isIntersecting) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [hasIntersected, isIntersecting, delay]);

  const animationConfig = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        animationConfig.transition,
        shouldAnimate ? animationConfig.animate : animationConfig.initial,
        className
      )}
      style={{
        transitionDelay: shouldAnimate ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};
import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const containerSizes = {
  sm: 'max-w-3xl',      // 768px
  md: 'max-w-4xl',      // 896px
  lg: 'max-w-6xl',      // 1152px
  xl: 'max-w-7xl',      // 1280px
  full: 'max-w-none',   // No max width
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        containerSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
};
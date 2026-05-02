import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'surface' | 'muted';
  as?: React.ElementType;
}

const spacingClasses = {
  sm: 'py-8 sm:py-12',      // 32px/48px
  md: 'py-12 sm:py-16',     // 48px/64px
  lg: 'py-16 sm:py-20',     // 64px/80px
  xl: 'py-20 sm:py-24',     // 80px/96px
};

const backgroundClasses = {
  default: 'bg-background/85 backdrop-blur-sm',
  surface: 'bg-surface/90 backdrop-blur-sm',
  muted: 'bg-secondary/5 backdrop-blur-sm',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = 'lg',
  background = 'default',
  as: Component = 'section',
}) => {
  return (
    <Component
      className={cn(
        'section-ornament',
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </Component>
  );
};
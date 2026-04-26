import React from 'react';
import { cn } from '@/lib/utils';

export interface GridProps {
  children: React.ReactNode;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: string;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = '1.5rem',
  className,
}) => {
  // Generate responsive grid classes
  const getResponsiveGridClasses = (): string => {
    const gridColsMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    };
    
    const mobileClass = gridColsMap[columns.mobile] || 'grid-cols-1';
    const tabletClass = `md:${gridColsMap[columns.tablet] || 'grid-cols-2'}`;
    const desktopClass = `lg:${gridColsMap[columns.desktop] || 'grid-cols-3'}`;
    
    return `${mobileClass} ${tabletClass} ${desktopClass}`;
  };

  return (
    <div
      className={cn(
        'grid w-full',
        getResponsiveGridClasses(),
        className
      )}
      style={{ gap }}
    >
      {children}
    </div>
  );
};
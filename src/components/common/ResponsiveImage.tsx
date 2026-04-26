import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  aspectRatio?: string;
  sizes?: string;
  srcSet?: string;
  rootMargin?: string;
  onError?: () => void;
  onLoad?: () => void;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  lazy = true,
  aspectRatio = '16/9',
  sizes,
  srcSet,
  rootMargin = '200px',
  onError,
  onLoad,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Use intersection observer for enhanced lazy loading
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin,
    triggerOnce: true,
  });

  // Determine if image should be loaded
  const shouldLoad = !lazy || hasIntersected || isIntersecting;

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          'border border-border rounded-md',
          className
        )}
        style={{ aspectRatio }}
      >
        <div className="text-center p-4">
          <svg
            className="mx-auto h-8 w-8 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      style={{ aspectRatio }}
    >
      {/* Loading placeholder - show when lazy loading and not yet loaded */}
      {lazy && !shouldLoad && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Loading placeholder for when image is loading */}
      {shouldLoad && !isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Actual image - only render when should load */}
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          loading={lazy ? 'lazy' : 'eager'}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
};
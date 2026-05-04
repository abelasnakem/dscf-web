import React from 'react';
import type { MediaAsset } from '@/data/types';
import { ResponsiveImage } from './ResponsiveImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export interface MediaPlayerProps {
  media: MediaAsset;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  lazy?: boolean;
}

export const MediaPlayer: React.FC<MediaPlayerProps> = ({
  media,
  className,
  autoPlay = false,
  controls = true,
  lazy = true,
}) => {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px',
    triggerOnce: true,
  });

  // Determine if media should be loaded
  const shouldLoad = !lazy || hasIntersected || isIntersecting;

  const renderMedia = (): React.ReactElement => {
    if (!shouldLoad) {
      // Show placeholder while not intersecting
      return (
        <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v18a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2z"
              />
            </svg>
          </div>
        </div>
      );
    }

    switch (media.type) {
      case 'image':
        return (
          <ResponsiveImage
            src={media.src}
            alt={media.alt || 'Media content'}
            lazy={false} // We handle lazy loading at MediaPlayer level
            className="w-full h-full"
          />
        );

      case 'video':
        return (
          <video
            src={media.src}
            poster={media.thumbnail}
            autoPlay={autoPlay}
            controls={controls}
            muted={autoPlay} // Mute if autoplay to comply with browser policies
            loop={autoPlay}
            className="w-full h-full object-cover"
            aria-label={media.alt || 'Video content'}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        );

      case 'youtube': {
        if (!media.youtubeId) {
          return (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Invalid YouTube video</p>
            </div>
          );
        }

        const embedUrl = `https://www.youtube.com/embed/${media.youtubeId}${
          autoPlay ? '?autoplay=1&mute=1' : ''
        }`;

        return (
          <iframe
            src={embedUrl}
            title={media.alt || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        );
      }

      default:
        return (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">Unsupported media type</p>
          </div>
        );
    }
  };

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden rounded-lg', className)}
    >
      {renderMedia()}
    </div>
  );
};
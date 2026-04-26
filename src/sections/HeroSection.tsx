import React from 'react';
import type { HeroContent } from '@/data/types';
import { Button } from '@/components/ui/button';
import { MediaPlayer } from '@/components/common/MediaPlayer';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  content: HeroContent;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  className,
}) => {
  const { headline, subheadline, description, cta, media, backgroundImage } = content;

  return (
    <Section
      className={cn('relative overflow-hidden', className)}
      spacing="xl"
      background="default"
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight">
                {headline}
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                {subheadline}
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {cta.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'primary' ? 'default' : 
                          button.variant === 'secondary' ? 'secondary' : 'outline'}
                  size="lg"
                  asChild
                  className={cn(
                    "text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto",
                    button.variant === 'primary' && "text-white"
                  )}
                >
                  <a href={button.href}>
                    {button.text}
                    {button.icon && (
                      <span className="ml-2" aria-hidden="true">
                        {/* Icon would be rendered here based on button.icon */}
                        →
                      </span>
                    )}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Media Column */}
          <div className="relative mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="w-48 md:w-64 lg:w-72 aspect-[886/1920] rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl">
              <MediaPlayer
                media={media}
                lazy={false} // Hero media should load immediately
                autoPlay={media.type === 'video'}
                className="w-full h-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
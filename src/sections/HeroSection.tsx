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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight">
                {headline}
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary">
                {subheadline}
              </h2>
              
              <p className="text-lg sm:text-xl text-textSecondary leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {cta.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant === 'primary' ? 'default' : 
                          button.variant === 'secondary' ? 'secondary' : 'outline'}
                  size="lg"
                  asChild
                  className="text-base px-8 py-3"
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
          <div className="relative">
            <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <MediaPlayer
                media={media}
                lazy={false} // Hero media should load immediately
                autoPlay={media.type === 'video'}
                className="w-full h-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
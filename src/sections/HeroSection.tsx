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
      id="hero"
      className={cn('relative overflow-hidden', className)}
      spacing="xl"
      background="default"
    >
      <div
        className="pointer-events-none absolute inset-0 hero-ambient"
        aria-hidden="true"
      />

      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-multiply"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight tracking-tight">
                {headline}
              </h1>

              <h2 className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-primary">
                <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                {subheadline}
              </h2>

              <p className="text-balance text-base sm:text-lg md:text-xl text-textSecondary leading-relaxed max-w-2xl">
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
          <div className="relative mt-10 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-70 motion-safe:animate-pulse-soft" />
            <div className="relative w-52 md:w-64 lg:w-72 aspect-[886/1920] rounded-2xl border border-white/70 bg-white/70 p-1 shadow-2xl backdrop-blur-sm">
              <MediaPlayer
                media={media}
                lazy={false} // Hero media should load immediately
                autoPlay={media.type === 'video'}
                className="w-full h-full rounded-xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="pointer-events-none absolute -top-4 -right-6 md:-top-6 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-primary/20 rounded-full blur-2xl motion-safe:animate-float-slow" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-20 h-20 md:w-32 md:h-32 bg-secondary/20 rounded-full blur-2xl motion-safe:animate-float" />
            <div className="pointer-events-none absolute top-1/2 right-6 md:right-10 h-12 w-12 rounded-full border border-primary/20 bg-white/40 backdrop-blur-sm" />
          </div>
        </div>
      </Container>
    </Section>
  );
};
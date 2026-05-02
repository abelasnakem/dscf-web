import React from 'react';
import type { CTAContent } from '@/data/types';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export interface CTASectionProps {
  content: CTAContent;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  content,
  className,
}) => {
  const { headline, description, cta, backgroundImage } = content;

  return (
    <Section
      className={cn('relative overflow-hidden bg-transparent text-white backdrop-blur-none', className)}
      spacing="xl"
      background="default"
    >
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/95 to-secondary-dark/95 bg-[length:200%_200%] motion-safe:animate-gradient" />
        </>
      )}
      
      {/* Fallback gradient background if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-secondary-dark bg-[length:200%_200%] motion-safe:animate-gradient" />
      )}

      <div className="absolute inset-0 bg-black/35" />

      <Container size="lg" className="relative z-10">
        <AnimatedSection animation="fade">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-sm">
              {headline}
            </h2>
            
            <p className="text-balance text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
              {description}
            </p>

            <div className="flex justify-center">
              <Button
                variant={cta.variant === 'primary' ? 'default' : 
                        cta.variant === 'secondary' ? 'secondary' : 'outline'}
                size="lg"
                asChild
                className={cn(
                  'text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold w-full sm:w-auto',
                  // Override colors for better contrast on dark background
                  cta.variant === 'primary' && 'bg-white text-primary hover:bg-white/90',
                  cta.variant === 'outline' && 'border-white text-white hover:bg-white hover:text-primary'
                )}
              >
                <a href={cta.href}>
                  {cta.text}
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute top-1/4 left-4 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full blur-xl motion-safe:animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 right-4 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl motion-safe:animate-float-slow" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl motion-safe:animate-pulse-soft" />
    </Section>
  );
};
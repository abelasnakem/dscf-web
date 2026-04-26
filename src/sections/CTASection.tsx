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
      className={cn('relative overflow-hidden', className)}
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        </>
      )}
      
      {/* Fallback gradient background if no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
      )}

      <Container size="lg" className="relative z-10">
        <AnimatedSection animation="fade">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {headline}
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>

            <div className="flex justify-center">
              <Button
                variant={cta.variant === 'primary' ? 'default' : 
                        cta.variant === 'secondary' ? 'secondary' : 'outline'}
                size="lg"
                asChild
                className={cn(
                  'text-lg px-8 py-4 font-semibold',
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
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
    </Section>
  );
};
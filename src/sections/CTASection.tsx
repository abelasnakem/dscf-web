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
      id="cta"
      className={cn('relative overflow-hidden bg-transparent text-primary-light backdrop-blur-none', className)}
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


      <Container size="xl" className="relative z-10">
        <AnimatedSection animation="fade">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 px-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                Get started today
              </span>

              <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl font-bold text-primary-light leading-tight drop-shadow-sm">
                {headline}
              </h2>

              <p className="text-balance text-base sm:text-lg md:text-xl text-primary-light leading-relaxed drop-shadow-sm">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Button
                  variant={cta.variant === 'primary' ? 'default' : 
                          cta.variant === 'secondary' ? 'secondary' : 'outline'}
                  size="lg"
                  asChild
                  className={cn(
                    'text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-semibold w-full sm:w-auto',
                    // Override colors for better contrast on dark background
                    cta.variant === 'primary' && 'bg-white text-primary hover:bg-white/90',
                    cta.variant === 'outline' && 'border-primary-light text-primary-light hover:bg-primary-light hover:text-white'
                  )}
                >
                  <a href={cta.href}>
                    {cta.text}
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </a>
                </Button>

                <a
                  href="#categories"
                  className="text-sm font-semibold text-primary-light/90 hover:text-primary-light transition-colors"
                >
                  Browse categories
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 bg-white/10 p-6 md:p-8 shadow-2xl backdrop-blur-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <span className="text-lg" aria-hidden="true">🛡️</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/85">
                      Protected payments
                    </p>
                    <p className="text-base md:text-lg font-semibold text-primary-light">
                      Secure transactions with verified sellers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <span className="text-lg" aria-hidden="true">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/85">
                      Fast onboarding
                    </p>
                    <p className="text-base md:text-lg font-semibold text-primary-light">
                      Create listings in minutes, not hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <span className="text-lg" aria-hidden="true">📍</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/85">
                      Local & nationwide
                    </p>
                    <p className="text-base md:text-lg font-semibold text-primary-light">
                      Meet nearby or ship with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>

      </Section>
  );
};
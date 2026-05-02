import React from 'react';
import type { StepItem } from '@/data/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export interface HowItWorksSectionProps {
  title: string;
  subtitle: string;
  steps: StepItem[];
  className?: string;
}

interface StepCardProps {
  step: StepItem;
  index: number;
  isLast: boolean;
}
const StepCard: React.FC<StepCardProps> = ({ step, index, isLast }) => {
  return (
    <div className="relative">
      <AnimatedSection animation="slide" delay={index * 200}>
        <div className="rounded-2xl border border-white/70 bg-white/70 p-4 md:p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {/* Step Number and Icon */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                  {step.step}
                </div>

                {/* Icon badge */}
                <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 w-7 h-7 md:w-8 md:h-8 bg-secondary rounded-full flex items-center justify-center text-white text-xs md:text-sm">
                  <i
                    className={`${
                      step.icon === 'user-plus'
                        ? 'fas fa-user-plus'
                        : step.icon === 'camera'
                          ? 'fas fa-camera'
                          : step.icon === 'handshake'
                            ? 'fas fa-handshake'
                            : ''
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-textPrimary mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-textSecondary leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Connecting Line (Desktop only) */}
      {!isLast && (
        <div className="hidden md:block absolute top-11 md:top-14 left-11 md:left-14 w-0.5 h-20 md:h-24 bg-gradient-to-b from-primary/80 to-primary/10 transform translate-y-6" />
      )}
    </div>
  );
};

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title,
  subtitle,
  steps,
  className,
}) => {
  return (
    <Section className={cn(className)} spacing="lg" background="default">
      <Container size="lg">
        <AnimatedSection animation="fade">
          <div className="text-center mb-10 md:mb-16 px-4">
            <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-3 md:mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-balance text-base sm:text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <StepCard
                key={step.step}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
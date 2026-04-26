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
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Step Number and Icon */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {step.step}
              </div>
              
              {/* Icon placeholder - in a real implementation, you'd use an icon library */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm">
                {step.icon === 'user-plus' && '👤'}
                {step.icon === 'camera' && '📷'}
                {step.icon === 'handshake' && '🤝'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-textPrimary mb-3">
              {step.title}
            </h3>
            <p className="text-textSecondary leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Connecting Line (Desktop only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-8 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/30 transform translate-y-8" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 lg:space-y-16">
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
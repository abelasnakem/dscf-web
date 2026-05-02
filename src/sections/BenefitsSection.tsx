import React from 'react';
import type { BenefitItem } from '@/data/types';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Grid } from '@/components/common/Grid';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  items: BenefitItem[];
  className?: string;
}

interface BenefitCardProps {
  benefit: BenefitItem;
  index: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, index }) => {
  return (
    <AnimatedSection animation="slide" delay={index * 100}>
      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
        <CardHeader className="text-center pb-3 md:pb-4 px-4 md:px-6 pt-4 md:pt-6">
          {/* Icon */}
          <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <i 
              className={`text-xl md:text-2xl text-primary ${
                benefit.icon === 'shield-check' ? 'fas fa-shield-alt' :
                benefit.icon === 'map-pin' ? 'fas fa-map-pin' :
                benefit.icon === 'tag' ? 'fas fa-tag' :
                benefit.icon === 'headphones' ? 'fas fa-headphones' : ''
              }`}
              aria-hidden="true"
            />
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
            {benefit.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0 text-center px-4 md:px-6 pb-4 md:pb-6">
          <p className="text-sm md:text-base text-textSecondary leading-relaxed">
            {benefit.description}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  items,
  className,
}) => {
  return (
    <Section className={cn(className)} spacing="lg" background="default">
      <Container size="xl">
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

        <Grid
          columns={{
            mobile: 1,
            tablet: 2,
            desktop: 4,
          }}
          gap="1.5rem"
          className="max-w-7xl mx-auto"
        >
          {items.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              index={index}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
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
      <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
        <CardHeader className="text-center pb-4">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-2xl text-primary">
              {benefit.icon === 'shield-check' && '🛡️'}
              {benefit.icon === 'map-pin' && '📍'}
              {benefit.icon === 'tag' && '🏷️'}
              {benefit.icon === 'headphones' && '🎧'}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
            {benefit.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0 text-center">
          <p className="text-textSecondary leading-relaxed">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-textSecondary max-w-3xl mx-auto">
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
          gap="2rem"
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
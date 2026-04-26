import React from 'react';
import type { StatItem, TestimonialItem } from '@/data/types';
import { Card, CardContent } from '@/components/ui/card';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { Grid } from '@/components/common/Grid';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export interface TrustSectionProps {
  title: string;
  stats: StatItem[];
  testimonials: TestimonialItem[];
  className?: string;
}

interface StatsDisplayProps {
  stats: StatItem[];
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <AnimatedSection key={index} animation="scale" delay={index * 100}>
          <div className="text-center">
            <div className="mb-2">
              {/* Icon placeholder */}
              <span className="text-2xl">
                {stat.icon === 'users' && '👥'}
                {stat.icon === 'shopping-bag' && '🛍️'}
                {stat.icon === 'star' && '⭐'}
                {stat.icon === 'thumbs-up' && '👍'}
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-textSecondary font-medium">
              {stat.label}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={cn(
          'text-lg',
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        )}
      >
        ★
      </span>
    ));
  };

  return (
    <AnimatedSection animation="slide" delay={index * 150}>
      <Card className="h-full border-border/50 hover:border-primary/20 transition-colors">
        <CardContent className="p-6">
          {/* Rating */}
          <div className="flex items-center mb-4">
            {renderStars(testimonial.rating)}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-textSecondary leading-relaxed mb-6 italic">
            "{testimonial.text}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <ResponsiveImage
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full"
                aspectRatio="1/1"
              />
            </div>
            
            <div>
              <div className="font-semibold text-textPrimary">
                {testimonial.name}
              </div>
              <div className="text-sm text-textSecondary">
                {testimonial.role}
                {testimonial.company && (
                  <>
                    {' at '}
                    <span className="font-medium">{testimonial.company}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
};

export const TrustSection: React.FC<TrustSectionProps> = ({
  title,
  stats,
  testimonials,
  className,
}) => {
  return (
    <Section className={cn(className)} spacing="lg" background="muted">
      <Container size="xl">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-8">
              {title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats Display */}
        <StatsDisplay stats={stats} />

        {/* Testimonials */}
        <Grid
          columns={{
            mobile: 1,
            tablet: 2,
            desktop: 2,
          }}
          gap="2rem"
          className="max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
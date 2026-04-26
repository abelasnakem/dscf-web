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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16">
      {stats.map((stat, index) => (
        <AnimatedSection key={index} animation="scale" delay={index * 100}>
          <div className="text-center">
            <div className="mb-1 md:mb-2">
              <i 
                className={`text-xl md:text-2xl text-primary ${
                  stat.icon === 'users' ? 'fas fa-users' :
                  stat.icon === 'shopping-bag' ? 'fas fa-shopping-bag' :
                  stat.icon === 'star' ? 'fas fa-star' :
                  stat.icon === 'thumbs-up' ? 'fas fa-thumbs-up' : ''
                }`}
                aria-hidden="true"
              />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-textSecondary font-medium">
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
          'text-base md:text-lg',
          i < rating ? 'text-warning' : 'text-border'
        )}
        aria-hidden="true"
      >
        ★
      </span>
    ));
  };

  return (
    <AnimatedSection animation="slide" delay={index * 150}>
      <Card className="h-full border-border/50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
        <CardContent className="p-4 md:p-6">
          {/* Rating */}
          <div className="flex items-center mb-3 md:mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
            {renderStars(testimonial.rating)}
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-sm md:text-base text-textSecondary leading-relaxed mb-4 md:mb-6 italic">
            "{testimonial.text}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
              <ResponsiveImage
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full"
                aspectRatio="1/1"
                lazy={true}
                rootMargin="200px"
              />
            </div>
            
            <div>
              <div className="text-sm md:text-base font-semibold text-textPrimary">
                {testimonial.name}
              </div>
              <div className="text-xs md:text-sm text-textSecondary">
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
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-textPrimary mb-6 md:mb-8">
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
          gap="1.5rem"
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
import React from 'react';
import type { CategoryItem } from '@/data/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { Grid } from '@/components/common/Grid';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

export interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  categories: CategoryItem[];
  className?: string;
}

interface CategoryCardProps {
  category: CategoryItem;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <AnimatedSection animation="slide" delay={index * 100}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/20">
        <a href={category.href} className="block">
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <ResponsiveImage
              src={category.image}
              alt={category.title}
              className="w-full h-full group-hover:scale-105 transition-transform duration-300"
              aspectRatio="16/9"
            />
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-textPrimary group-hover:text-primary transition-colors">
              {category.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-0">
            <p className="text-textSecondary mb-3 leading-relaxed">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-primary">
                {category.itemCount.toLocaleString()} items
              </span>
              
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          </CardContent>
        </a>
      </Card>
    </AnimatedSection>
  );
};

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  subtitle,
  categories,
  className,
}) => {
  return (
    <Section className={cn(className)} spacing="lg" background="surface">
      <Container size="xl">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
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
            desktop: 3,
          }}
          gap="2rem"
          className="max-w-6xl mx-auto"
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
import React from 'react';
import { useContent } from '@/hooks/useContent';
import { HeroSection } from '@/sections/HeroSection';
import { FeaturedSection } from '@/sections/FeaturedSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { TrustSection } from '@/sections/TrustSection';
import { BenefitsSection } from '@/sections/BenefitsSection';
import { CTASection } from '@/sections/CTASection';
import { FooterSection } from '@/sections/FooterSection';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export const LandingPageLayout: React.FC = () => {
  const { content, isLoading, error } = useContent();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-textSecondary">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-error text-4xl mb-4">⚠️</div>
          <h1 className="text-xl font-semibold text-textPrimary mb-2">
            Something went wrong
          </h1>
          <p className="text-textSecondary mb-4">
            {error.message || 'Failed to load page content'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryDark transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <AnimatedSection animation="fade">
        <HeroSection content={content.hero} />
      </AnimatedSection>

      {/* Featured Categories Section */}
      <AnimatedSection animation="slide" delay={200}>
        <FeaturedSection
          title={content.featured.title}
          subtitle={content.featured.subtitle}
          categories={content.featured.categories}
        />
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection animation="slide" delay={400}>
        <HowItWorksSection
          title={content.howItWorks.title}
          subtitle={content.howItWorks.subtitle}
          steps={content.howItWorks.steps}
        />
      </AnimatedSection>

      {/* Trust Section */}
      <AnimatedSection animation="slide" delay={600}>
        <TrustSection
          title={content.trust.title}
          stats={content.trust.stats}
          testimonials={content.trust.testimonials}
        />
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection animation="slide" delay={800}>
        <BenefitsSection
          title={content.benefits.title}
          subtitle={content.benefits.subtitle}
          items={content.benefits.items}
        />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fade" delay={1000}>
        <CTASection content={content.cta} />
      </AnimatedSection>

      {/* Footer Section */}
      <FooterSection content={content.footer} />
    </main>
  );
};
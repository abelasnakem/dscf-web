import { describe, it, expect } from 'vitest';
import { ContentManager } from './contentManager';
import { landingPageContent } from './content.config';

describe('Content Configuration', () => {
  it('should create ContentManager with landingPageContent', () => {
    expect(() => {
      new ContentManager(landingPageContent);
    }).not.toThrow();
  });

  it('should have all required sections', () => {
    const manager = new ContentManager(landingPageContent);
    const content = manager.getContent();

    expect(content.hero).toBeDefined();
    expect(content.featured).toBeDefined();
    expect(content.howItWorks).toBeDefined();
    expect(content.trust).toBeDefined();
    expect(content.benefits).toBeDefined();
    expect(content.cta).toBeDefined();
    expect(content.footer).toBeDefined();
  });

  it('should retrieve hero section content', () => {
    const manager = new ContentManager(landingPageContent);
    const hero = manager.getSectionContent('hero');

    expect(hero.headline).toBe('Discover Your Next Great Find');
    expect(hero.cta).toHaveLength(2);
    expect(hero.cta[0].variant).toBe('primary');
    expect(hero.cta[1].variant).toBe('outline');
  });

  it('should retrieve featured section content', () => {
    const manager = new ContentManager(landingPageContent);
    const featured = manager.getSectionContent('featured');

    expect(featured.title).toBe('Popular Categories');
    expect(featured.categories).toHaveLength(3);
    expect(featured.categories[0].id).toBe('cat-1');
  });

  it('should retrieve howItWorks section content', () => {
    const manager = new ContentManager(landingPageContent);
    const howItWorks = manager.getSectionContent('howItWorks');

    expect(howItWorks.title).toBe('How It Works');
    expect(howItWorks.steps).toHaveLength(3);
    expect(howItWorks.steps[0].step).toBe(1);
  });

  it('should retrieve trust section content', () => {
    const manager = new ContentManager(landingPageContent);
    const trust = manager.getSectionContent('trust');

    expect(trust.title).toBe('Trusted by Thousands');
    expect(trust.stats).toHaveLength(4);
    expect(trust.testimonials).toHaveLength(2);
  });

  it('should retrieve benefits section content', () => {
    const manager = new ContentManager(landingPageContent);
    const benefits = manager.getSectionContent('benefits');

    expect(benefits.title).toBe('Why Choose Our Marketplace');
    expect(benefits.items).toHaveLength(4);
  });

  it('should retrieve cta section content', () => {
    const manager = new ContentManager(landingPageContent);
    const cta = manager.getSectionContent('cta');

    expect(cta.headline).toBe('Ready to Start Your Marketplace Journey?');
    expect(cta.cta.variant).toBe('primary');
  });

  it('should retrieve footer section content', () => {
    const manager = new ContentManager(landingPageContent);
    const footer = manager.getSectionContent('footer');

    expect(footer.tagline).toBe('Your trusted local marketplace');
    expect(footer.sections).toHaveLength(4);
    expect(footer.social).toHaveLength(4);
  });

  it('should validate all CTA buttons have valid variants', () => {
    const manager = new ContentManager(landingPageContent);
    const content = manager.getContent();

    // Check hero CTAs
    content.hero.cta.forEach(cta => {
      expect(['primary', 'secondary', 'outline']).toContain(cta.variant);
    });

    // Check main CTA
    expect(['primary', 'secondary', 'outline']).toContain(content.cta.cta.variant);
  });

  it('should validate all media assets have valid types', () => {
    const manager = new ContentManager(landingPageContent);
    const content = manager.getContent();

    expect(['image', 'video', 'youtube']).toContain(content.hero.media.type);
  });

  it('should validate all required fields are non-empty strings', () => {
    const manager = new ContentManager(landingPageContent);
    const content = manager.getContent();

    // Hero section
    expect(content.hero.headline.trim()).not.toBe('');
    expect(content.hero.subheadline.trim()).not.toBe('');
    expect(content.hero.description.trim()).not.toBe('');

    // Featured section
    expect(content.featured.title.trim()).not.toBe('');
    expect(content.featured.subtitle.trim()).not.toBe('');

    // How It Works section
    expect(content.howItWorks.title.trim()).not.toBe('');
    expect(content.howItWorks.subtitle.trim()).not.toBe('');

    // Trust section
    expect(content.trust.title.trim()).not.toBe('');

    // Benefits section
    expect(content.benefits.title.trim()).not.toBe('');
    expect(content.benefits.subtitle.trim()).not.toBe('');

    // CTA section
    expect(content.cta.headline.trim()).not.toBe('');
    expect(content.cta.description.trim()).not.toBe('');

    // Footer section
    expect(content.footer.logo.trim()).not.toBe('');
    expect(content.footer.tagline.trim()).not.toBe('');
    expect(content.footer.copyright.trim()).not.toBe('');
  });
});

import { ContentManager } from './contentManager';
import { landingPageContent } from './content.config';

/**
 * Validation script to verify content configuration
 * Run with: npx tsx src/data/validate-content.ts
 */

try {
  console.log('Validating content configuration...\n');

  // Create ContentManager with the content
  const manager = new ContentManager(landingPageContent);
  console.log('✓ Content configuration is valid');

  // Verify all sections
  const content = manager.getContent();
  
  console.log('\nSection validation:');
  console.log('✓ Hero section:', content.hero.headline);
  console.log('✓ Featured section:', content.featured.title, `(${content.featured.categories.length} categories)`);
  console.log('✓ How It Works section:', content.howItWorks.title, `(${content.howItWorks.steps.length} steps)`);
  console.log('✓ Trust section:', content.trust.title, `(${content.trust.stats.length} stats, ${content.trust.testimonials.length} testimonials)`);
  console.log('✓ Benefits section:', content.benefits.title, `(${content.benefits.items.length} items)`);
  console.log('✓ CTA section:', content.cta.headline);
  console.log('✓ Footer section:', content.footer.tagline, `(${content.footer.sections.length} sections, ${content.footer.social.length} social links)`);

  // Verify CTA buttons
  console.log('\nCTA button validation:');
  content.hero.cta.forEach((cta, index) => {
    console.log(`✓ Hero CTA ${index + 1}: "${cta.text}" (${cta.variant})`);
  });
  console.log(`✓ Main CTA: "${content.cta.cta.text}" (${content.cta.cta.variant})`);

  // Verify media assets
  console.log('\nMedia asset validation:');
  console.log(`✓ Hero media: ${content.hero.media.type} - ${content.hero.media.src}`);

  console.log('\n✅ All validations passed!');
  console.log('\nContent configuration is ready to use with ContentManager.');

} catch (error) {
  console.error('❌ Validation failed:');
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

import type { LandingPageContent } from './types';

export interface IContentManager {
  getContent(): LandingPageContent;
  getSectionContent<K extends keyof LandingPageContent>(
    section: K
  ): LandingPageContent[K];
  updateContent(updates: Partial<LandingPageContent>): void;
}

export class ContentManager implements IContentManager {
  private content: LandingPageContent;

  constructor(initialContent: LandingPageContent) {
    this.validateContent(initialContent);
    this.content = initialContent;
  }

  getContent(): LandingPageContent {
    return this.content;
  }

  getSectionContent<K extends keyof LandingPageContent>(
    section: K
  ): LandingPageContent[K] {
    return this.content[section];
  }

  updateContent(updates: Partial<LandingPageContent>): void {
    const updatedContent = { ...this.content, ...updates };
    this.validateContent(updatedContent);
    this.content = updatedContent;
  }

  private hasProperty(obj: Record<string, unknown>, prop: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  private validateContent(content: unknown): asserts content is LandingPageContent {
    if (!content || typeof content !== 'object') {
      throw new Error('Content must be a valid object');
    }

    const contentObj = content as Record<string, unknown>;

    // Check all required sections exist
    const requiredSections = ['hero', 'featured', 'howItWorks', 'trust', 'benefits', 'cta', 'footer'];
    
    for (const section of requiredSections) {
      if (!this.hasProperty(contentObj, section)) {
        throw new Error(`Missing required section: ${section}`);
      }
      
      if (!contentObj[section] || typeof contentObj[section] !== 'object') {
        throw new Error(`Section '${section}' must be a valid object`);
      }
    }

    const typedContent = contentObj as unknown as LandingPageContent;

    // Validate hero section
    this.validateHeroSection(typedContent.hero);
    
    // Validate featured section
    this.validateFeaturedSection(typedContent.featured);
    
    // Validate howItWorks section
    this.validateHowItWorksSection(typedContent.howItWorks);
    
    // Validate trust section
    this.validateTrustSection(typedContent.trust);
    
    // Validate benefits section
    this.validateBenefitsSection(typedContent.benefits);
    
    // Validate CTA section
    this.validateCTASection(typedContent.cta);
    
    // Validate footer section
    this.validateFooterSection(typedContent.footer);
  }

  private validateHeroSection(hero: unknown): void {
    if (!hero || typeof hero !== 'object') {
      throw new Error('Hero section must be a valid object');
    }

    const heroObj = hero as Record<string, unknown>;
    const requiredFields = ['headline', 'subheadline', 'description', 'cta', 'media'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(heroObj, field)) {
        throw new Error(`Hero section missing required field: ${field}`);
      }
    }

    // Validate strings are non-empty
    if (!heroObj.headline || typeof heroObj.headline !== 'string' || heroObj.headline.trim() === '') {
      throw new Error('Hero headline must be a non-empty string');
    }
    
    if (!heroObj.subheadline || typeof heroObj.subheadline !== 'string' || heroObj.subheadline.trim() === '') {
      throw new Error('Hero subheadline must be a non-empty string');
    }
    
    if (!heroObj.description || typeof heroObj.description !== 'string' || heroObj.description.trim() === '') {
      throw new Error('Hero description must be a non-empty string');
    }

    // Validate CTA array
    if (!Array.isArray(heroObj.cta)) {
      throw new Error('Hero CTA must be an array');
    }
    
    for (const cta of heroObj.cta) {
      this.validateCTAButton(cta, 'Hero CTA');
    }

    // Validate media asset
    this.validateMediaAsset(heroObj.media, 'Hero media');
  }

  private validateFeaturedSection(featured: unknown): void {
    if (!featured || typeof featured !== 'object') {
      throw new Error('Featured section must be a valid object');
    }

    const featuredObj = featured as Record<string, unknown>;
    const requiredFields = ['title', 'subtitle', 'categories'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(featuredObj, field)) {
        throw new Error(`Featured section missing required field: ${field}`);
      }
    }

    if (!featuredObj.title || typeof featuredObj.title !== 'string' || featuredObj.title.trim() === '') {
      throw new Error('Featured title must be a non-empty string');
    }
    
    if (!featuredObj.subtitle || typeof featuredObj.subtitle !== 'string' || featuredObj.subtitle.trim() === '') {
      throw new Error('Featured subtitle must be a non-empty string');
    }

    if (!Array.isArray(featuredObj.categories)) {
      throw new Error('Featured categories must be an array');
    }

    for (const category of featuredObj.categories) {
      this.validateCategoryItem(category);
    }
  }

  private validateHowItWorksSection(howItWorks: unknown): void {
    if (!howItWorks || typeof howItWorks !== 'object') {
      throw new Error('HowItWorks section must be a valid object');
    }

    const howItWorksObj = howItWorks as Record<string, unknown>;
    const requiredFields = ['title', 'subtitle', 'steps'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(howItWorksObj, field)) {
        throw new Error(`HowItWorks section missing required field: ${field}`);
      }
    }

    if (!howItWorksObj.title || typeof howItWorksObj.title !== 'string' || howItWorksObj.title.trim() === '') {
      throw new Error('HowItWorks title must be a non-empty string');
    }
    
    if (!howItWorksObj.subtitle || typeof howItWorksObj.subtitle !== 'string' || howItWorksObj.subtitle.trim() === '') {
      throw new Error('HowItWorks subtitle must be a non-empty string');
    }

    if (!Array.isArray(howItWorksObj.steps)) {
      throw new Error('HowItWorks steps must be an array');
    }

    for (const step of howItWorksObj.steps) {
      this.validateStepItem(step);
    }
  }

  private validateTrustSection(trust: unknown): void {
    if (!trust || typeof trust !== 'object') {
      throw new Error('Trust section must be a valid object');
    }

    const trustObj = trust as Record<string, unknown>;
    const requiredFields = ['title', 'stats', 'testimonials'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(trustObj, field)) {
        throw new Error(`Trust section missing required field: ${field}`);
      }
    }

    if (!trustObj.title || typeof trustObj.title !== 'string' || trustObj.title.trim() === '') {
      throw new Error('Trust title must be a non-empty string');
    }

    if (!Array.isArray(trustObj.stats)) {
      throw new Error('Trust stats must be an array');
    }

    if (!Array.isArray(trustObj.testimonials)) {
      throw new Error('Trust testimonials must be an array');
    }

    for (const stat of trustObj.stats) {
      this.validateStatItem(stat);
    }

    for (const testimonial of trustObj.testimonials) {
      this.validateTestimonialItem(testimonial);
    }
  }

  private validateBenefitsSection(benefits: unknown): void {
    if (!benefits || typeof benefits !== 'object') {
      throw new Error('Benefits section must be a valid object');
    }

    const benefitsObj = benefits as Record<string, unknown>;
    const requiredFields = ['title', 'subtitle', 'items'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(benefitsObj, field)) {
        throw new Error(`Benefits section missing required field: ${field}`);
      }
    }

    if (!benefitsObj.title || typeof benefitsObj.title !== 'string' || benefitsObj.title.trim() === '') {
      throw new Error('Benefits title must be a non-empty string');
    }
    
    if (!benefitsObj.subtitle || typeof benefitsObj.subtitle !== 'string' || benefitsObj.subtitle.trim() === '') {
      throw new Error('Benefits subtitle must be a non-empty string');
    }

    if (!Array.isArray(benefitsObj.items)) {
      throw new Error('Benefits items must be an array');
    }

    for (const item of benefitsObj.items) {
      this.validateBenefitItem(item);
    }
  }

  private validateCTASection(cta: unknown): void {
    if (!cta || typeof cta !== 'object') {
      throw new Error('CTA section must be a valid object');
    }

    const ctaObj = cta as Record<string, unknown>;
    const requiredFields = ['headline', 'description', 'cta'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(ctaObj, field)) {
        throw new Error(`CTA section missing required field: ${field}`);
      }
    }

    if (!ctaObj.headline || typeof ctaObj.headline !== 'string' || ctaObj.headline.trim() === '') {
      throw new Error('CTA headline must be a non-empty string');
    }
    
    if (!ctaObj.description || typeof ctaObj.description !== 'string' || ctaObj.description.trim() === '') {
      throw new Error('CTA description must be a non-empty string');
    }

    this.validateCTAButton(ctaObj.cta, 'CTA button');
  }

  private validateFooterSection(footer: unknown): void {
    if (!footer || typeof footer !== 'object') {
      throw new Error('Footer section must be a valid object');
    }

    const footerObj = footer as Record<string, unknown>;
    const requiredFields = ['logo', 'tagline', 'sections', 'social', 'copyright'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(footerObj, field)) {
        throw new Error(`Footer section missing required field: ${field}`);
      }
    }

    if (!footerObj.logo || typeof footerObj.logo !== 'string' || footerObj.logo.trim() === '') {
      throw new Error('Footer logo must be a non-empty string');
    }
    
    if (!footerObj.tagline || typeof footerObj.tagline !== 'string' || footerObj.tagline.trim() === '') {
      throw new Error('Footer tagline must be a non-empty string');
    }
    
    if (!footerObj.copyright || typeof footerObj.copyright !== 'string' || footerObj.copyright.trim() === '') {
      throw new Error('Footer copyright must be a non-empty string');
    }

    if (!Array.isArray(footerObj.sections)) {
      throw new Error('Footer sections must be an array');
    }

    if (!Array.isArray(footerObj.social)) {
      throw new Error('Footer social must be an array');
    }
  }

  private validateMediaAsset(media: unknown, context: string): void {
    if (!media || typeof media !== 'object') {
      throw new Error(`${context} must be a valid object`);
    }

    const mediaObj = media as Record<string, unknown>;
    
    if (!this.hasProperty(mediaObj, 'type')) {
      throw new Error(`${context} missing required field: type`);
    }
    
    if (!this.hasProperty(mediaObj, 'src')) {
      throw new Error(`${context} missing required field: src`);
    }

    const validTypes = ['image', 'video', 'youtube'];
    if (!validTypes.includes(mediaObj.type as string)) {
      throw new Error(`${context} type must be one of: ${validTypes.join(', ')}`);
    }

    if (!mediaObj.src || typeof mediaObj.src !== 'string' || mediaObj.src.trim() === '') {
      throw new Error(`${context} src must be a non-empty string`);
    }

    // For youtube type, validate youtubeId
    if (mediaObj.type === 'youtube') {
      if (!this.hasProperty(mediaObj, 'youtubeId') || !mediaObj.youtubeId || typeof mediaObj.youtubeId !== 'string' || mediaObj.youtubeId.trim() === '') {
        throw new Error(`${context} with type 'youtube' must have a non-empty youtubeId`);
      }
    }
  }

  private validateCTAButton(cta: unknown, context: string): void {
    if (!cta || typeof cta !== 'object') {
      throw new Error(`${context} must be a valid object`);
    }

    const ctaObj = cta as Record<string, unknown>;
    const requiredFields = ['text', 'href', 'variant'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(ctaObj, field)) {
        throw new Error(`${context} missing required field: ${field}`);
      }
    }

    if (!ctaObj.text || typeof ctaObj.text !== 'string' || ctaObj.text.trim() === '') {
      throw new Error(`${context} text must be a non-empty string`);
    }
    
    if (!ctaObj.href || typeof ctaObj.href !== 'string' || ctaObj.href.trim() === '') {
      throw new Error(`${context} href must be a non-empty string`);
    }

    const validVariants = ['primary', 'secondary', 'outline'];
    if (!validVariants.includes(ctaObj.variant as string)) {
      throw new Error(`${context} variant must be one of: ${validVariants.join(', ')}`);
    }
  }

  private validateCategoryItem(category: unknown): void {
    if (!category || typeof category !== 'object') {
      throw new Error('Category item must be a valid object');
    }

    const categoryObj = category as Record<string, unknown>;
    const requiredFields = ['id', 'title', 'description', 'image', 'itemCount', 'href'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(categoryObj, field)) {
        throw new Error(`Category item missing required field: ${field}`);
      }
    }

    const stringFields = ['id', 'title', 'description', 'image', 'href'];
    for (const field of stringFields) {
      if (!categoryObj[field] || typeof categoryObj[field] !== 'string' || (categoryObj[field] as string).trim() === '') {
        throw new Error(`Category item ${field} must be a non-empty string`);
      }
    }

    if (typeof categoryObj.itemCount !== 'number' || categoryObj.itemCount < 0) {
      throw new Error('Category item itemCount must be a non-negative number');
    }
  }

  private validateStepItem(step: unknown): void {
    if (!step || typeof step !== 'object') {
      throw new Error('Step item must be a valid object');
    }

    const stepObj = step as Record<string, unknown>;
    const requiredFields = ['step', 'title', 'description', 'icon'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(stepObj, field)) {
        throw new Error(`Step item missing required field: ${field}`);
      }
    }

    if (typeof stepObj.step !== 'number' || stepObj.step <= 0) {
      throw new Error('Step item step must be a positive number');
    }

    const stringFields = ['title', 'description', 'icon'];
    for (const field of stringFields) {
      if (!stepObj[field] || typeof stepObj[field] !== 'string' || (stepObj[field] as string).trim() === '') {
        throw new Error(`Step item ${field} must be a non-empty string`);
      }
    }
  }

  private validateStatItem(stat: unknown): void {
    if (!stat || typeof stat !== 'object') {
      throw new Error('Stat item must be a valid object');
    }

    const statObj = stat as Record<string, unknown>;
    const requiredFields = ['value', 'label'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(statObj, field)) {
        throw new Error(`Stat item missing required field: ${field}`);
      }
    }

    if (!statObj.value || typeof statObj.value !== 'string' || statObj.value.trim() === '') {
      throw new Error('Stat item value must be a non-empty string');
    }
    
    if (!statObj.label || typeof statObj.label !== 'string' || statObj.label.trim() === '') {
      throw new Error('Stat item label must be a non-empty string');
    }
  }

  private validateTestimonialItem(testimonial: unknown): void {
    if (!testimonial || typeof testimonial !== 'object') {
      throw new Error('Testimonial item must be a valid object');
    }

    const testimonialObj = testimonial as Record<string, unknown>;
    const requiredFields = ['id', 'name', 'role', 'company', 'avatar', 'rating', 'text'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(testimonialObj, field)) {
        throw new Error(`Testimonial item missing required field: ${field}`);
      }
    }

    const stringFields = ['id', 'name', 'role', 'avatar', 'text'];
    for (const field of stringFields) {
      if (!testimonialObj[field] || typeof testimonialObj[field] !== 'string' || (testimonialObj[field] as string).trim() === '') {
        throw new Error(`Testimonial item ${field} must be a non-empty string`);
      }
    }

    // Company can be empty string
    if (typeof testimonialObj.company !== 'string') {
      throw new Error('Testimonial item company must be a string');
    }

    if (typeof testimonialObj.rating !== 'number' || testimonialObj.rating < 1 || testimonialObj.rating > 5) {
      throw new Error('Testimonial item rating must be a number between 1 and 5');
    }
  }

  private validateBenefitItem(benefit: unknown): void {
    if (!benefit || typeof benefit !== 'object') {
      throw new Error('Benefit item must be a valid object');
    }

    const benefitObj = benefit as Record<string, unknown>;
    const requiredFields = ['id', 'title', 'description', 'icon'];
    
    for (const field of requiredFields) {
      if (!this.hasProperty(benefitObj, field)) {
        throw new Error(`Benefit item missing required field: ${field}`);
      }
    }

    const stringFields = ['id', 'title', 'description', 'icon'];
    for (const field of stringFields) {
      if (!benefitObj[field] || typeof benefitObj[field] !== 'string' || (benefitObj[field] as string).trim() === '') {
        throw new Error(`Benefit item ${field} must be a non-empty string`);
      }
    }
  }
}
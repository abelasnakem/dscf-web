// Type definitions for the marketplace landing page

export type MediaType = 'image' | 'video' | 'youtube';

export interface MediaAsset {
  type: MediaType;
  src: string;
  alt?: string;
  thumbnail?: string;
  youtubeId?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  cta: CTAButton[];
  media: MediaAsset;
  backgroundImage?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  href: string;
}

export interface StepItem {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  cta: CTAButton;
  backgroundImage?: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterContent {
  logo: string;
  tagline: string;
  sections: FooterSection[];
  social: {
    platform: string;
    href: string;
    icon: string;
  }[];
  copyright: string;
}

export interface LandingPageContent {
  hero: HeroContent;
  featured: {
    title: string;
    subtitle: string;
    categories: CategoryItem[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  trust: {
    title: string;
    stats: StatItem[];
    testimonials: TestimonialItem[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitItem[];
  };
  cta: CTAContent;
  footer: FooterContent;
}

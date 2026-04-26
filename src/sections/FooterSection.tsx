import React from 'react';
import type { FooterContent } from '@/data/types';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Grid } from '@/components/common/Grid';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { cn } from '@/lib/utils';

export interface FooterSectionProps {
  content: FooterContent;
  className?: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  content,
  className,
}) => {
  const { logo, tagline, sections, social, copyright } = content;

  return (
    <footer className={cn('bg-secondary text-white', className)}>
      <Section spacing="lg" background="default" className="bg-transparent">
        <Container size="xl">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="w-32 h-12 mb-4">
                  <ResponsiveImage
                    src={logo}
                    alt="Company Logo"
                    className="w-full h-full"
                    aspectRatio="8/3"
                  />
                </div>
                <p className="text-white/80 leading-relaxed max-w-md">
                  {tagline}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {social.map((socialLink, index) => (
                  <a
                    key={index}
                    href={socialLink.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={`Follow us on ${socialLink.platform}`}
                  >
                    <span className="text-sm">
                      {socialLink.icon === 'facebook' && '📘'}
                      {socialLink.icon === 'twitter' && '🐦'}
                      {socialLink.icon === 'instagram' && '📷'}
                      {socialLink.icon === 'linkedin' && '💼'}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Link Sections */}
            <div className="lg:col-span-3">
              <Grid
                columns={{
                  mobile: 2,
                  tablet: 4,
                  desktop: 4,
                }}
                gap="2rem"
              >
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-white mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-white/70 hover:text-white transition-colors text-sm"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </Section>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <Container size="xl">
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              {copyright}
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
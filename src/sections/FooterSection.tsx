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
    <footer id="footer" className={cn('bg-gradient-to-b from-secondary to-secondary-dark text-white', className)}>
      <Section spacing="lg" background="default" className="bg-transparent">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
            {/* Logo and Tagline */}
            <div className="md:col-span-3 lg:col-span-2">
              <div className="mb-4 md:mb-6">
                <div className="w-28 h-10 md:w-32 md:h-12 mb-3 md:mb-4">
                  <ResponsiveImage
                    src={logo}
                    alt="Company Logo"
                    className="w-full h-full"
                    aspectRatio="8/3"
                  />
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-md">
                  {tagline}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 md:gap-4">
                {social.map((socialLink, index) => (
                  <a
                    key={index}
                    href={socialLink.href}
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                    aria-label={`Follow us on ${socialLink.platform}`}
                  >
                    <i 
                      className={`text-xs md:text-sm text-white ${
                        socialLink.icon === 'facebook' ? 'fab fa-facebook-f' :
                        socialLink.icon === 'twitter' ? 'fab fa-twitter' :
                        socialLink.icon === 'instagram' ? 'fab fa-instagram' :
                        socialLink.icon === 'linkedin' ? 'fab fa-linkedin-in' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Link Sections */}
            <div className="md:col-span-3 lg:col-span-3">
              <Grid
                columns={{
                  mobile: 2,
                  tablet: 4,
                  desktop: 4,
                }}
                gap="1.5rem"
              >
                {sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-sm md:text-base font-semibold text-white mb-3 md:mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-xs md:text-sm text-white/70 hover:text-white hover:underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm inline-block"
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
          <div className="py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 text-xs md:text-sm text-center sm:text-left">
              {copyright}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              <a 
                href="/privacy" 
                className="text-white/60 hover:text-white hover:underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-white/60 hover:text-white hover:underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-white/60 hover:text-white hover:underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
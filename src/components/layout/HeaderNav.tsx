import React from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Categories', href: '#categories' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'Benefits', href: '#benefits' },
];

export interface HeaderNavProps {
  className?: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  return (
    <header className={cn('sticky top-0 z-50', className)}>
      <div className="border-b border-white/30 bg-white/75 backdrop-blur-md">
        <Container size="xl" className="flex items-center justify-between py-3">
          <a href="#hero" className="flex items-center" aria-label="Go to top">
            <div className="h-8 w-36 sm:h-9 sm:w-44">
              <ResponsiveImage
                src="/images/logo.png"
                alt="Kegebeya Marketplace"
                className="h-full w-full"
                aspectRatio="8/3"
                lazy={false}
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-textSecondary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#cta">Get Started</a>
            </Button>
            <a
              href="#cta"
              className="sm:hidden text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              Start
            </a>
          </div>
        </Container>
      </div>

      <div className="border-b border-white/10 bg-white/60 backdrop-blur">
        <Container size="xl" className="md:hidden py-2">
          <nav className="flex items-center gap-4 overflow-x-auto text-xs font-semibold uppercase tracking-[0.12em] text-textSecondary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#footer"
              className="whitespace-nowrap transition-colors hover:text-primary"
            >
              Footer
            </a>
          </nav>
        </Container>
      </div>

      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary/60" />
    </header>
  );
};

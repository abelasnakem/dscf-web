import { useState, useEffect } from 'react';

export interface UseMediaQueryReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  matches: (query: string) => boolean;
}

// Breakpoint definitions
const BREAKPOINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(min-width: 768px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
} as const;

export function useMediaQuery(): UseMediaQueryReturn {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Custom matches function for arbitrary queries
  const matches = (query: string): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    const updateBreakpoints = () => {
      setIsMobile(window.matchMedia(BREAKPOINTS.mobile).matches);
      setIsTablet(window.matchMedia(BREAKPOINTS.tablet).matches);
      setIsDesktop(window.matchMedia(BREAKPOINTS.desktop).matches);
    };

    // Set initial values
    updateBreakpoints();

    // Create media query lists
    const mobileQuery = window.matchMedia(BREAKPOINTS.mobile);
    const tabletQuery = window.matchMedia(BREAKPOINTS.tablet);
    const desktopQuery = window.matchMedia(BREAKPOINTS.desktop);

    // Add listeners
    const handleChange = () => updateBreakpoints();
    
    mobileQuery.addEventListener('change', handleChange);
    tabletQuery.addEventListener('change', handleChange);
    desktopQuery.addEventListener('change', handleChange);

    // Cleanup function
    return () => {
      mobileQuery.removeEventListener('change', handleChange);
      tabletQuery.removeEventListener('change', handleChange);
      desktopQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    matches,
  };
}
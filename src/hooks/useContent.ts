import { useMemo } from 'react';
import type { LandingPageContent } from '@/data/types';
import { ContentManager, landingPageContent } from '@/data';

export interface UseContentReturn {
  content: LandingPageContent;
  getSection: <K extends keyof LandingPageContent>(
    section: K
  ) => LandingPageContent[K];
  isLoading: boolean;
  error: Error | null;
}

// Singleton ContentManager instance
let contentManagerInstance: ContentManager | null = null;

const getContentManager = (): ContentManager => {
  if (!contentManagerInstance) {
    contentManagerInstance = new ContentManager(landingPageContent);
  }
  return contentManagerInstance;
};

export function useContent(): UseContentReturn {
  const { content, error } = useMemo(() => {
    try {
      const manager = getContentManager();
      return {
        content: manager.getContent(),
        error: null,
      };
    } catch (err) {
      return {
        content: landingPageContent,
        error: err instanceof Error ? err : new Error('Failed to load content'),
      };
    }
  }, []);

  const getSection = <K extends keyof LandingPageContent>(
    section: K
  ): LandingPageContent[K] => {
    const manager = getContentManager();
    return manager.getSectionContent(section);
  };

  return {
    content,
    getSection,
    isLoading: false,
    error,
  };
}
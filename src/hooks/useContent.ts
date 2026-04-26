import { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [content, setContent] = useState<LandingPageContent>(landingPageContent);

  useEffect(() => {
    try {
      setIsLoading(true);
      setError(null);
      
      const manager = getContentManager();
      const loadedContent = manager.getContent();
      setContent(loadedContent);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load content'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getSection = <K extends keyof LandingPageContent>(
    section: K
  ): LandingPageContent[K] => {
    try {
      const manager = getContentManager();
      return manager.getSectionContent(section);
    } catch (err) {
      console.error(`Error getting section ${String(section)}:`, err);
      throw err;
    }
  };

  return {
    content,
    getSection,
    isLoading,
    error,
  };
}
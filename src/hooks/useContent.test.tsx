import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useContent } from './useContent';

describe('useContent', () => {
  it('should return content object', () => {
    const { result } = renderHook(() => useContent());

    expect(result.current.content).toBeDefined();
    expect(result.current.content.hero).toBeDefined();
    expect(result.current.content.featured).toBeDefined();
    expect(result.current.content.howItWorks).toBeDefined();
    expect(result.current.content.trust).toBeDefined();
    expect(result.current.content.benefits).toBeDefined();
    expect(result.current.content.cta).toBeDefined();
    expect(result.current.content.footer).toBeDefined();
  });

  it('should return getSection function', () => {
    const { result } = renderHook(() => useContent());

    expect(result.current.getSection).toBeDefined();
    expect(typeof result.current.getSection).toBe('function');
  });

  it('should return isLoading state', () => {
    const { result } = renderHook(() => useContent());

    expect(result.current.isLoading).toBeDefined();
    expect(typeof result.current.isLoading).toBe('boolean');
  });

  it('should return error state', () => {
    const { result } = renderHook(() => useContent());

    expect(result.current.error).toBeNull();
  });

  it('should get specific section content', () => {
    const { result } = renderHook(() => useContent());

    const heroContent = result.current.getSection('hero');
    expect(heroContent).toBeDefined();
    expect(heroContent.headline).toBeDefined();
    expect(heroContent.subheadline).toBeDefined();
    expect(heroContent.description).toBeDefined();
  });

  it('should get featured section content', () => {
    const { result } = renderHook(() => useContent());

    const featuredContent = result.current.getSection('featured');
    expect(featuredContent).toBeDefined();
    expect(featuredContent.title).toBeDefined();
    expect(featuredContent.subtitle).toBeDefined();
    expect(Array.isArray(featuredContent.categories)).toBe(true);
  });
});

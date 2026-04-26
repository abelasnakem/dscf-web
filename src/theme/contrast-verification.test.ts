import { describe, it, expect } from 'vitest';
import { themeColors } from './colors';

/**
 * Calculate relative luminance for WCAG contrast ratio
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
function getLuminance(hexColor: string): number {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;

  const [rs, gs, bs] = [r, g, b].map((c) => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

describe('Theme Color Contrast Verification', () => {
  describe('Primary color (#800000 - Maroon) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AAA for normal text)', () => {
      const ratio = getContrastRatio(themeColors.primary, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(7); // WCAG AAA requires 7:1 for normal text
    });

    it('should have sufficient contrast with white text (WCAG AA for large text)', () => {
      const ratio = getContrastRatio(themeColors.primary, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1 for large text
    });
  });

  describe('Secondary color (#0A1F44 - Navy) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AAA for normal text)', () => {
      const ratio = getContrastRatio(themeColors.secondary, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(7); // WCAG AAA requires 7:1 for normal text
    });

    it('should have sufficient contrast with white text (WCAG AA for large text)', () => {
      const ratio = getContrastRatio(themeColors.secondary, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1 for large text
    });
  });

  describe('Background color (#F9F8F7) contrast ratios', () => {
    it('should have sufficient contrast with primary text color (WCAG AAA)', () => {
      const ratio = getContrastRatio(themeColors.background, themeColors.textPrimary);
      expect(ratio).toBeGreaterThanOrEqual(7); // WCAG AAA requires 7:1
    });

    it('should have sufficient contrast with secondary text color (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.background, themeColors.textSecondary);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });
  });

  describe('Surface color (#FFFFFF) contrast ratios', () => {
    it('should have sufficient contrast with primary text color (WCAG AAA)', () => {
      const ratio = getContrastRatio(themeColors.surface, themeColors.textPrimary);
      expect(ratio).toBeGreaterThanOrEqual(7); // WCAG AAA requires 7:1
    });

    it('should have sufficient contrast with secondary text color (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.surface, themeColors.textSecondary);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });

    it('should have sufficient contrast with primary color (for borders)', () => {
      const ratio = getContrastRatio(themeColors.surface, themeColors.primary);
      expect(ratio).toBeGreaterThanOrEqual(3); // WCAG requires 3:1 for UI components
    });
  });

  describe('Primary Light color (#B22222) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.primaryLight, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });
  });

  describe('Error color (#C53030) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.error, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });
  });

  describe('Success color (#2F855A) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.success, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });
  });

  describe('Warning color (#DD6B20) contrast ratios', () => {
    it('should have sufficient contrast with white text (WCAG AA)', () => {
      const ratio = getContrastRatio(themeColors.warning, themeColors.textWhite);
      expect(ratio).toBeGreaterThanOrEqual(4.5); // WCAG AA requires 4.5:1
    });
  });

  describe('Border color (#D9CFCF) contrast ratios', () => {
    it('should have sufficient contrast with surface (WCAG UI component requirement)', () => {
      const ratio = getContrastRatio(themeColors.border, themeColors.surface);
      expect(ratio).toBeGreaterThanOrEqual(3); // WCAG requires 3:1 for UI components
    });
  });
});

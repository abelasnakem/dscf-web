import { createContext } from 'react';
import type { ThemeColors } from './colors';
import type { TypographyScale } from './typography';
import type { SpacingScale } from './spacing';

export interface ThemeContextType {
  colors: ThemeColors;
  typography: TypographyScale;
  spacing: SpacingScale;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

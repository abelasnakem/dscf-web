import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ThemeColors } from './colors';
import type { TypographyScale } from './typography';
import type { SpacingScale } from './spacing';
import { themeColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';

interface ThemeContextType {
  colors: ThemeColors;
  typography: TypographyScale;
  spacing: SpacingScale;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeValue: ThemeContextType = {
    colors: themeColors,
    typography,
    spacing,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
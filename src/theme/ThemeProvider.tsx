import type { FC, ReactNode } from 'react';
import { themeColors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { ThemeContext, type ThemeContextType } from './themeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
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

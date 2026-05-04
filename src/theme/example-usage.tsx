import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { useTheme } from './useTheme';

// Example component that uses the theme
const ThemedButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors, spacing, typography } = useTheme();
  
  return (
    <button
      style={{
        backgroundColor: colors.primary,
        color: colors.textWhite,
        padding: `${spacing.sm} ${spacing.md}`,
        fontSize: typography.body,
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 600,
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = colors.primaryLight;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = colors.primary;
      }}
    >
      {children}
    </button>
  );
};

// Example component showing typography usage
const ThemedHeading: React.FC<{ level: 'h1' | 'h2' | 'h3' | 'h4'; children: React.ReactNode }> = ({ 
  level, 
  children 
}) => {
  const { colors, typography } = useTheme();
  
  const Component = level;
  
  return (
    <Component
      style={{
        fontSize: typography[level],
        color: colors.textPrimary,
        margin: 0,
        fontWeight: level === 'h1' || level === 'h2' ? 700 : 600,
      }}
    >
      {children}
    </Component>
  );
};

// Example of using theme in a styled component
const ThemedCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { colors, spacing } = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '12px',
        padding: spacing.lg,
        boxShadow: `0 4px 6px ${colors.shadow}`,
      }}
    >
      {children}
    </div>
  );
};

// Example usage in an app
export const ExampleApp: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <ThemedCard>
          <ThemedHeading level="h1">Welcome to Our Marketplace</ThemedHeading>
          <ThemedHeading level="h2">Find Amazing Deals</ThemedHeading>
          
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <ThemedButton>Start Selling</ThemedButton>
            <ThemedButton>Browse Items</ThemedButton>
          </div>
        </ThemedCard>
      </div>
    </ThemeProvider>
  );
};
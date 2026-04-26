import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';

// Test component that uses the theme
const TestComponent = () => {
  const { colors, typography, spacing } = useTheme();
  
  return (
    <div>
      <div data-testid="primary-color">{colors.primary}</div>
      <div data-testid="h1-size">{typography.h1}</div>
      <div data-testid="md-spacing">{spacing.md}</div>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('provides theme values to child components', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('primary-color')).toHaveTextContent('#800000');
    expect(screen.getByTestId('h1-size')).toHaveTextContent('3.5rem');
    expect(screen.getByTestId('md-spacing')).toHaveTextContent('1.5rem');
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = () => {};

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    console.error = originalError;
  });
});
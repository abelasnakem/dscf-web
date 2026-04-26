# Theme System

This directory contains the theme system for the marketplace landing page, providing centralized access to colors, typography, and spacing throughout the application.

## Components

### ThemeProvider
React context provider that makes theme values available to all child components.

### useTheme Hook
Custom hook for accessing theme values in components.

## Usage

### 1. Wrap your app with ThemeProvider

```tsx
import { ThemeProvider } from './theme/ThemeProvider';
import App from './App';

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

### 2. Use the useTheme hook in components

```tsx
import { useTheme } from './theme/ThemeProvider';

const MyComponent = () => {
  const { colors, typography, spacing } = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: colors.primary,
        color: colors.textWhite,
        padding: spacing.md,
        fontSize: typography.h2,
      }}
    >
      Themed content
    </div>
  );
};
```

### 3. Alternative: Import theme objects directly

```tsx
import { themeColors, typography, spacing } from './theme';

const MyComponent = () => {
  return (
    <div
      style={{
        backgroundColor: themeColors.primary,
        padding: spacing.lg,
        fontSize: typography.h1,
      }}
    >
      Direct theme usage
    </div>
  );
};
```

## Theme Structure

### Colors
- `primary`, `primaryLight`, `primaryDark` - Main brand colors (maroon)
- `secondary`, `secondaryLight`, `secondaryDark` - Secondary colors (navy)
- `background`, `surface` - Background colors
- `textPrimary`, `textSecondary`, `textDisabled`, `textWhite` - Text colors
- `success`, `warning`, `error` - Status colors
- `border`, `shadow` - UI element colors

### Typography
- `h1` - 3.5rem (56px) - Main headlines
- `h2` - 2.5rem (40px) - Section headers
- `h3` - 1.875rem (30px) - Subsection headers
- `h4` - 1.5rem (24px) - Component headers
- `body` - 1rem (16px) - Body text
- `small` - 0.875rem (14px) - Small text

### Spacing
- `xs` - 0.5rem (8px) - Minimal spacing
- `sm` - 1rem (16px) - Small spacing
- `md` - 1.5rem (24px) - Medium spacing
- `lg` - 2rem (32px) - Large spacing
- `xl` - 3rem (48px) - Extra large spacing
- `xxl` - 4rem (64px) - Maximum spacing

## Error Handling

The `useTheme` hook will throw an error if used outside of a `ThemeProvider`:

```
Error: useTheme must be used within a ThemeProvider
```

Make sure to wrap your component tree with `ThemeProvider` before using the `useTheme` hook.

## TypeScript Support

All theme objects are fully typed with TypeScript interfaces:
- `ThemeColors` - Interface for color values
- `TypographyScale` - Interface for typography sizes
- `SpacingScale` - Interface for spacing values
- `ThemeContextType` - Interface for the complete theme context

## Examples

See `example-usage.tsx` for complete examples of how to use the theme system in different scenarios.
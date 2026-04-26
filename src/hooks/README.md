# Custom Hooks

## useContent

A React hook that provides easy access to landing page content via the ContentManager.

### Features

- Access to full content object
- Type-safe section retrieval with `getSection` helper
- Loading and error states for future async content loading
- Singleton ContentManager instance for consistent content access
- No prop drilling required

### Usage

```typescript
import { useContent } from './hooks/useContent';

function MyComponent() {
  const { content, getSection, isLoading, error } = useContent();

  // Access full content object
  const heroHeadline = content.hero.headline;

  // Or use getSection for type-safe section access
  const featuredSection = getSection('featured');

  return (
    <div>
      <h1>{heroHeadline}</h1>
      <h2>{featuredSection.title}</h2>
    </div>
  );
}
```

### API

#### Return Value

```typescript
interface UseContentReturn {
  content: LandingPageContent;
  getSection: <K extends keyof LandingPageContent>(
    section: K
  ) => LandingPageContent[K];
  isLoading: boolean;
  error: Error | null;
}
```

- `content`: The complete landing page content object
- `getSection`: Type-safe function to retrieve specific sections
- `isLoading`: Loading state (currently always `false` for static content)
- `error`: Error state for content loading failures

#### Available Sections

- `hero`: Hero section content
- `featured`: Featured categories section
- `howItWorks`: How it works steps section
- `trust`: Trust indicators and testimonials
- `benefits`: Benefits section
- `cta`: Call-to-action section
- `footer`: Footer content

### Examples

See `useContent.example.tsx` for comprehensive usage examples.

### Implementation Details

- Uses a singleton ContentManager instance to ensure consistent content access
- Content is loaded from `src/data/content.config.ts`
- ContentManager validates content structure on initialization
- Hook is designed to support future async content loading (CMS integration)

# Marketplace Landing Page

A modern, high-conversion landing page for a marketplace platform built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

- **7 Fully Responsive Sections**: Hero, Featured Categories, How It Works, Trust, Benefits, CTA, Footer
- **Content-Driven Architecture**: Easy content updates via JSON configuration
- **Mobile-First Design**: Optimized for all screen sizes (375px, 768px, 1024px+)
- **Scroll Animations**: Smooth, performant animations using Intersection Observer
- **Lazy Loading**: Optimized media loading for better performance
- **Theme System**: Centralized maroon & navy color scheme
- **Type-Safe**: Full TypeScript support with comprehensive interfaces
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation

## 🎨 Design System

### Colors
- **Primary (Maroon)**: #800000
- **Secondary (Navy)**: #0A1F44
- **Background**: #F9F8F7
- **Surface**: #FFFFFF

### Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React

## 📦 Bundle Sizes

```
✓ JavaScript: 257 KB (78.6 KB gzipped)
✓ CSS: 33 KB (6.3 KB gzipped)
✓ Total: ~85 KB gzipped
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── common/          # Reusable components
│   └── layout/          # Layout components
├── sections/            # Landing page sections
├── theme/               # Theme configuration
├── data/                # Content management
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

## 🎯 Key Components

### Sections
- **HeroSection**: Above-the-fold content with CTA and media
- **FeaturedSection**: Category showcase with hover effects
- **HowItWorksSection**: Step-by-step process explanation
- **TrustSection**: Statistics and testimonials
- **BenefitsSection**: Value proposition cards
- **CTASection**: Conversion-focused call-to-action
- **FooterSection**: Navigation and legal links

### Reusable Components
- **MediaPlayer**: Supports image, video, and YouTube
- **ResponsiveImage**: Lazy loading with error handling
- **Grid**: Responsive grid with breakpoint-based columns
- **AnimatedSection**: Scroll-triggered animations
- **Container**: Consistent max-width and padding
- **Section**: Consistent vertical spacing

### Custom Hooks
- **useContent**: Access landing page content
- **useMediaQuery**: Responsive breakpoint detection
- **useIntersectionObserver**: Lazy loading and animations

## 📝 Content Management

Update content in `src/data/content.config.ts`:

```typescript
export const landingPageContent = {
  hero: {
    headline: "Your Headline",
    subheadline: "Your Subheadline",
    description: "Your description",
    cta: [{ text: "Button Text", href: "/link", variant: "primary" }],
    media: { type: "image", src: "/path/to/image.jpg" }
  },
  // ... other sections
};
```

## 🖼️ Adding Images

Replace placeholder paths with real images:

1. **Hero**: `/images/hero/background.jpg`, `/videos/hero-showcase.mp4`
2. **Categories**: `/images/categories/*.jpg` (3 images, 800x600px)
3. **Testimonials**: `/images/testimonials/*.jpg` (2 avatars, 200x200px)
4. **CTA**: `/images/cta/background.jpg` (1920x600px)

See `public/images/PLACEHOLDER_README.md` for detailed specifications.

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality

- **ESLint**: TypeScript + React rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict mode enabled
- **Path Aliases**: Use `@/` for `src/`

## 🎨 Customization

### Theme Colors

Edit `src/theme/colors.ts`:

```typescript
export const themeColors = {
  primary: "#800000",        // Change primary color
  secondary: "#0A1F44",      // Change secondary color
  // ... other colors
};
```

### Typography

Edit `src/theme/typography.ts`:

```typescript
export const typography = {
  h1: "3.5rem",    // Adjust heading sizes
  h2: "2.5rem",
  // ... other sizes
};
```

### Spacing

Edit `src/theme/spacing.ts`:

```typescript
export const spacing = {
  xs: "0.5rem",    // Adjust spacing scale
  sm: "1rem",
  // ... other sizes
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1023px (2 columns)
- **Desktop**: ≥ 1024px (3-4 columns)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels for screen readers
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)

## 🚀 Performance

- Lazy loading for below-fold content
- Optimized bundle sizes
- Code splitting ready
- Compressed assets (gzip)
- Fast build times (~1.5s)

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of a marketplace platform implementation.

## 🤝 Contributing

1. Update content in `src/data/content.config.ts`
2. Add images to `public/images/`
3. Customize theme in `src/theme/`
4. Run `npm run lint` and `npm run format` before committing

## 📚 Documentation

- [Implementation Summary](./IMPLEMENTATION_SUMMARY.md) - Detailed implementation overview
- [Build Report](./BUILD_REPORT.md) - Production build analysis
- [Design Document](./.kiro/specs/marketplace-landing-page/design.md) - Technical design
- [Tasks](./.kiro/specs/marketplace-landing-page/tasks.md) - Implementation tasks

## 🎯 Next Steps

1. Replace placeholder images with real assets
2. Update content in `content.config.ts`
3. Test on different devices and browsers
4. Deploy to production
5. Monitor performance metrics

---

**Built with React, TypeScript, Tailwind CSS, and shadcn/ui**
# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Navigate to http://localhost:5174/
   - Page will auto-reload on file changes

## 📝 Updating Content

All content is managed in a single file: `src/data/content.config.ts`

### Example: Update Hero Section
```typescript
// src/data/content.config.ts
export const landingPageContent: LandingPageContent = {
  hero: {
    headline: "Your new headline here",
    subheadline: "Your new subheadline",
    description: "Your new description",
    // ... rest of content
  },
  // ... other sections
};
```

### Example: Update Featured Categories
```typescript
featured: {
  title: "Featured Categories",
  subtitle: "Browse our popular categories",
  categories: [
    {
      id: "1",
      title: "Electronics",
      description: "Latest gadgets and devices",
      image: "/images/categories/electronics.jpg",
      itemCount: 1250,
      href: "/categories/electronics",
    },
    // Add more categories...
  ],
},
```

### Example: Update Footer Links
```typescript
footer: {
  logo: "/images/logo.svg",
  tagline: "Your marketplace tagline",
  sections: [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        // Add more links...
      ],
    },
    // Add more sections...
  ],
  // ... rest of footer
},
```

## 🎨 Customizing Colors

Theme colors are defined in three places (all synchronized):

### 1. CSS Variables (`src/index.css`)
```css
@theme {
  --color-primary: #800000;      /* Maroon */
  --color-secondary: #0a1f44;    /* Navy */
  --color-background: #f9f8f7;   /* Off-white */
  /* ... more colors */
}
```

### 2. Tailwind Config (`tailwind.config.js`)
```javascript
colors: {
  primary: {
    DEFAULT: "#800000",
    light: "#B22222",
    dark: "#4B0000",
  },
  secondary: {
    DEFAULT: "#0A1F44",
    light: "#274472",
    dark: "#000B22",
  },
  // ... more colors
}
```

### 3. TypeScript Constants (`src/theme/colors.ts`)
```typescript
export const themeColors: ThemeColors = {
  primary: "#800000",
  secondary: "#0A1F44",
  // ... more colors
};
```

## 📸 Adding Images

1. **Place images in public folder**
   ```
   public/images/
   ├── categories/
   ├── hero/
   ├── testimonials/
   └── logo.svg
   ```

2. **Reference in content config**
   ```typescript
   image: "/images/categories/electronics.jpg"
   ```

3. **Images are automatically lazy-loaded** for below-fold content

## 🔗 Updating Links

All CTA buttons and links use the `href` property:

```typescript
// Hero CTA buttons
cta: [
  {
    text: "Get Started",
    href: "/signup",
    variant: "primary",
  },
  {
    text: "Learn More",
    href: "/about",
    variant: "secondary",
  },
]

// Featured category links
categories: [
  {
    // ...
    href: "/categories/electronics",
  },
]

// Footer links
sections: [
  {
    links: [
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
  },
]
```

## 🧪 Testing

### Development Testing
```bash
# Start dev server
npm run dev

# Open http://localhost:5174/
# Test responsive design with DevTools (F12)
# Test at: 375px (mobile), 768px (tablet), 1440px (desktop)
```

### Code Quality
```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Type checking
npm run type-check
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

The design is mobile-first with these breakpoints:

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

### Testing Responsive Design
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test at: 375px, 768px, 1440px

## 🎯 Key Features

### ✅ Responsive Design
- Automatically adapts to all screen sizes
- Mobile-first approach
- Tested at 375px, 768px, 1440px

### ✅ Accessibility
- WCAG AA/AAA compliant colors
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on all interactive elements

### ✅ Performance
- Lazy loading for below-fold images
- Optimized bundle size (79KB gzipped)
- Fast page load times
- Smooth animations

### ✅ Content Management
- All content in one file
- No coding required to update content
- Type-safe with TypeScript
- Easy to maintain

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build
npm run build

# Drag and drop dist/ folder to Netlify
# Or use Netlify CLI
```

### Deploy to GitHub Pages
```bash
# Build
npm run build

# Push dist/ folder to gh-pages branch
```

## 📚 File Structure

```
src/
├── components/          # Reusable components
├── data/               # Content and types
├── hooks/              # Custom React hooks
├── sections/           # Page sections
├── theme/              # Theme system
├── App.tsx             # Main app component
├── index.css           # Global styles
└── main.tsx            # Entry point

public/
├── images/             # Image assets
└── videos/             # Video assets
```

## 🔧 Common Tasks

### Update Hero Section
1. Edit `src/data/content.config.ts`
2. Find `hero` object
3. Update `headline`, `subheadline`, `description`
4. Save file (auto-reload in dev server)

### Add New Category
1. Edit `src/data/content.config.ts`
2. Find `featured.categories` array
3. Add new category object
4. Save file

### Change Theme Colors
1. Edit `src/index.css` (CSS variables)
2. Edit `tailwind.config.js` (Tailwind colors)
3. Edit `src/theme/colors.ts` (TypeScript constants)
4. Save files (auto-reload)

### Add New Section
1. Create new component in `src/sections/`
2. Add content to `src/data/content.config.ts`
3. Import and add to `src/components/layout/LandingPageLayout.tsx`
4. Style with Tailwind classes

## 🐛 Troubleshooting

### Dev server not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Styles not updating
```bash
# Restart dev server
# Press Ctrl+C to stop
# Run npm run dev again
```

### Build errors
```bash
# Check TypeScript errors
npm run type-check

# Check linting errors
npm run lint

# Fix linting issues
npm run lint:fix
```

### Images not loading
1. Check image path in content config
2. Verify image exists in `public/images/`
3. Check browser console for errors
4. Verify image format (jpg, png, svg, webp)

## 📖 Documentation

- **COMPLETION_SUMMARY.md** - Full project overview
- **TESTING_GUIDE.md** - Testing instructions
- **RESPONSIVE_TEST_GUIDE.md** - Responsive design testing
- **THEME_COLORS_IMPLEMENTATION.md** - Theme system details
- **LAZY_LOADING_IMPLEMENTATION.md** - Performance optimization
- **STYLING_FIX.md** - Tailwind CSS v4 configuration

## 🎓 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React Hooks Guide](https://react.dev/reference/react)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript React Guide](https://www.typescriptlang.org/docs/handbook/react.html)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Guide](https://tailwindcss.com/docs/v4-migration-guide)

### shadcn/ui
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Component Library](https://ui.shadcn.com/docs/components)

## 💡 Tips & Tricks

### Hot Reload
- Changes to content config auto-reload
- Changes to components auto-reload
- Changes to styles auto-reload

### DevTools
- Use React DevTools to inspect components
- Use Network tab to check image loading
- Use Lighthouse for performance audits

### Performance
- Lazy loading is automatic for below-fold images
- Use `npm run build` to check bundle size
- Use `npm run preview` to test production build

### Accessibility
- Test with keyboard (Tab key)
- Test with screen reader (NVDA, JAWS, VoiceOver)
- Use Lighthouse accessibility audit

## 🆘 Support

### Getting Help
1. Check documentation files
2. Review component code comments
3. Check browser console for errors
4. Run `npm run type-check` for TypeScript errors
5. Run `npm run lint` for code quality issues

### Common Issues
- **Styles not applying**: Restart dev server
- **Images not loading**: Check image path and format
- **Build errors**: Run `npm run type-check` and `npm run lint`
- **Performance issues**: Check lazy loading is enabled

---

**Happy coding! 🎉**

For more information, see COMPLETION_SUMMARY.md

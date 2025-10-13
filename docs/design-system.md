# Design System Documentation

This document describes the design tokens used in the Intelligent Punks website project. All tokens are centralized in `src/index.css` using Tailwind CSS v4's `@theme` directive to ensure consistency and maintainability.

> **🎉 Updated for Tailwind CSS v4.1.14** - Configuration now uses CSS instead of JavaScript!

## 🎨 Color Tokens

### Brand Colors
- **Brand Orange**: `brand-orange` / `#FF5100`
  - Usage: Accent color, hover states, highlighted text
  - Classes: `text-brand-orange`, `bg-brand-orange`, `border-brand-orange`

- **Brand Cream**: `brand-cream` / `#ECECE0`
  - Usage: Primary background color
  - Classes: `text-brand-cream`, `bg-brand-cream`, `border-brand-cream`

- **Brand Gray**: `brand-gray` / `#C2C2B9`
  - Usage: Secondary text color
  - Classes: `text-brand-gray`, `bg-brand-gray`, `border-brand-gray`

### Semantic Colors

#### Background
- **Primary**: `background-primary` / `#ECECE0` - Main page background
- **Secondary**: `background-secondary` / `#FFFFFF` - Card/section backgrounds
- **Dark**: `background-dark` / `#000000` - Dark sections, hover states

Usage: `bg-background-primary`, `bg-background-secondary`, `bg-background-dark`

#### Text
- **Primary**: `text-primary` / `#000000` - Main text color
- **Secondary**: `text-secondary` / `#C2C2B9` - Secondary text
- **Accent**: `text-accent` / `#FF5100` - Highlighted text
- **Inverse**: `text-inverse` / `#FFFFFF` - Text on dark backgrounds

Usage: `text-text-primary`, `text-text-secondary`, `text-text-accent`, `text-text-inverse`

#### Border
- **Primary**: `border-primary` / `#000000` - Main borders
- **Secondary**: `border-secondary` / `#FFFFFF` - Light borders
- **Light**: `border-light` / `rgba(0, 0, 0, 0.3)` - Subtle dividers

Usage: `border-border-primary`, `border-border-secondary`, `border-border-light`

---

## 📝 Typography

### Font Families
- **Playfair Display**: `font-playfair`
  - Usage: Headings, display text
  - Import: Google Fonts
  
- **Involve**: `font-involve` (default sans-serif)
  - Usage: Body text, UI elements

### Font Sizes

#### Display Sizes (Headings)
- **XL**: `text-display-xl` - 64px / line-height: 1.25 / weight: 500
  - Usage: Hero titles, main page headings (h1)
  
- **LG**: `text-display-lg` - 48px / line-height: 1.25 / weight: 500
  - Usage: Large headings (h2)
  
- **MD**: `text-display-md` - 32px / line-height: 1.5 / weight: 500
  - Usage: Section titles, card headings (h3)

#### Body Sizes
- **LG**: `text-body-lg` - 20px / line-height: 1.625
  - Usage: Large body text
  
- **Default**: `text-body` - 16px / line-height: 1.625
  - Usage: Standard body text, buttons
  
- **SM**: `text-body-sm` - 14px / line-height: 1.625
  - Usage: Small text, captions

### Line Heights
- `leading-tight` - 1.25
- `leading-normal` - 1.5
- `leading-relaxed` - 1.625
- `leading-loose` - 3

---

## 📏 Spacing & Sizing

### Layout Spacing
- **Section Padding**: `py-section` - 80px vertical padding
- **Container Padding**: `px-container-padding` - 16px horizontal padding

### Max Widths
- **Container**: `max-w-container` - 1392px (1360px content + 16px padding × 2)
- **Content LG**: `max-w-content-lg` - 900px (large content blocks)
- **Content MD**: `max-w-content-md` - 576px (medium content blocks)
- **Content SM**: `max-w-content-sm` - 413px (small content blocks)

### Component Sizes

#### Buttons
- **Small**: `w-button-sm h-button-sm` - 162px × 162px (circular CTA)
- **Large**: `w-button-lg h-button-lg` - 280px × 280px (large circular CTA)

#### Images
- **Large**: `h-image-lg` - 736px
- **Decorative Small**: `h-decorative-sm` - 103px

---

## 🔲 Border Radius
- **Button**: `rounded-button` - Full circle (9999px)
- **Card**: `rounded-card` - 0.5rem (8px)

---

## ⏱️ Transitions

### Duration
- **Default**: `duration-default` - 200ms
- **Slow**: `duration-slow` - 300ms

### Common Patterns
```tsx
// Color transitions
transition-colors duration-default

// Transform transitions
transition-transform duration-slow

// Opacity transitions
transition-opacity duration-default

// Shadow transitions
transition-shadow duration-default
```

---

## 👁️ Opacity
- **Hover**: `opacity-hover` - 0.7
- **Background**: `opacity-background` - 0.1 (for background images)
- **Divider**: `opacity-divider` - 0.3 (for subtle dividers)

---

## 🔄 Migration Guide

### Before (Hardcoded)
```tsx
<section className="bg-[#ECECE0] text-black py-20">
  <div className="container mx-auto px-10 max-w-[1440px]">
    <h1 className="text-[64px] leading-tight font-medium">
      Title
    </h1>
  </div>
</section>
```

### After (Design Tokens)
```tsx
<section className="bg-background-primary text-text-primary py-section">
  <div className="max-w-container mx-auto px-container-padding">
    <h1 className="text-display-xl">
      Title
    </h1>
  </div>
</section>
```

---

## ✅ Benefits

1. **Consistency**: All components use the same design tokens
2. **Maintainability**: Update colors/sizes in one place (`tailwind.config.js`)
3. **Scalability**: Easy to add new tokens or modify existing ones
4. **Readability**: Semantic names make code self-documenting
5. **Performance**: No duplicate CSS, smaller bundle size

---

## 🎯 Best Practices

1. **Always use semantic color names** (`text-text-primary` instead of `text-[#000000]`)
2. **Use component-specific sizes** (`w-button-sm` instead of `w-[162px]`)
3. **Apply consistent spacing** (`py-section` instead of `py-20`)
4. **Use predefined transitions** (`duration-default` instead of `duration-200`)
5. **Avoid inline colors/sizes** unless absolutely unique to a component

---

## 📦 Files Changed (v4 Migration)

- ✅ `src/index.css` - CSS-based configuration with `@theme` directive
- ✅ `vite.config.ts` - Using `@tailwindcss/vite` plugin
- ✅ `postcss.config.js` - Simplified configuration
- ❌ `tailwind.config.js` - Removed (migrated to CSS)
- ✅ `package.json` - Updated to Tailwind CSS v4.1.14
- `src/components/home/HeroSection.tsx` - Refactored
- `src/components/home/AboutSection.tsx` - Refactored
- `src/components/home/NewsSection.tsx` - Refactored
- `src/components/home/FAQSection.tsx` - Refactored
- `src/components/home/FooterSection.tsx` - Refactored
- `src/components/home/HotDealsSection.tsx` - Refactored
- `src/components/home/ServicesSection.tsx` - Refactored
- `src/components/home/StatsSection.tsx` - Refactored

---

## 🔮 Future Improvements

1. ✅ ~~Migrate to CSS-based configuration~~ - **DONE! (v4)**
2. Add dark mode support using CSS variables
3. Create component-specific tokens (button variants, card styles)
4. Add animation/motion tokens with `@starting-style`
5. Utilize v4 features (container queries, modern CSS)

## 📚 Additional Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Migration Guide to v4](./MIGRATION-TO-V4.md)
- [Tailwind CSS v4 Release Notes](https://tailwindcss.com/blog/tailwindcss-v4)


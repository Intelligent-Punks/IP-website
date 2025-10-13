# Layout Structure

## Overview

The project now has a proper layout structure with persistent Header and Footer components that appear on all pages.

## Structure

```
src/
├── components/
│   └── layout/
│       ├── Header.tsx      # Global header with navigation
│       ├── Footer.tsx      # Global footer with contacts and CTA
│       └── Layout.tsx      # Wrapper component that includes Header + children + Footer
├── content/
│   ├── header.ts          # Header content (navigation links, logo)
│   └── footer.ts          # Footer content (CTA, contacts, copyright)
└── App.tsx                # Main app with Layout wrapper
```

## Components

### Layout (`src/components/layout/Layout.tsx`)

Main wrapper component that:
- Wraps all pages with Header and Footer
- Sets up main content area with proper spacing
- Ensures consistent layout across all pages
- Uses dark background by default (`bg-brand-dark`)
- Home page uses dark background, other pages can use light background (`bg-brand-cream`)

### Header (`src/components/layout/Header.tsx`)

Features:
- Fixed position at top of viewport
- Logo linking to home page
- Horizontal navigation menu with:
  - 9 navigation links
  - Active link highlighting
  - Dropdown indicator for Services
  - Bold "Contact us" link
- Mobile menu button (functionality to be implemented)
- Semi-transparent dark background with backdrop blur

Design specs from Figma:
- Font: Involve 400, 16px, line-height 1.33em
- Color: #ECECE0 (brand-cream)
- Gap between items: 47px
- Services has dropdown icon (18x18px arrow-down)
- Contact us is bold (Involve 700)

### Footer (`src/components/layout/Footer.tsx`)

Sections:
1. **CTA Section**
   - Title in bordered button
   - Description text in Playfair Display
2. **Navigation Links**
   - Horizontal list of footer links
3. **Contact Information**
   - Email
   - Location
   - Phone numbers
4. **Social Media**
   - Placeholder icons for Facebook, Instagram, Twitter
5. **Copyright**
   - Copyright notice with proper line breaks

## Content Files

### `src/content/header.ts`

Contains:
- Logo text and alt text
- Navigation items array with:
  - id
  - label
  - href
  - hasDropdown (for Services)
  - isHighlighted (for Contact us)

### `src/content/footer.ts`

Contains:
- CTA section (title, description)
- Navigation links
- Contact details (email, location, phones)
- Social media links
- Copyright text

## Usage

Each page wraps itself in Layout with optional background:

### Page with default black background:
```tsx
export default function HomePage() {
  return (
    <Layout>
      <SEO {...seo} />
      <HeroSection />
      <AboutSection />
    </Layout>
  )
}
```

### Page with light background:
```tsx
export default function AboutPage() {
  return (
    <Layout mainBackground="bg-brand-cream">
      <SEO {...seo} />
      <ContentSection />
      <TeamSection />
    </Layout>
  )
}
```

All pages automatically get the Header and Footer from Layout.

## Migration from Old Structure

**Before:**
- FooterSection was part of HomePageNew
- No header component
- Each page had to manually include footer

**After:**
- Header and Footer are global
- Layout wrapper handles structure
- Pages focus only on their content
- FooterSection removed from home sections
- Footer content extracted to separate file

## Future Enhancements

1. **Mobile Menu**
   - Implement hamburger menu functionality
   - Add mobile navigation drawer

2. **Dropdown Menu**
   - Add Services dropdown with submenu items

3. **Social Icons**
   - Add SVG icons for social media links
   - Connect to actual social media URLs

4. **Scroll Behavior**
   - Add header hide/show on scroll
   - Add active section highlighting in navigation

5. **Animations**
   - Add smooth transitions for mobile menu
   - Add hover effects for navigation items


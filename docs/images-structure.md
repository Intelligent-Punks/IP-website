# Images Structure

## Directory Organization

```
public/images/
├── home/              # Home page specific images
│   ├── hero-main.jpg
│   ├── hero-main.png
│   └── hero-background.png
│
├── sections/          # Section backgrounds and content
│   ├── about-background.png
│   ├── services-background.png
│   ├── news-1.png
│   ├── news-2.png
│   └── news-3.png
│
├── icons/             # SVG icons and small graphics
│   └── (arrow-down, social icons, etc)
│
└── common/            # Shared images across pages
    └── (logos, patterns, etc)
```

## Naming Convention

### Format
`{section}-{element}-{variant}.{ext}`

### Examples
- `hero-background.png` - hero section background
- `services-card-1.jpg` - services section card image
- `news-thumbnail-2.webp` - news item thumbnail
- `about-team-photo.jpg` - about section team photo

### Rules
1. Use lowercase with hyphens
2. Include section name first
3. Add variant/number if multiple similar images
4. Use descriptive element name

## File Formats

### Photos / Complex Images
- **WebP** (preferred) - best compression, modern browsers
- **JPG** - fallback for older browsers
- **PNG** - only if transparency needed

### Icons / Simple Graphics
- **SVG** (preferred) - scalable, small file size
- **PNG** - only if SVG not possible

### Optimization
- Max width: 1920px for backgrounds
- Max width: 800px for content images
- Quality: 80-85% for JPG/WebP
- Use tools: TinyPNG, Squoosh, ImageOptim

## Usage in Code

### Current Structure (✅ IMPLEMENTED)
```tsx
<img src="/images/home/hero-main.jpg" alt="Hero" />
<img src="/images/sections/services-background.png" alt="Services" />
<img src="/images/icons/arrow-down.svg" alt="Arrow" />
```

## Migration Status

✅ **COMPLETED** - Images organized into subdirectories (Oct 16, 2025)

Updated components:
- ✅ `src/components/home/HeroSection.tsx`
- ✅ `src/components/home/ServicesSection.tsx`
- ✅ `src/components/home/AboutSection.tsx`
- ✅ `src/components/home/FooterSection.tsx`
- ✅ `src/components/layout/Footer.tsx`
- ✅ `src/content/home.ts` (news images)

## Future Additions

When adding new images:
- Portfolio/Projects → `public/images/sections/`
- Team photos → `public/images/sections/`
- Icons → `public/images/icons/`
- Logo variations → `public/images/common/`

## Current Files (Organized)

### home/
- `hero-main.jpg` (missing - add WebP version)
- `hero-main.png` (8.2MB) → needs optimization, convert to WebP
- `hero-background.png` (28KB) ✅

### sections/
- `services-background.png` (602KB) ✅
- `news-1.png` (414KB) ✅
- `news-2.png` (633KB) ✅
- `news-3.png` (1.3MB) → needs optimization
- `about-background.png` ⚠️ missing - needs to be added

### icons/
- Empty - SVG icons to be added

### common/
- Empty - shared assets to be added

## Git Management

Add to `.gitignore` if images get too large:
```gitignore
# Ignore large unoptimized images
public/images/**/*-original.*
public/images/**/*-unoptimized.*

# Keep optimized and small images
!public/images/**/*-optimized.*
!public/images/icons/**
```

## Best Practices

1. **Before adding new image:**
   - Optimize first (TinyPNG, Squoosh)
   - Check file size (< 500KB preferred)
   - Use WebP when possible

2. **Naming:**
   - Descriptive name
   - Include section
   - Lowercase with hyphens

3. **Organization:**
   - Put in appropriate folder
   - Group related images
   - Keep flat structure within folders

4. **Documentation:**
   - Update this file when adding new folders
   - Note large files (> 1MB)
   - Document special cases


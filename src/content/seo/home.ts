export const homeSeo = {
  title: 'Home | IP Website',
  description: 'Modern website built with React + TypeScript. Fast, accessible, and optimized.',
  canonical: 'https://example.com/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com/',
    siteName: 'IP Website',
    title: 'Home | IP Website',
    description: 'Modern website built with React + TypeScript',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IP Website',
      },
    ],
  },
} as const


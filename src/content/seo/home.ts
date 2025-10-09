export const homeSeo = {
  title: 'Главная | IP Website',
  description: 'Современный веб-сайт на React + TypeScript. Быстрый, доступный и оптимизированный.',
  canonical: 'https://example.com/',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://example.com/',
    siteName: 'IP Website',
    title: 'Главная | IP Website',
    description: 'Современный веб-сайт на React + TypeScript',
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


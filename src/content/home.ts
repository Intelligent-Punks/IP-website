export const homeContent = {
  hero: {
    title: 'Добро пожаловать',
    subtitle: 'Современный веб-сайт на React + TypeScript',
    description: 'Быстрый, доступный и оптимизированный для поисковых систем.',
    cta: {
      primary: {
        text: 'Начать',
        link: '/projects',
      },
      secondary: {
        text: 'Узнать больше',
        link: '/about',
      },
    },
  },
  features: [
    {
      title: 'Производительность',
      description: 'Оптимизирован для максимальной скорости загрузки',
      icon: '⚡',
    },
    {
      title: 'Доступность',
      description: 'Доступен для всех пользователей',
      icon: '♿',
    },
    {
      title: 'SEO',
      description: 'Оптимизирован для поисковых систем',
      icon: '🔍',
    },
  ],
} as const


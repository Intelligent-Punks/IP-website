export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
} as const

export type RoutePath = typeof routes[keyof typeof routes]


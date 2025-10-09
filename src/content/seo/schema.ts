import { siteConfig } from '../../config'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/logo.png`,
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: siteConfig.contacts.email,
    telephone: siteConfig.contacts.phone,
    contactType: 'Customer Service',
  },
} as const

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  author: {
    '@type': 'Person',
    name: siteConfig.author,
  },
} as const


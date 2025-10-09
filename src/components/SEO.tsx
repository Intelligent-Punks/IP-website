import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    type: string
    locale: string
    url: string
    siteName: string
    title: string
    description: string
    images?: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  schema?: object | object[]
}

export default function SEO({ title, description, canonical, openGraph, schema }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)

    // Update canonical link
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]')
      if (!linkCanonical) {
        linkCanonical = document.createElement('link')
        linkCanonical.setAttribute('rel', 'canonical')
        document.head.appendChild(linkCanonical)
      }
      linkCanonical.setAttribute('href', canonical)
    }

    // Update Open Graph tags
    if (openGraph) {
      const ogTags = {
        'og:type': openGraph.type,
        'og:locale': openGraph.locale,
        'og:url': openGraph.url,
        'og:site_name': openGraph.siteName,
        'og:title': openGraph.title,
        'og:description': openGraph.description,
      }

      Object.entries(ogTags).forEach(([property, content]) => {
        let metaTag = document.querySelector(`meta[property="${property}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('property', property)
          document.head.appendChild(metaTag)
        }
        metaTag.setAttribute('content', content)
      })

      // Add OG images
      if (openGraph.images && openGraph.images.length > 0) {
        document.querySelectorAll('meta[property^="og:image"]').forEach(el => el.remove())
        
        openGraph.images.forEach((image) => {
          const imgTag = document.createElement('meta')
          imgTag.setAttribute('property', 'og:image')
          imgTag.setAttribute('content', image.url)
          document.head.appendChild(imgTag)

          const imgWidthTag = document.createElement('meta')
          imgWidthTag.setAttribute('property', 'og:image:width')
          imgWidthTag.setAttribute('content', String(image.width))
          document.head.appendChild(imgWidthTag)

          const imgHeightTag = document.createElement('meta')
          imgHeightTag.setAttribute('property', 'og:image:height')
          imgHeightTag.setAttribute('content', String(image.height))
          document.head.appendChild(imgHeightTag)

          const imgAltTag = document.createElement('meta')
          imgAltTag.setAttribute('property', 'og:image:alt')
          imgAltTag.setAttribute('content', image.alt)
          document.head.appendChild(imgAltTag)
        })
      }
    }

    // Update JSON-LD schema
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]')
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.setAttribute('type', 'application/ld+json')
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema])
    }
  }, [title, description, canonical, openGraph, schema])

  return null
}


import SEO from '../components/SEO'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import AboutSection from '../components/home/AboutSection'
import StatsSection from '../components/home/StatsSection'
import HotDealsSection from '../components/home/HotDealsSection'
import NewsSection from '../components/home/NewsSection'
import FAQSection from '../components/home/FAQSection'

import { homeContent } from '../content/home'
import { homeSeo } from '../content/seo/home'
import { websiteSchema } from '../content/seo/schema'

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={homeSeo.canonical}
        openGraph={homeSeo.openGraph}
        schema={websiteSchema}
      />

      <HeroSection {...homeContent.hero} />
      <ServicesSection {...homeContent.services} />
      <AboutSection {...homeContent.about} />
      <StatsSection {...homeContent.stats} />
      <HotDealsSection {...homeContent.hotDeals} />
      <NewsSection {...homeContent.news} />
      <FAQSection {...homeContent.faqs} />
    </Layout>
  )
}


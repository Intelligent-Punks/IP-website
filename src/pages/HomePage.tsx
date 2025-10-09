import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { homeContent } from '../content/home'
import { homeSeo } from '../content/seo/home'
import { websiteSchema } from '../content/seo/schema'

export default function HomePage() {
  const { hero, features } = homeContent

  return (
    <>
      <SEO
        title={homeSeo.title}
        description={homeSeo.description}
        canonical={homeSeo.canonical}
        openGraph={homeSeo.openGraph}
        schema={websiteSchema}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
            {hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 text-center mb-2">
            {hero.subtitle}
          </p>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl">
            {hero.description}
          </p>
          <div className="flex gap-4">
            <Link
              to={hero.cta.primary.link}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              aria-label={hero.cta.primary.text}
            >
              {hero.cta.primary.text}
            </Link>
            <Link
              to={hero.cta.secondary.link}
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
              aria-label={hero.cta.secondary.text}
            >
              {hero.cta.secondary.text}
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors"
                >
                  <div className="text-5xl mb-4" role="img" aria-label={feature.title}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


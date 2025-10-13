import { Link } from 'react-router-dom'

interface Service {
  number: string
  name: string
}

interface ServicesSectionProps {
  title: string
  cta: {
    text: string
    link: string
  }
  items: readonly Service[]
}

export default function ServicesSection({ title, cta, items }: ServicesSectionProps) {
  return (
    <section className="text-text-primary py-section">
      <div className="max-w-container mx-auto px-container-padding">
        {/* Title */}
        <div className="mb-16">
          <div className="w-full border-t border-border-secondary mb-4" aria-hidden="true" />
          <h2 className="font-playfair text-display-xl max-w-[1145px]">
            {title}
          </h2>
          <div className="w-full border-t border-border-secondary mt-4" aria-hidden="true" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Image */}
          <div className="relative">
            <img 
              src="/images/services-background.png" 
              alt="Services" 
              className="w-full h-full object-cover rounded-card"
              loading="lazy"
            />
          </div>

          {/* Right - Services List */}
          <div className="space-y-6">
            {items.map((service, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 py-4">
                  <span className="font-bold text-2xl">{service.number}</span>
                  <span className="font-bold text-2xl">{service.name}</span>
                </div>
                {index < items.length - 1 && (
                  <div 
                    className="w-full border-t border-border-light" 
                    aria-hidden="true" 
                  />
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                to={cta.link}
                className="border border-border-primary rounded-button w-button-sm h-button-sm flex items-center justify-center text-body font-medium text-center hover:bg-background-dark hover:text-text-inverse transition-colors duration-default"
                aria-label={cta.text}
              >
                {cta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


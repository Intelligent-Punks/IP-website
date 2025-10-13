interface Deal {
  title: string
  features: readonly string[]
  price: string
  originalPrice: string
}

interface HotDealsSectionProps {
  title: string
  description: string
  items: readonly Deal[]
}

export default function HotDealsSection({ title, description, items }: HotDealsSectionProps) {
  return (
    <section className="text-text-primary py-section">
      <div className="max-w-container mx-auto px-container-padding">
        {/* Title */}
        <div className="mb-16">
          <div className="w-full border-t border-border-primary mb-4" aria-hidden="true" />
          <h2 className="font-playfair text-display-xl">
            {title}
          </h2>
          <div className="w-full border-t border-border-primary mt-4" aria-hidden="true" />
          <p className="text-body max-w-content-sm mt-6">
            {description}
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((deal, index) => (
            <div 
              key={index}
              className="bg-background-secondary rounded-card overflow-hidden border border-border-primary hover:shadow-lg transition-shadow duration-default"
            >
              {/* Decorative Top */}
              <div className="h-decorative-sm bg-background-primary relative">
                <div className="absolute bottom-0 left-0 right-0 h-[320px] bg-gradient-to-b from-transparent to-white" />
              </div>

              {/* Content */}
              <div className="p-10 space-y-6">
                <div className="space-y-2">
                  <div className="border-t border-dashed border-border-primary" aria-hidden="true" />
                  <h3 className="font-playfair text-display-md text-center">
                    {deal.title}
                  </h3>
                  <div className="border-t border-dashed border-border-primary" aria-hidden="true" />
                </div>

                <ul className="space-y-4">
                  {deal.features.map((feature, idx) => (
                    <li key={idx} className="text-body leading-loose">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-right">
                  <p className="text-2xl leading-loose">
                    {deal.price} <span className="text-gray-600">{deal.originalPrice}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


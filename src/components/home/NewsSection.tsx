interface NewsItem {
  title: string
  description: string
  date: string
  image: string
}

interface NewsSectionProps {
  title: string
  description: string
  items: readonly NewsItem[]
}

export default function NewsSection({ title, description, items }: NewsSectionProps) {
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <article key={index} className="space-y-6">
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-card">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-slow"
                  loading="lazy"
                />
              </div>

              {/* Date Badge */}
              <div className="inline-block border border-border-secondary rounded-button px-4 py-1">
                <span className="text-body">{item.date}</span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-playfair text-2xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-body">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


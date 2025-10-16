interface Stat {
  title: string
  subtitle: string
}

interface StatsSectionProps {
  title: string
  subtitle: string
  items: readonly Stat[]
}

export default function StatsSection({ title, subtitle, items }: StatsSectionProps) {
  return (
    <section className="text-text-primary py-section">
      <div className="max-w-container mx-auto px-container-padding">
        {/* Title */}
        <div className="mb-16">
          <div className="w-full border-t border-border-secondary mb-4" aria-hidden="true" />
          <h2 className="font-playfair text-display-xl">
            {title}
          </h2>
          <div className="w-full border-t border-border-secondary mt-4" aria-hidden="true" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-display-md text-text-accent">
                {items[0].title}
              </h3>
              <p className="text-body">{items[0].subtitle}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-display-md text-text-accent">
                {items[1].title}
              </h3>
              <p className="text-body">{items[1].subtitle}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-display-md text-text-accent">
                {items[2].title}
              </h3>
              <p className="text-body">{items[2].subtitle}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-display-md text-text-accent">
                {items[3].title}
              </h3>
              <p className="text-body">{items[3].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mt-12">
          <p className="font-playfair text-display-md max-w-[839px]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}


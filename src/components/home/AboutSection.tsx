interface AboutSectionProps {
  title: string
  content: readonly string[]
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <section className="text-text-primary py-section">
      <div className="max-w-container mx-auto px-container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Background Image */}
          <div className="relative h-image-lg">
            <img 
              src="/images/sections/about-background.png" 
              alt="About Intelligent Punks" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-display-md text-text-secondary max-w-content-md">
              {title}
            </h2>

            <div className="space-y-6 max-w-content-md">
              {content.map((paragraph, index) => (
                <p key={index} className="text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Service {
  number: string
  name: string
  image: string
}

interface ServicesSectionProps {
  title: string
  description?: string
  content?: readonly string[]
  cta: {
    text: string
    link: string
  }
  items: readonly Service[]
}

export default function ServicesSection({ title, description, content, cta, items }: ServicesSectionProps) {
  // Active image state - default is first item
  const [activeImage, setActiveImage] = useState(items[0]?.image || '/images/sections/services/services-background.png')
  return (
    <section className="bg-brand-dark text-brand-cream py-35">
      <div className="max-w-content mx-auto">
        {/* Title with borders */}
        <div className="mb-[60px]">
          <h2 className="font-playfair font-medium text-[64px] leading-[1.33em] border-t border-b border-white pt-4 pb-5.5">
            {title}
          </h2>
        </div>

        {/* Content layout */}
        <div className="relative">
          {/* Left - Services List */}
          <div className="relative z-20 flex flex-col gap-[23px]">
            {items.map((service, index) => (
              <div key={index} className="flex flex-col gap-[1px]">
                <p
                  onMouseEnter={() => setActiveImage(service.image)}
                  className={`flex items-center gap-2.5 font-involve font-medium text-2xl leading-[1.33em] hover:font-bold transition-all cursor-pointer ${
                    activeImage === service.image ? 'font-bold' : ''
                  }`}
                >
                  {service.number} {service.name}
                </p>
                <hr className="border-t border-brand-cream/30 w-[670px]" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Right - TV Screen with changing images */}
          <div className="absolute right-0 top-0 w-[670px] h-[494px] z-10">
            {/* Background layer - changing service images */}
            <img 
              src={activeImage}
              alt="Service preview" 
              className="absolute inset-0 w-full h-[96%] object-contain transition-all duration-500"
              loading="lazy"
            />
            
            {/* Foreground layer - TV frame (always on top of images but below list) */}
            <img 
              src="/images/sections/services/services-background.png"
              alt="TV frame" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
          </div>

          {/* CTA Button - Circular (highest z-index) */}
          <Link
            to={cta.link}
            className="absolute right-[2px] bottom-0 z-30 w-[162px] h-[162px] bg-brand-cream border border-black rounded-full flex items-center justify-center text-center hover:bg-brand-dark transition-colors duration-default group"
            aria-label={cta.text}
          >
            <span className="font-involve font-medium text-base leading-[1.33em] text-black group-hover:text-brand-cream transition-colors duration-default">
              {cta.text.split(' ').join('\n')}
            </span>
          </Link>
        </div>

        {/* Description Block */}
        {(description || content) && (
          <div className="mt-24 max-w-[900px] mx-auto">
            {description && (
              <h3 className="font-involve font-medium text-3xl leading-[1.5em] text-center mb-12">
                {description}
              </h3>
            )}
            {content && (
              <div className="space-y-6">
                {content.map((paragraph, index) => (
                  <p key={index} className="font-involve text-lg leading-[1.75em] text-center">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}


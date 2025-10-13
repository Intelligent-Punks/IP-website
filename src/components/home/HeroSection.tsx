import { Link } from 'react-router-dom'

interface HeroSectionProps {
  tag: string
  title: string
  description: readonly string[]
  cta: {
    text: string
    link: string
  }
}

export default function HeroSection({ tag, title, description, cta }: HeroSectionProps) {
  return (
    <section className="relative h-[800px] bg-brand-dark overflow-hidden">
      <div className="flex h-full max-w-container mx-auto px-container-padding">
        {/* Left Side - Image */}
        <div className="flex-1 h-full">
          <img 
            src="/images/hero-main.jpg" 
            alt="Intelligent Punks Hero" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 h-full bg-brand-cream relative px-10 py-10">
          {/* Title */}
          <h1 className="font-involve font-medium text-[64px] leading-[1.33em] text-black">
            {title}
          </h1>

          {/* Contact us - Circular Button */}
          <Link
            to={cta.link}
            className="absolute top-[134px] right-10 w-[162px] h-[162px] border border-black rounded-full flex items-center justify-center text-center hover:bg-black hover:text-brand-cream transition-colors duration-default"
            aria-label={cta.text}
          >
            <span className="font-involve font-medium text-base leading-[1.33em]">
              {cta.text}
            </span>
          </Link>

          {/* Who are we? Button */}
          <button 
            className="absolute top-[402px] left-10 w-[152px] h-11 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-brand-cream transition-colors duration-default"
            aria-label={tag}
          >
            <span className="font-involve font-medium text-base leading-[1.33em] text-black">
              {tag}
            </span>
          </button>

          {/* Line Divider */}
          <div className="absolute top-[496px] left-10 w-[580px] h-px bg-black" aria-hidden="true" />

          {/* Description */}
          <div className="absolute top-[546px] left-10 w-[576px] space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="font-involve font-normal text-base leading-[1.5em] text-black">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


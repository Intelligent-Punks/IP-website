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
      <div className="grid grid-cols-2 gap-10 h-full max-w-content mx-auto">
        {/* Left Side - Image */}
        <div className="h-full">
          <img 
            src="/images/home/hero-main.jpg" 
            alt="Intelligent Punks Hero" 
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Right Side - Content */}
        <div className="h-full bg-brand-cream relative px-10 py-4.5">
          {/* Title */}
          <h1 className="font-involve font-medium text-[64px] leading-[1.33em] text-black">
            {title}
          </h1>

          {/* Contact us - Circular Button */}
          <Link
            to={cta.link}
            className="absolute top-[134px] right-10 w-[162px] h-[162px] border border-black rounded-full flex items-center justify-center text-center hover:bg-brand-dark transition-colors duration-default group"
            aria-label={cta.text}
          >
            <span className="font-involve font-medium text-base leading-[1.33em] text-black group-hover:text-brand-cream transition-colors duration-default">
              {cta.text}
            </span>
          </Link>

          {/* Who are we? Button */}
          <button 
            className="w-[152px] h-11 mt-53.5 border border-black rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors duration-default group"
            aria-label={tag}
          >
            <span className="font-involve font-medium text-base leading-[1.33em] text-black group-hover:text-brand-cream transition-colors duration-default">
              {tag}
            </span>
          </button>

          {/* Line Divider */}
          <hr className="border-t border-black mt-12.5" aria-hidden="true" />

          {/* Description */}
          <div className="space-y-6 mt-11">
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


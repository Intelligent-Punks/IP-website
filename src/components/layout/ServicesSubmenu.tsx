import { Link } from 'react-router-dom'
import { servicesSubmenu } from '../../content/submenu'

interface ServicesSubmenuProps {
  onMouseEnter: () => void
  onMouseLeave: () => void
  onLinkClick: () => void
}

// Reusable component for rendering service category
function ServiceCategorySection({ 
  title, 
  services, 
  position, 
  onLinkClick 
}: { 
  title: string
  services: readonly string[]
  position: { left: string; top: string }
  onLinkClick: () => void
}) {
  return (
    <div className="absolute" style={position}>
      {title && (
        <h3 className="font-involve font-normal text-[48px] leading-[1.33em] text-brand-dark mb-[60px]">
          {title}
        </h3>
      )}
      <ul className="space-y-0">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to="/services"
              onClick={onLinkClick}
              className="font-involve font-normal text-sm leading-[2em] text-brand-dark hover:font-bold transition-all"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesSubmenu({ onMouseEnter, onMouseLeave, onLinkClick }: ServicesSubmenuProps) {
  return (
    <div 
      className="absolute left-0 right-0 top-full z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-container mx-auto px-container-padding">
        {/* Submenu container with glass effect */}
        <div 
          className="w-full h-[337px] relative bg-brand-cream-60"
          style={{ backdropFilter: 'blur(20px)' }}
        >
          {/* Development Section */}
          <ServiceCategorySection
            title={servicesSubmenu.categories[0].title}
            services={servicesSubmenu.categories[0].services}
            position={{ left: '60px', top: '60px' }}
            onLinkClick={onLinkClick}
          />

          {/* Middle Section (no title) */}
          <ServiceCategorySection
            title={servicesSubmenu.categories[1].title}
            services={servicesSubmenu.categories[1].services}
            position={{ left: '365px', top: '155px' }}
            onLinkClick={onLinkClick}
          />

          {/* Marketing Section */}
          <ServiceCategorySection
            title={servicesSubmenu.categories[2].title}
            services={servicesSubmenu.categories[2].services}
            position={{ left: '710px', top: '60px' }}
          onLinkClick={onLinkClick}
        />

        {/* Horizontal divider line */}
        <hr className="absolute left-[-4px] top-[125px] w-[1353px] border-t border-brand-dark" aria-hidden="true" />

        {/* Vertical divider line */}
        <hr className="absolute left-[679px] top-0 h-[337px] border-l border-brand-dark" aria-hidden="true" />

          {/* Contact us button (circular) */}
          <Link
            to={servicesSubmenu.cta.link}
            onClick={onLinkClick}
            className="absolute left-[1137px] top-[115px] w-[162px] h-[162px] bg-brand-cream border border-brand-dark rounded-full flex items-center justify-center hover:bg-brand-dark transition-colors duration-default group"
          >
            <span className="font-involve font-medium text-base leading-[1.33em] text-brand-dark group-hover:text-brand-cream transition-colors duration-default">
              {servicesSubmenu.cta.text}
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}


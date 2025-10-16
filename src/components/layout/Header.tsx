import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { headerContent } from '../../content/header'
import ServicesSubmenu from './ServicesSubmenu'
import ArrowDownIcon from '../ui/ArrowDownIcon'

const MENU_CLOSE_DELAY = 150 // ms - from CSS var --transition-duration-menu

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeTimeoutRef = useRef<number | null>(null)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsServicesOpen(false)
    }, MENU_CLOSE_DELAY)
  }

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-brand-dark"
    >
      <div className="max-w-container mx-auto px-container-padding py-10">
        {/* Navigation Menu - exact 60px height */}
        <nav className="border-t border-b border-brand-cream py-4.5 flex items-center justify-between" aria-label="Main navigation">
          {headerContent.navigation.map((item) => {
            // Special handling for Services with dropdown
            if (item.hasDropdown) {
              return (
                <button
                  key={item.id}
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="font-involve font-normal text-base leading-[1.33em] text-brand-cream hover:font-bold hover:underline transition-all"
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    <ArrowDownIcon />
                  </span>
                </button>
              )
            }

            // Regular menu items
            return (
              <Link
                key={item.id}
                to={item.href}
                className="font-involve font-normal text-base leading-[1.33em] text-brand-cream hover:font-bold hover:underline transition-all"
              >
                {item.label}
              </Link>
          )
        })}
      </nav>
    </div>

      {/* Services Submenu */}
      {isServicesOpen && (
        <ServicesSubmenu 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onLinkClick={() => setIsServicesOpen(false)}
        />
      )}
    </header>
  )
}


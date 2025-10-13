import { Link, useLocation } from 'react-router-dom'
import { headerContent } from '../../content/header'

export default function Header() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm">
      <div className="max-w-container mx-auto px-container-padding py-6">
        <div className="flex items-center justify-between gap-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="font-involve font-bold text-2xl text-brand-cream">
              {headerContent.logo.text}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center justify-between flex-1 max-w-[1359px]">
            {headerContent.navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={`
                  font-involve text-base leading-[1.33em] text-brand-cream
                  transition-opacity hover:opacity-80
                  ${item.isHighlighted ? 'font-bold' : 'font-normal'}
                  ${location.pathname === item.href ? 'opacity-100' : 'opacity-90'}
                `}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M3.06 6.71L9 12.03L14.94 6.71"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-brand-cream p-2"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}


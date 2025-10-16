import { Link } from 'react-router-dom'

interface FooterSectionProps {
  cta: {
    title: string
    description: string
  }
  navigation: {
    links: readonly string[]
  }
  contacts: {
    email: string
    location: string
    phones: readonly string[]
  }
  copyright: string
}

export default function FooterSection({ cta, navigation, contacts, copyright }: FooterSectionProps) {
  return (
    <footer className="bg-background-primary text-text-primary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-background"
        style={{ backgroundImage: 'url(/images/home/hero-background.png)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-container mx-auto px-container-padding py-section">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="border border-border-primary rounded-button w-button-lg h-button-lg flex items-center justify-center mb-8 mx-auto">
            <h2 className="text-display-md text-center px-8">
              {cta.title}
            </h2>
          </div>
          
          <p className="font-playfair text-display-md max-w-content mx-auto">
            {cta.description}
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 mb-12" aria-label="Footer navigation">
          {navigation.links.map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-body hover:text-text-accent transition-colors duration-default"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <a 
              href={`mailto:${contacts.email}`}
              className="text-body font-medium hover:text-text-accent transition-colors duration-default"
            >
              {contacts.email}
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-body" aria-label="Location">📍</span>
              <p className="text-body-sm">{contacts.location}</p>
            </div>

            <div className="flex gap-3">
              <span className="text-body" aria-label="Email">✉️</span>
              <a 
                href={`mailto:${contacts.email}`}
                className="text-body-sm hover:text-text-accent transition-colors duration-default"
              >
                {contacts.email}
              </a>
            </div>

            {contacts.phones.map((phone, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-body" aria-label="Phone">📞</span>
                <a 
                  href={`tel:${phone}`}
                  className="text-body-sm hover:text-text-accent transition-colors duration-default"
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons Placeholder */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="w-6 h-6 hover:opacity-hover transition-opacity duration-default" aria-label="Facebook">
            {/* Facebook icon */}
          </a>
          <a href="#" className="w-6 h-6 hover:opacity-hover transition-opacity duration-default" aria-label="Instagram">
            {/* Instagram icon */}
          </a>
          <a href="#" className="w-6 h-6 hover:opacity-hover transition-opacity duration-default" aria-label="Twitter">
            {/* Twitter icon */}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-body font-medium whitespace-pre-line">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}


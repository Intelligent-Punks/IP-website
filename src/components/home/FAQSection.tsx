import { useState } from 'react'

interface FAQ {
  question: string
}

interface FAQSectionProps {
  title: string
  items: readonly FAQ[]
}

export default function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="text-text-primary py-section">
      <div className="max-w-container mx-auto px-container-padding">
        {/* Title */}
        <div className="mb-16">
          <h2 className="font-playfair text-display-xl text-text-inverse bg-background-dark inline-block px-4">
            {title}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-content-lg ml-auto space-y-8">
          {items.map((faq, index) => (
            <div key={index} className="border-b border-border-secondary">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-8 text-left hover:opacity-hover transition-opacity duration-default"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-display-md pr-4">
                  {faq.question}
                </h3>
                <div 
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-2xl"
                  aria-hidden="true"
                >
                  {openIndex === index ? '−' : '+'}
                </div>
              </button>
              
              {openIndex === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="pb-8 text-body"
                >
                  <p>Answer coming soon...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


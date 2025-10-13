import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  mainBackground?: string // Опциональный фон для main, по умолчанию черный
}

export default function Layout({ children, mainBackground }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark">
      <Header />
      
      {/* Main content with padding for fixed header */}
      <main className={`flex-1 pt-20 ${mainBackground || ''}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}


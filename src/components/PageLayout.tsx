import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  breadcrumb?: { name: string; href: string }[]
  heroImage?: string
  heroColor?: 'forest' | 'ocean' | 'sunset' | 'sand'
}

const colorClasses = {
  forest: 'from-forest-600 to-forest-800',
  ocean: 'from-ocean-600 to-ocean-800',
  sunset: 'from-sunset-600 to-sunset-800',
  sand: 'from-sand-600 to-sand-800',
}

export default function PageLayout({ 
  title, 
  subtitle, 
  children, 
  breadcrumb,
  heroImage,
  heroColor = 'forest'
}: PageLayoutProps) {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <div className={`relative py-20 lg:py-32 bg-gradient-to-br ${colorClasses[heroColor]} overflow-hidden`}>
        {heroImage && (
          <>
            <img 
              src={heroImage} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </>
        )}
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-white/70 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                {breadcrumb.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {index === breadcrumb.length - 1 ? (
                      <span className="text-white">{item.name}</span>
                    ) : (
                      <Link to={item.href} className="hover:text-white transition-colors">{item.name}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/80 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
    </div>
  )
}


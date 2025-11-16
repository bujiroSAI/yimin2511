'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/works', label: t.nav.works },
    { href: '/news', label: t.nav.news },
    { href: '/contact', label: t.nav.contact },
  ]

  const languages = [
    { code: 'ja' as const, label: 'JA' },
    { code: 'de' as const, label: 'DE' },
    { code: 'en' as const, label: 'EN' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-vintage-200/50">
      <div className="max-w-7xl mx-auto px-8 lg:px-24">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="text-xl md:text-2xl font-serif font-normal tracking-[0.02em] text-vintage-900 transition-all duration-300 hover:text-vintage-700 uppercase">
            MINAMI NAGAI
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-all duration-300 relative group font-serif ${
                  pathname === item.href ? 'text-vintage-900' : 'text-vintage-600 hover:text-vintage-800'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-vintage-700 transform transition-transform duration-300 origin-left ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l border-vintage-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs tracking-wide transition-all duration-300 font-serif ${
                    language === lang.code ? 'text-vintage-900 font-normal' : 'text-vintage-500 hover:text-vintage-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 md:hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs tracking-wide transition-all duration-300 font-serif ${
                    language === lang.code ? 'text-vintage-900 font-normal' : 'text-vintage-500'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            
            <button
              className="md:hidden text-sm transition-all duration-300 hover:scale-110 font-serif text-vintage-700 hover:text-vintage-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-8 space-y-6 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm tracking-wide transition-all duration-300 hover:translate-x-2 font-serif ${
                  pathname === item.href ? 'text-vintage-900' : 'text-vintage-600 hover:text-vintage-800'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}


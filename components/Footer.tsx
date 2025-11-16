'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-vintage-200 mt-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.footer.location}</h3>
            <p className="text-sm text-vintage-600 font-serif-jp">Munich, Germany / Tokyo, Japan</p>
          </div>
          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.footer.email}</h3>
            <a href="mailto:hello@example.com" className="text-sm text-vintage-600 hover:text-vintage-800 transition-colors duration-300 font-serif-jp">
              hello@example.com
            </a>
          </div>
          <div>
            <h3 className="text-sm font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.footer.social}</h3>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-vintage-600 hover:text-vintage-800 transition-colors duration-300 font-serif">Instagram</a>
              <a href="#" className="text-sm text-vintage-600 hover:text-vintage-800 transition-colors duration-300 font-serif">YouTube</a>
              <a href="#" className="text-sm text-vintage-600 hover:text-vintage-800 transition-colors duration-300 font-serif">Spotify</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-vintage-200">
          <p className="text-xs text-vintage-500 font-serif">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}


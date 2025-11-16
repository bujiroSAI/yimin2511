'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 py-20">
        <AnimatedSection direction="up" delay={0}>
          <h1 className="text-5xl md:text-7xl font-light mb-16">{t.contact.title}</h1>
        </AnimatedSection>
        
        <div className="space-y-12">
          <AnimatedSection direction="left" delay={100}>
            <div>
              <h2 className="text-xl font-light mb-4">{t.contact.inquiry}</h2>
              <p className="text-lg text-black/70 leading-relaxed mb-6">
                {t.contact.inquiryText}
              </p>
              <a
                href="mailto:hello@example.com"
                className="text-lg text-black hover:text-accent transition-all duration-300 inline-block hover:scale-105"
              >
                hello@example.com
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={200}>
            <div>
              <h2 className="text-xl font-light mb-4">{t.contact.location}</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                {t.contact.locationText}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-xl font-light mb-4">{t.contact.social}</h2>
              <div className="flex flex-col gap-4">
                {['Instagram', 'YouTube', 'Spotify', 'Twitter'].map((social, index) => (
                  <a 
                    key={social}
                    href="#" 
                    className="text-lg text-black/70 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}


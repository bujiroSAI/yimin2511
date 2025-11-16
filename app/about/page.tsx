'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { useState, useEffect } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  timestamp: string
  caption?: string
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch('/api/instagram')
        const data = await response.json()
        if (data.data && Array.isArray(data.data)) {
          setInstagramPosts(data.data)
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-5xl mx-auto px-8 lg:px-24 py-32">
        <AnimatedSection direction="up" delay={0}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-[0.02em] mb-24 text-vintage-900">{t.about.title}</h1>
        </AnimatedSection>
        
        {/* ポートレート画像と基本情報 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <AnimatedSection direction="left" delay={100}>
            <div className="aspect-[3/4] bg-vintage-100 rounded-sm overflow-hidden relative" style={{ filter: 'sepia(5%)' }}>
              {/* ポートレート画像 - 実際の画像パスに置き換えてください */}
              <img
                src="/about/minami.png"
                alt={t.about.name}
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(10%) contrast(1.05) brightness(0.98)' }}
                onError={(e) => {
                  // 画像が存在しない場合のフォールバック
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              <div className="w-full h-full hidden items-center justify-center text-vintage-400 absolute inset-0">
                <span className="text-sm font-serif-jp">ポートレート画像</span>
              </div>
              {/* フィルムカメラ風のオーバーレイ */}
              <div className="absolute inset-0 bg-cream-50/10 pointer-events-none"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={200}>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4 text-vintage-900 tracking-wide">{t.about.name}</h2>
              <p className="text-lg md:text-xl font-serif font-normal mb-8 text-vintage-700 tracking-wide">{t.about.role}</p>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="prose prose-lg max-w-none">
          
          <AnimatedSection direction="up" delay={300}>
            <p className="text-base md:text-lg text-vintage-800 leading-relaxed mb-8 font-serif-jp">
              {t.about.bio1}
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={400}>
            <p className="text-base md:text-lg text-vintage-800 leading-relaxed mb-8 font-serif-jp">
              {t.about.bio2}
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={500}>
            <p className="text-base md:text-lg text-vintage-800 leading-relaxed mb-12 font-serif-jp">
              {t.about.bio3}
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={600}>
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.about.achievements}</h3>
              <ul className="space-y-3 text-base md:text-lg text-vintage-800 font-serif-jp">
                <li className="hover:text-vintage-600 transition-colors duration-300">{t.about.mainAchievement}</li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={700}>
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.about.year2025}</h3>
              <ul className="space-y-4 text-base md:text-lg text-vintage-800 font-serif-jp">
                {t.about.year2025Items.map((item, index) => (
                  <li key={index} className="hover:text-vintage-600 transition-colors duration-300">{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={800}>
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.about.year2024}</h3>
              <ul className="space-y-4 text-base md:text-lg text-vintage-800 font-serif-jp">
                {t.about.year2024Items.map((item, index) => (
                  <li key={index} className="hover:text-vintage-600 transition-colors duration-300">{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={900}>
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.about.year2023}</h3>
              <ul className="space-y-4 text-base md:text-lg text-vintage-800 font-serif-jp">
                {t.about.year2023Items.map((item, index) => (
                  <li key={index} className="hover:text-vintage-600 transition-colors duration-300">{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={1000}>
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-serif font-normal mb-6 text-vintage-900 tracking-wide">{t.about.otherActivities}</h3>
              <p className="text-base md:text-lg text-vintage-800 leading-relaxed mb-6 hover:text-vintage-600 transition-colors duration-300 font-serif-jp">
                {t.about.activity1}
              </p>
              <p className="text-base md:text-lg text-vintage-800 leading-relaxed mb-6 hover:text-vintage-600 transition-colors duration-300 font-serif-jp">
                {t.about.activity2}
              </p>
              <p className="text-base md:text-lg text-vintage-800 leading-relaxed hover:text-vintage-600 transition-colors duration-300 font-serif-jp">
                {t.about.activity3}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Instagram Grid Section - 絵葉書風 */}
      <section className="py-48 px-8 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-[0.02em] mb-16 text-vintage-900 text-center">
              Instagram
            </h2>
          </AnimatedSection>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-vintage-500 animate-pulse-slow font-serif">読み込み中...</div>
            </div>
          ) : instagramPosts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {instagramPosts.map((post, index) => (
                <AnimatedSection key={post.id} direction="up" delay={index * 50}>
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square overflow-hidden bg-vintage-100 border border-vintage-200 hover:border-vintage-400 transition-all duration-500 hover:shadow-xl hover:scale-105 rounded-sm"
                    style={{ filter: 'sepia(5%)' }}
                  >
                    {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                      <img
                        src={post.media_url}
                        alt={post.caption || 'Instagram post'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ filter: 'sepia(10%) contrast(1.05) brightness(0.98)' }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-vintage-100 group-hover:bg-vintage-200 transition-colors">
                        <svg className="w-12 h-12 text-vintage-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <svg className="w-8 h-8 text-vintage-900 transform group-hover:scale-125 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-vintage-500 font-serif">
              {language === 'ja' ? 'Instagramの投稿が見つかりませんでした' : language === 'de' ? 'Keine Instagram-Beiträge gefunden' : 'No Instagram posts found'}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}


'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { worksData } from '@/lib/worksData'
import AnimatedSection from '@/components/AnimatedSection'

// Hero画像データ
const heroImages = [
  { id: 1, src: '/hero/hero-1.jpg', alt: 'Hero Image 1' },
  { id: 2, src: '/hero/hero-2.jpg', alt: 'Hero Image 2' },
  { id: 3, src: '/hero/hero-3.jpg', alt: 'Hero Image 3' },
  { id: 4, src: '/hero/hero-4.jpg', alt: 'Hero Image 4' },
]

// YouTube動画データ
const youtubeVideos = [
  { id: 'video1', videoId: 'dQw4w9WgXcQ', title: '作品1', thumbnail: '/youtube/thumb1.jpg' },
  { id: 'video2', videoId: 'dQw4w9WgXcQ', title: '作品2', thumbnail: '/youtube/thumb2.jpg' },
  { id: 'video3', videoId: 'dQw4w9WgXcQ', title: '作品3', thumbnail: '/youtube/thumb3.jpg' },
  { id: 'video4', videoId: 'dQw4w9WgXcQ', title: '作品4', thumbnail: '/youtube/thumb4.jpg' },
  { id: 'video5', videoId: 'dQw4w9WgXcQ', title: '作品5', thumbnail: '/youtube/thumb5.jpg' },
]

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentYoutubeSlide, setCurrentYoutubeSlide] = useState(0)

  // Heroスライダーの自動再生
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-24 bg-cream-50">
      {/* Hero Section - 絵葉書風のシンプルなヒーロー */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image - フィルムカメラ風 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image.src})`,
                filter: 'sepia(10%) contrast(1.05) brightness(0.98)',
              }}
            >
              {/* Overlay - ノスタルジックなオーバーレイ */}
              <div className="absolute inset-0 bg-cream-50/30"></div>
            </div>
          </div>
        ))}
        
        {/* Content - 中央配置、大きな余白 */}
        <div className="relative z-10 w-full flex items-center justify-center py-32 px-8 lg:px-24">
          <div className="text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-[0.02em] mb-12 text-vintage-900 animate-fade-in-up">
              {t.home.title}
            </h1>
            <div className="flex justify-center gap-8 mb-12 text-sm md:text-base tracking-[0.15em] uppercase text-vintage-700 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <span>{t.home.composer}</span>
              <span className="text-vintage-400">·</span>
              <span>{t.home.pianist}</span>
            </div>
            <p className="text-base md:text-lg text-vintage-800 max-w-3xl mx-auto leading-relaxed tracking-wide animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {t.home.subtitle}
            </p>
          </div>
        </div>

        {/* Hero Navigation Dots - シンプルに */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-1 transition-all duration-300 ${
                index === currentHeroSlide ? 'w-16 bg-vintage-700' : 'w-8 bg-vintage-300 hover:bg-vintage-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Navigation Arrows - 控えめに */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 text-vintage-600 hover:text-vintage-800 transition-all duration-300 z-20 group"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 text-vintage-600 hover:text-vintage-800 transition-all duration-300 z-20 group"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </section>

      {/* Profile Text Section - 絵葉書風の大きな余白 */}
      <section className="py-48 px-8 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <div className="space-y-12">
              <p className="text-base md:text-lg text-vintage-800 leading-relaxed tracking-wide font-serif-jp">
                {t.home.profileText1}
              </p>
              <AnimatedSection direction="up" delay={200}>
                <p className="text-base md:text-lg text-vintage-800 leading-relaxed tracking-wide font-serif-jp">
                  {t.home.profileText2}
                </p>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Works Preview Section - 絵葉書風の大きな余白 */}
      <section className="py-48 px-8 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <div className="flex items-center justify-between mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-[0.02em] text-vintage-900">
                {t.home.worksLink}
              </h2>
              <Link
                href="/works"
                className="text-sm text-vintage-600 hover:text-vintage-800 tracking-[0.15em] uppercase transition-all duration-300 group flex items-center gap-2 font-serif"
              >
                <span>{language === 'ja' ? 'すべて見る' : language === 'de' ? 'Alle anzeigen' : 'View all'}</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* 最新作品を3点表示 - 大きな写真、大きな余白 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
            {worksData.slice(0, 3).map((work, index) => (
              <AnimatedSection key={work.id} direction="up" delay={index * 100}>
                <Link
                  href={`/works/${work.id}`}
                  className="group block"
                >
                  <div className="aspect-square bg-vintage-100 rounded-sm overflow-hidden mb-6 group-hover:opacity-90 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                    {/* 画像 */}
                    <img
                      src={work.image}
                      alt={work.title}
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
                    {/* 画像が存在しない場合のプレースホルダー */}
                    <div className="w-full h-full hidden items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors absolute inset-0">
                      <span className="text-sm px-6 text-center font-serif-jp">{work.title}</span>
                    </div>
                    {/* フィルムカメラ風のオーバーレイ */}
                    <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-normal mb-3 group-hover:text-vintage-700 transition-colors duration-300 text-vintage-900">{work.title}</h3>
                    <p className="text-sm text-vintage-600 mb-4 font-serif-jp">{work.year} · {work.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-vintage-50 border border-vintage-200 rounded-sm text-vintage-700 group-hover:bg-vintage-100 group-hover:border-vintage-300 transition-all duration-300 font-serif-jp"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* Works Link - シンプルなボタン */}
          <AnimatedSection direction="up" delay={400}>
            <Link
              href="/works"
              className="group block border border-vintage-300 p-12 hover:border-vintage-500 transition-all duration-300 bg-cream-50 hover:bg-cream-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-[0.02em] mb-2 text-vintage-900 group-hover:text-vintage-800 transition-colors">{t.home.worksLinkSubtitle}</h3>
                  <p className="text-xs text-vintage-600 tracking-wide uppercase font-serif">{language === 'ja' ? 'すべての作品を見る' : language === 'de' ? 'Alle Werke anzeigen' : 'View all works'}</p>
                </div>
                <div className="text-2xl text-vintage-500 group-hover:text-vintage-700 group-hover:translate-x-4 transition-all duration-300">
                  →
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* News Section - 絵葉書風 */}
      <section className="py-48 px-8 lg:px-24 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-[0.02em] mb-24 text-vintage-900">
              {language === 'ja' ? 'News' : language === 'de' ? 'Nachrichten' : 'News'}
            </h2>
          </AnimatedSection>
          <div className="space-y-20">
            {/* 最新2件のニュースを表示 */}
            <div className="space-y-16">
              <AnimatedSection direction="left" delay={100}>
                <article className="border-b border-vintage-200 pb-12 hover:border-vintage-400 transition-colors duration-300 group">
                  <div className="flex items-center gap-6 mb-6">
                    <time className="text-xs text-vintage-600 tracking-[0.1em] uppercase font-serif">2025-06-18</time>
                    <span className="text-[10px] px-3 py-1 bg-vintage-50 border border-vintage-200 text-vintage-700 tracking-[0.15em] uppercase group-hover:border-vintage-400 transition-colors font-serif">Premiere</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-vintage-900 tracking-wide group-hover:text-vintage-700 transition-colors">
                    {language === 'ja' ? 'オペラ《船はついに安らぎぬ》初演' : language === 'de' ? 'Uraufführung der Oper "船はついに安らぎぬ"' : 'Premiere of Opera "船はついに安らぎぬ"'}
                  </h3>
                </article>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={200}>
                <article className="border-b border-vintage-200 pb-12 hover:border-vintage-400 transition-colors duration-300 group">
                  <div className="flex items-center gap-6 mb-6">
                    <time className="text-xs text-vintage-600 tracking-[0.1em] uppercase font-serif">2025-05-28</time>
                    <span className="text-[10px] px-3 py-1 bg-vintage-50 border border-vintage-200 text-vintage-700 tracking-[0.15em] uppercase group-hover:border-vintage-400 transition-colors font-serif">Premiere</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-vintage-900 tracking-wide group-hover:text-vintage-700 transition-colors">
                    {language === 'ja' ? 'バレエ音楽『umschlungen』初演' : language === 'de' ? 'Uraufführung der Ballettmusik "umschlungen"' : 'Premiere of Ballet Music "umschlungen"'}
                  </h3>
                </article>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="up" delay={300}>
              <Link
                href="/news"
                className="inline-flex items-center gap-3 text-xs text-vintage-600 hover:text-vintage-800 tracking-[0.15em] uppercase transition-all duration-300 group font-serif"
              >
                <span>{language === 'ja' ? 'すべてのニュースを見る' : language === 'de' ? 'Alle Nachrichten anzeigen' : 'View all news'}</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* YouTube Section - 絵葉書風 */}
      <section className="py-48 px-8 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection direction="up" delay={0}>
            <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-[0.02em] mb-24 text-vintage-900">YouTube</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentYoutubeSlide * 100}%)` }}
              >
                {youtubeVideos.map((video, index) => (
                  <div key={video.id} className="min-w-full px-4">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="aspect-video bg-vintage-100 border border-vintage-200 overflow-hidden mb-8 group-hover:border-vintage-400 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                        {/* YouTube Thumbnail */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${video.thumbnail})`,
                            filter: 'sepia(10%) contrast(1.05) brightness(0.98)',
                          }}
                        >
                          <div className="absolute inset-0 bg-vintage-900/30 flex items-center justify-center group-hover:bg-vintage-900/20 transition-all duration-500">
                            <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-500">
                              <svg className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              <span className="text-xs font-light tracking-wide font-serif">{video.title}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Navigation */}
            <button
              onClick={() => setCurrentYoutubeSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentYoutubeSlide === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 md:-translate-x-12 disabled:opacity-20 disabled:cursor-not-allowed text-vintage-500 hover:text-vintage-700 transition-all duration-300 hover:scale-110 hover:-translate-x-14 group"
              aria-label="Previous video"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentYoutubeSlide((prev) => Math.min(youtubeVideos.length - 1, prev + 1))}
              disabled={currentYoutubeSlide === youtubeVideos.length - 1}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 md:translate-x-12 disabled:opacity-20 disabled:cursor-not-allowed text-vintage-500 hover:text-vintage-700 transition-all duration-300 hover:scale-110 hover:translate-x-14 group"
              aria-label="Next video"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* SNS Links Section - 絵葉書風 */}
      <section className="py-48 px-8 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection direction="up" delay={0}>
            <div className="flex justify-center items-center gap-16">
              {[
                { href: 'https://www.youtube.com/@example', label: 'YouTube', delay: 0 },
                { href: 'https://www.instagram.com/example', label: 'Instagram', delay: 100 },
                { href: 'https://twitter.com/example', label: 'X (Twitter)', delay: 200 },
              ].map((social) => (
                <AnimatedSection key={social.label} direction="up" delay={social.delay}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={social.label}
                  >
                    <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      {social.label === 'YouTube' && (
                        <svg className="w-12 h-12 text-vintage-500 group-hover:text-vintage-700 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      )}
                      {social.label === 'Instagram' && (
                        <svg className="w-12 h-12 text-vintage-500 group-hover:text-vintage-700 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {social.label === 'X (Twitter)' && (
                        <svg className="w-12 h-12 text-vintage-500 group-hover:text-vintage-700 transition-all duration-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  )
}


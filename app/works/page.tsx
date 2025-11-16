'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations, type Language } from '@/lib/translations'
import { worksData, genreOptions, type GenreFilter } from '@/lib/worksData'
import AnimatedSection from '@/components/AnimatedSection'

export default function WorksPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [genreFilter, setGenreFilter] = useState<GenreFilter>('All')
  const [instrumentFilter, setInstrumentFilter] = useState<string>('All')

  // 実際に使用されている楽器を取得
  const availableInstruments = useMemo(() => {
    const instruments = new Set<string>()
    worksData.forEach(work => {
      work.instruments.forEach(instrument => instruments.add(instrument))
    })
    return Array.from(instruments).sort()
  }, [])

  // フィルタリングされた作品
  const filteredWorks = useMemo(() => {
    return worksData.filter(work => {
      const genreMatch = genreFilter === 'All' || work.genre === genreFilter
      const instrumentMatch = instrumentFilter === 'All' || work.instruments.includes(instrumentFilter)
      return genreMatch && instrumentMatch
    })
  }, [genreFilter, instrumentFilter])

  // ジャンルの翻訳
  const genreLabels: Record<string, Record<Language, string>> = {
    'All': { ja: 'すべて', de: 'Alle', en: 'All' },
    'Opera': { ja: 'オペラ', de: 'Oper', en: 'Opera' },
    'Ballet': { ja: 'バレエ', de: 'Ballett', en: 'Ballet' },
    'Orchestra': { ja: 'オーケストラ', de: 'Orchester', en: 'Orchestra' },
    'Chamber Music': { ja: '室内楽', de: 'Kammermusik', en: 'Chamber Music' },
    'Concert': { ja: 'コンチェルト', de: 'Konzert', en: 'Concert' },
    'Contemporary': { ja: '現代音楽', de: 'Zeitgenössisch', en: 'Contemporary' },
    'Solo': { ja: 'ソロ', de: 'Solo', en: 'Solo' },
    'Duo': { ja: 'デュオ', de: 'Duo', en: 'Duo' },
  }

  // 楽器の翻訳
  const instrumentLabels: Record<string, Record<Language, string>> = {
    'All': { ja: 'すべて', de: 'Alle', en: 'All' },
    'ピアノ': { ja: 'ピアノ', de: 'Klavier', en: 'Piano' },
    'ヴァイオリン': { ja: 'ヴァイオリン', de: 'Violine', en: 'Violin' },
    'チェロ': { ja: 'チェロ', de: 'Cello', en: 'Cello' },
    'アコーディオン': { ja: 'アコーディオン', de: 'Akkordeon', en: 'Accordion' },
    'エレキギター': { ja: 'エレキギター', de: 'E-Gitarre', en: 'Electric Guitar' },
    'オーケストラ': { ja: 'オーケストラ', de: 'Orchester', en: 'Orchestra' },
    '弦楽オーケストラ': { ja: '弦楽オーケストラ', de: 'Streichorchester', en: 'String Orchestra' },
    '声楽': { ja: '声楽', de: 'Gesang', en: 'Vocal' },
    '現代音楽アンサンブル': { ja: '現代音楽アンサンブル', de: 'Zeitgenössisches Ensemble', en: 'Contemporary Ensemble' },
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-24 py-32">
        <AnimatedSection direction="up" delay={0}>
          <h1 className="text-5xl md:text-7xl font-serif font-normal tracking-[0.02em] mb-24 text-vintage-900">{t.works.title}</h1>
        </AnimatedSection>
        
        {/* フィルター - 絵葉書風 */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-20 space-y-8">
          {/* ジャンルフィルター */}
          <div>
            <label className="block text-sm font-serif font-normal mb-4 text-vintage-700 tracking-wide">
              {language === 'ja' ? 'ジャンル' : language === 'de' ? 'Genre' : 'Genre'}
            </label>
            <div className="flex flex-wrap gap-3">
              {genreOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setGenreFilter(option)}
                  className={`px-5 py-2.5 text-sm border rounded-sm transition-all duration-300 font-serif ${
                    genreFilter === option
                      ? 'bg-vintage-700 text-white border-vintage-700'
                      : 'bg-white text-vintage-700 border-vintage-300 hover:border-vintage-500 hover:bg-vintage-50'
                  }`}
                >
                  {genreLabels[option]?.[language] || option}
                </button>
              ))}
            </div>
          </div>

          {/* 楽器フィルター */}
          <div>
            <label className="block text-sm font-serif font-normal mb-4 text-vintage-700 tracking-wide">
              {language === 'ja' ? '楽器' : language === 'de' ? 'Instrumente' : 'Instruments'}
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setInstrumentFilter('All')}
                className={`px-5 py-2.5 text-sm border rounded-sm transition-all duration-300 font-serif ${
                  instrumentFilter === 'All'
                    ? 'bg-vintage-700 text-white border-vintage-700'
                    : 'bg-white text-vintage-700 border-vintage-300 hover:border-vintage-500 hover:bg-vintage-50'
                }`}
              >
                {language === 'ja' ? 'すべて' : language === 'de' ? 'Alle' : 'All'}
              </button>
              {availableInstruments.map((instrument) => (
                <button
                  key={instrument}
                  onClick={() => setInstrumentFilter(instrumentFilter === instrument ? 'All' : instrument)}
                  className={`px-5 py-2.5 text-sm border rounded-sm transition-all duration-300 font-serif ${
                    instrumentFilter === instrument
                      ? 'bg-vintage-700 text-white border-vintage-700'
                      : 'bg-white text-vintage-700 border-vintage-300 hover:border-vintage-500 hover:bg-vintage-50'
                  }`}
                >
                  {instrumentLabels[instrument]?.[language] || instrument}
                </button>
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* 作品一覧 - 絵葉書風 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {filteredWorks.length > 0 ? (
            filteredWorks.map((work, index) => (
              <AnimatedSection key={work.id} direction="up" delay={index * 50}>
                <Link
                  href={`/works/${work.id}`}
                  className="group block h-full"
                >
                  <div className="aspect-square bg-vintage-100 rounded-sm overflow-hidden mb-6 group-hover:opacity-90 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                    <div className="w-full h-full flex items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors">
                      <span className="text-sm px-6 text-center font-serif-jp">{work.title}</span>
                    </div>
                    {/* フィルムカメラ風のオーバーレイ */}
                    <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
                    {/* ジャンルバッジ */}
                    <div className="absolute top-4 right-4">
                      <span className="text-xs px-3 py-1 bg-white/95 backdrop-blur-sm rounded-sm text-vintage-700 font-serif tracking-wide uppercase border border-vintage-200">
                        {genreLabels[work.genre]?.[language] || work.genre}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-serif font-normal mb-3 group-hover:text-vintage-700 transition-colors duration-300 text-vintage-900">{work.title}</h2>
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
            ))
          ) : (
            <AnimatedSection direction="up" delay={0}>
              <div className="col-span-full text-center py-24 text-vintage-500 font-serif text-lg">
                {language === 'ja' ? '該当する作品が見つかりませんでした' : language === 'de' ? 'Keine Werke gefunden' : 'No works found'}
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  )
}


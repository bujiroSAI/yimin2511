'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import AnimatedSection from '@/components/AnimatedSection'

interface NewsItem {
  id: string
  date: string
  title: Record<'ja' | 'de' | 'en', string>
  content: Record<'ja' | 'de' | 'en', string>
  category: string
}

const newsData: NewsItem[] = [
  {
    id: 'news-1',
    date: '2025-06-18',
    title: {
      ja: 'オペラ《船はついに安らぎぬ》初演',
      de: 'Uraufführung der Oper "船はついに安らぎぬ"',
      en: 'Premiere of Opera "船はついに安らぎぬ"',
    },
    content: {
      ja: 'オペラカンパニーNovanta Quattroの作曲家公募において選出され、オペラ《船はついに安らぎぬ》（脚本・河野咲子）を成城ホールにて委嘱初演しました。',
      de: 'Ausgewählt im Komponistenwettbewerb der Operngesellschaft Novanta Quattro, Uraufführung der Oper "船はついに安らぎぬ" (Libretto: Sakiko Kono) im Seijo Hall.',
      en: 'Selected in the composer competition of Opera Company Novanta Quattro, premiere of the opera "船はついに安らぎぬ" (Libretto: Sakiko Kono) at Seijo Hall.',
    },
    category: 'Premiere',
  },
  {
    id: 'news-2',
    date: '2025-05-28',
    title: {
      ja: 'バレエ音楽『umschlungen』初演',
      de: 'Uraufführung der Ballettmusik "umschlungen"',
      en: 'Premiere of Ballet Music "umschlungen"',
    },
    content: {
      ja: 'ミュンヘンバレエアカデミーと現代音楽アンサンブルのEnsemble Oktopusによる委嘱で、バレエ音楽『umschlungen』をReaktorhalle（ドイツ・ミュンヘン）にて初演しました。',
      de: 'Auftragswerk der Münchner Ballettakademie und des Ensembles Oktopus, Uraufführung der Ballettmusik "umschlungen" in der Reaktorhalle (München, Deutschland).',
      en: 'Commissioned work by Munich Ballet Academy and Ensemble Oktopus, premiere of ballet music "umschlungen" at Reaktorhalle (Munich, Germany).',
    },
    category: 'Premiere',
  },
  {
    id: 'news-3',
    date: '2025-04-15',
    title: {
      ja: 'work out ヘルシンキで初演',
      de: 'Uraufführung von "work out" in Helsinki',
      en: 'Premiere of "work out" in Helsinki',
    },
    content: {
      ja: 'アコーディオンとヴァイオリンのためのデュオ作品『work out』がシベリウス音楽院アコーディオンフェスティバル2025に取り上げられ、フィンランド・ヘルシンキにて初演されました。',
      de: 'Das Duo-Werk für Akkordeon und Violine "work out" wurde beim Sibelius-Akademie-Akkordeonfestival 2025 aufgeführt und in Helsinki, Finnland uraufgeführt.',
      en: 'The duo work for accordion and violin "work out" was featured at the Sibelius Academy Accordion Festival 2025 and premiered in Helsinki, Finland.',
    },
    category: 'Premiere',
  },
  {
    id: 'news-4',
    date: '2024-12-20',
    title: {
      ja: 'Lovely Lonely Christmas 初演',
      de: 'Uraufführung von "Lovely Lonely Christmas"',
      en: 'Premiere of "Lovely Lonely Christmas"',
    },
    content: {
      ja: 'ミュンヘンの現代音楽団体NKM（Neues Kollektive München）の委嘱を受け、ピアノトリオとエレキギターのための作品『Lovely Lonely Christmas』をschwere reiter（ドイツ・ミュンヘン）にて初演しました。',
      de: 'Auftragswerk der NKM (Neues Kollektive München), Uraufführung von "Lovely Lonely Christmas" für Klaviertrio und E-Gitarre im schwere reiter (München, Deutschland).',
      en: 'Commissioned work by NKM (Neues Kollektive München), premiere of "Lovely Lonely Christmas" for piano trio and electric guitar at schwere reiter (Munich, Germany).',
    },
    category: 'Premiere',
  },
  {
    id: 'news-5',
    date: '2024-10-15',
    title: {
      ja: 'AIと音楽の共同プロジェクト',
      de: 'Gemeinsames Projekt mit KI und Musik',
      en: 'Joint Project with AI and Music',
    },
    content: {
      ja: 'ミュンヘン音楽演劇大学とAIの共同プロジェクトに参加し、自動演奏ピアノと弦楽オーケストラのための作品『Klavier Konzert』がミュンヘンフィルハーモニー（指揮・Hankyeol Yoon）によりBrain Labo（ドイツ・ミュンヘン）にて初演されました。',
      de: 'Teilnahme am gemeinsamen Projekt der Hochschule für Musik und Theater München mit KI, Uraufführung von "Klavier Konzert" für selbstspielendes Klavier und Streichorchester durch die Münchner Philharmoniker (Dirigent: Hankyeol Yoon) im Brain Labo (München, Deutschland).',
      en: 'Participated in the joint project of the University of Music and Performing Arts Munich with AI, premiere of "Klavier Konzert" for self-playing piano and string orchestra by the Munich Philharmonic (Conductor: Hankyeol Yoon) at Brain Labo (Munich, Germany).',
    },
    category: 'Project',
  },
]

export default function NewsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 py-20">
        <AnimatedSection direction="up" delay={0}>
          <h1 className="text-5xl md:text-7xl font-light mb-16">
            {language === 'ja' ? 'News' : language === 'de' ? 'Nachrichten' : 'News'}
          </h1>
        </AnimatedSection>
        
        <div className="space-y-12">
          {newsData.map((news, index) => (
            <AnimatedSection key={news.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 100}>
              <article className="border-b border-black/10 pb-12 last:border-b-0 hover:border-accent transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <time className="text-sm text-black/60 group-hover:text-accent transition-colors duration-300">
                    {new Date(news.date).toLocaleDateString(
                      language === 'ja' ? 'ja-JP' : language === 'de' ? 'de-DE' : 'en-US',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </time>
                  <span className="text-xs px-3 py-1 bg-black/5 rounded-full text-black/60 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                    {news.category}
                  </span>
                </div>
                <h2 className="text-2xl font-light mb-4 group-hover:text-accent transition-colors duration-300">
                  {news.title[language]}
                </h2>
                <p className="text-base text-black/70 leading-relaxed group-hover:text-black/90 transition-colors duration-300">
                  {news.content[language]}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}


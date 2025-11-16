'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/lib/translations'
import { worksData as allWorks } from '@/lib/worksData'
import AnimatedSection from '@/components/AnimatedSection'

// ワークス詳細データ
const worksDetailData: Record<string, {
  title: Record<'ja' | 'de' | 'en', string>
  englishTitle?: string
  project: Record<'ja' | 'de' | 'en', string>
  client: Record<'ja' | 'de' | 'en', string>
  date: string
  service: Record<'ja' | 'de' | 'en', string>
  challenge: Record<'ja' | 'de' | 'en', string>
  description: Record<'ja' | 'de' | 'en', string>
  websiteUrl?: string
  youtubeUrl?: string
  youtubeThumbnail?: string
  soundcloudUrl?: string
  soundcloudThumbnail?: string
}> = {
  'opera-fune': {
    title: {
      ja: 'オペラ《船はついに安らぎぬ》',
      de: 'Oper "船はついに安らぎぬ"',
      en: 'Opera "船はついに安らぎぬ"',
    },
    englishTitle: 'The Ship Never Finds Rest',
    project: {
      ja: 'オペラ',
      de: 'Oper',
      en: 'Opera',
    },
    client: {
      ja: 'オペラカンパニーNovanta Quattro',
      de: 'Operngesellschaft Novanta Quattro',
      en: 'Opera Company Novanta Quattro',
    },
    date: 'Jun 18, 2025',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'オペラカンパニーNovanta Quattroの作曲家公募において選出され、河野咲子氏の脚本に基づいてオペラ作品を制作。日本語オペラの新しい表現を追求しました。',
      de: 'Ausgewählt im Komponistenwettbewerb der Operngesellschaft Novanta Quattro, komponierte ich eine Oper basierend auf dem Libretto von Sakiko Kono. Ich strebte nach einem neuen Ausdruck in der japanischen Oper.',
      en: 'Selected in the composer competition of Opera Company Novanta Quattro, I composed an opera based on the libretto by Sakiko Kono. I pursued a new expression in Japanese opera.',
    },
    description: {
      ja: '成城ホールにて委嘱初演。脚本は河野咲子氏による。日本語オペラの伝統と現代的な表現を融合させた作品です。',
      de: 'Uraufführung im Seijo Hall. Das Libretto stammt von Sakiko Kono. Ein Werk, das die Tradition der japanischen Oper mit modernem Ausdruck verbindet.',
      en: 'Premiere at Seijo Hall. The libretto is by Sakiko Kono. A work that combines the tradition of Japanese opera with modern expression.',
    },
  },
  'ballet-umschlungen': {
    title: {
      ja: 'バレエ音楽『umschlungen』',
      de: 'Ballettmusik "umschlungen"',
      en: 'Ballet Music "umschlungen"',
    },
    englishTitle: 'umschlungen',
    project: {
      ja: 'バレエ音楽',
      de: 'Ballettmusik',
      en: 'Ballet Music',
    },
    client: {
      ja: 'ミュンヘンバレエアカデミー / Ensemble Oktopus',
      de: 'Münchner Ballettakademie / Ensemble Oktopus',
      en: 'Munich Ballet Academy / Ensemble Oktopus',
    },
    date: 'May 28, 2025',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'ミュンヘンバレエアカデミーと現代音楽アンサンブルのEnsemble Oktopusによる委嘱で、バレエと現代音楽の融合を実現しました。',
      de: 'Durch den Auftrag der Münchner Ballettakademie und des zeitgenössischen Musikensembles Ensemble Oktopus gelang es mir, Ballett und zeitgenössische Musik zu fusionieren.',
      en: 'Through a commission from the Munich Ballet Academy and the contemporary music ensemble Ensemble Oktopus, I achieved a fusion of ballet and contemporary music.',
    },
    description: {
      ja: 'Reaktorhalle（ドイツ・ミュンヘン）にて初演。バレエの動きと現代音楽の響きが織りなす作品です。レビューはKlassik begeistertに掲載されました。',
      de: 'Uraufführung in der Reaktorhalle (München, Deutschland). Ein Werk, das die Bewegungen des Balletts mit den Klängen zeitgenössischer Musik verwebt. Die Rezension wurde in Klassik begeistert veröffentlicht.',
      en: 'Premiere at Reaktorhalle (Munich, Germany). A work that weaves together the movements of ballet with the sounds of contemporary music. The review was published in Klassik begeistert.',
    },
    soundcloudUrl: 'https://soundcloud.com/minami-nagai/umschlungen-2025',
    soundcloudThumbnail: '/works/soundcloud-umschlungen.jpg',
  },
  'work-out': {
    title: {
      ja: 'work out',
      de: 'work out',
      en: 'work out',
    },
    englishTitle: 'work out',
    project: {
      ja: 'デュオ',
      de: 'Duo',
      en: 'Duo',
    },
    client: {
      ja: 'シベリウス音楽院アコーディオンフェスティバル2025',
      de: 'Sibelius-Akademie-Akkordeonfestival 2025',
      en: 'Sibelius Academy Accordion Festival 2025',
    },
    date: 'Apr, 2025',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'アコーディオンとヴァイオリンという異なる楽器の特性を活かし、対話的な音楽を創り出すことを目指しました。',
      de: 'Ich strebte danach, die Eigenschaften verschiedener Instrumente wie Akkordeon und Violine zu nutzen und einen dialogischen Klang zu schaffen.',
      en: 'I aimed to utilize the characteristics of different instruments such as accordion and violin to create a dialogical sound.',
    },
    description: {
      ja: 'アコーディオンとヴァイオリンのためのデュオ作品。シベリウス音楽院アコーディオンフェスティバル2025に取り上げられ、フィンランド・ヘルシンキにて初演。作品は好評を受け、ドイツ・ミュンヘンでも再演されました。',
      de: 'Duo-Werk für Akkordeon und Violine. Aufgeführt beim Sibelius-Akademie-Akkordeonfestival 2025, Uraufführung in Helsinki, Finnland. Das Werk wurde gut aufgenommen und auch in München, Deutschland, wiederaufgeführt.',
      en: 'Duo work for accordion and violin. Featured at the Sibelius Academy Accordion Festival 2025, premiered in Helsinki, Finland. The work was well received and also performed again in Munich, Germany.',
    },
  },
  'lovely-lonely-christmas': {
    title: {
      ja: 'Lovely Lonely Christmas',
      de: 'Lovely Lonely Christmas',
      en: 'Lovely Lonely Christmas',
    },
    englishTitle: 'Lovely Lonely Christmas',
    project: {
      ja: '室内楽',
      de: 'Kammermusik',
      en: 'Chamber Music',
    },
    client: {
      ja: 'NKM (Neues Kollektive München)',
      de: 'NKM (Neues Kollektive München)',
      en: 'NKM (Neues Kollektive München)',
    },
    date: 'Dec, 2024',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'ピアノトリオとエレキギターという異質な組み合わせで、クリスマスの孤独と美しさを表現しました。',
      de: 'Mit der ungewöhnlichen Kombination aus Klaviertrio und E-Gitarre drückte ich die Einsamkeit und Schönheit des Weihnachtsfests aus.',
      en: 'With the unusual combination of piano trio and electric guitar, I expressed the loneliness and beauty of Christmas.',
    },
    description: {
      ja: 'ミュンヘンの現代音楽団体NKM（Neues Kollektive München）の委嘱を受け、ピアノトリオとエレキギターのための作品。schwere reiter（ドイツ・ミュンヘン）にて初演。',
      de: 'Auftragswerk der zeitgenössischen Musikorganisation NKM (Neues Kollektive München) für Klaviertrio und E-Gitarre. Uraufführung im schwere reiter (München, Deutschland).',
      en: 'Commissioned work by the contemporary music organization NKM (Neues Kollektive München) for piano trio and electric guitar. Premiere at schwere reiter (Munich, Germany).',
    },
    soundcloudUrl: 'https://soundcloud.com/minami-nagai/lovely-lonely-christmas-2024',
    soundcloudThumbnail: '/works/soundcloud-lovely-lonely-christmas.jpg',
  },
  'klavier-konzert': {
    title: {
      ja: 'Klavier Konzert',
      de: 'Klavier Konzert',
      en: 'Klavier Konzert',
    },
    englishTitle: 'Klavier Konzert',
    project: {
      ja: 'オーケストラ',
      de: 'Orchester',
      en: 'Orchestra',
    },
    client: {
      ja: 'ミュンヘン音楽演劇大学 / AI共同プロジェクト',
      de: 'Hochschule für Musik und Theater München / KI-Gemeinschaftsprojekt',
      en: 'University of Music and Performing Arts Munich / AI Joint Project',
    },
    date: 'Oct, 2024',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'AIと人間の創造性の融合をテーマに、自動演奏ピアノと弦楽オーケストラのための作品を制作しました。',
      de: 'Mit dem Thema der Fusion von KI und menschlicher Kreativität schuf ich ein Werk für selbstspielendes Klavier und Streichorchester.',
      en: 'With the theme of fusion between AI and human creativity, I created a work for self-playing piano and string orchestra.',
    },
    description: {
      ja: 'ミュンヘン音楽演劇大学とAIの共同プロジェクトに参加。自動演奏ピアノと弦楽オーケストラのための作品。ミュンヘンフィルハーモニー（指揮・Hankyeol Yoon）によりBrain Labo（ドイツ・ミュンヘン）にて初演。',
      de: 'Teilnahme am gemeinsamen Projekt der Hochschule für Musik und Theater München mit KI. Werk für selbstspielendes Klavier und Streichorchester. Uraufführung durch die Münchner Philharmoniker (Dirigent: Hankyeol Yoon) im Brain Labo (München, Deutschland).',
      en: 'Participated in the joint project of the University of Music and Performing Arts Munich with AI. Work for self-playing piano and string orchestra. Premiere by the Munich Philharmonic (Conductor: Hankyeol Yoon) at Brain Labo (Munich, Germany).',
    },
  },
  'peacock': {
    title: {
      ja: '孔雀は羽を広げて - オーケストラのために',
      de: '孔雀は羽を広げて - Für Orchester',
      en: '孔雀は羽を広げて - For Orchestra',
    },
    englishTitle: 'The Peacock Spreads Its Wings - For Orchestra',
    project: {
      ja: 'オーケストラ',
      de: 'Orchester',
      en: 'Orchestra',
    },
    client: {
      ja: '新日本フィルハーモニー交響楽団',
      de: 'New Japan Philharmonic Orchestra',
      en: 'New Japan Philharmonic Orchestra',
    },
    date: 'Mar, 2024',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: 'オーケストラの豊かな響きを活かし、孔雀の美しさと優雅さを音楽で表現しました。',
      de: 'Ich nutzte den reichen Klang des Orchesters, um die Schönheit und Eleganz des Pfaus in der Musik auszudrücken.',
      en: 'I utilized the rich sound of the orchestra to express the beauty and elegance of the peacock in music.',
    },
    description: {
      ja: 'オーケストラ作品。新日本フィルハーモニー交響楽団（指揮・齋藤友香理）によって第一生命ホール（東京）にて初演。',
      de: 'Orchesterwerk. Uraufführung durch das New Japan Philharmonic Orchestra (Dirigentin: Yukari Saito) in der Dai-ichi Seimei Hall (Tokio).',
      en: 'Orchestra work. Premiere by the New Japan Philharmonic Orchestra (Conductor: Yukari Saito) at Dai-ichi Seimei Hall (Tokyo).',
    },
  },
  'opera-aoi': {
    title: {
      ja: 'オペラ《葵上のあわい》',
      de: 'Oper "葵上のあわい"',
      en: 'Opera "葵上のあわい"',
    },
    englishTitle: 'The Ambiguity of Lady Aoi',
    project: {
      ja: 'オペラ',
      de: 'Oper',
      en: 'Opera',
    },
    client: {
      ja: 'シバムジーク',
      de: 'Shibamusic',
      en: 'Shibamusic',
    },
    date: 'Sep 15, 2023',
    service: {
      ja: '作曲',
      de: 'Komposition',
      en: 'Composition',
    },
    challenge: {
      ja: '音楽制作会社シバムジークの委嘱により、角直之氏の台本に基づいてオペラ作品を制作。源氏物語をモチーフにした現代的な解釈を音楽で表現しました。',
      de: 'Durch den Auftrag der Musikproduktionsfirma Shibamusic schuf ich eine Oper basierend auf dem Libretto von Naoyuki Tsunogai. Ich drückte eine moderne Interpretation mit dem Motiv des Genji Monogatari in der Musik aus.',
      en: 'Through a commission from the music production company Shibamusic, I created an opera based on the libretto by Naoyuki Tsunogai. I expressed a modern interpretation with the motif of The Tale of Genji in music.',
    },
    description: {
      ja: '音楽制作会社シバムジークの委嘱により、オペラ《葵上のあわい》（台本・角直之）をミレニアムホール（東京）にて初演。',
      de: 'Durch den Auftrag der Musikproduktionsfirma Shibamusic wurde die Oper "葵上のあわい" (Libretto: Naoyuki Tsunogai) in der Millennium Hall (Tokio) uraufgeführt.',
      en: 'Through a commission from the music production company Shibamusic, the opera "葵上のあわい" (Libretto: Naoyuki Tsunogai) premiered at Millennium Hall (Tokyo).',
    },
  },
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const { language } = useLanguage()
  const t = translations[language]
  const workDetail = worksDetailData[params.id]
  const work = allWorks.find(w => w.id === params.id)

  if (!workDetail || !work) {
    notFound()
  }

  return (
    <div className="pt-20 min-h-screen bg-cream-50">
      <div className="max-w-5xl mx-auto px-8 lg:px-24 py-32">
        {/* Back Link */}
        <AnimatedSection direction="left" delay={0}>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-vintage-600 hover:text-vintage-800 mb-16 transition-all duration-300 hover:translate-x-2 group font-serif"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>{t.works.backToWorks}</span>
          </Link>
        </AnimatedSection>

        {/* Title - 絵葉書風 */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-[0.02em] leading-tight text-vintage-900 mb-4">
              {workDetail.title[language]}
            </h1>
            {workDetail.englishTitle && (
              <p className="text-xl md:text-2xl lg:text-3xl font-serif font-normal tracking-[0.02em] text-vintage-600 italic">
                {workDetail.englishTitle}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Project Info - 絵葉書風 */}
        <AnimatedSection direction="up" delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 pb-24 border-b border-vintage-200">
            {[
              { label: t.works.project, value: workDetail.project[language] },
              { label: t.works.client, value: workDetail.client[language] },
              { label: t.works.date, value: workDetail.date },
              { label: t.works.service, value: workDetail.service[language] },
            ].map((item, index) => (
              <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={500 + index * 50}>
                <div className="group">
                  <h3 className="text-sm font-serif font-normal mb-3 text-vintage-600 group-hover:text-vintage-800 transition-colors duration-300 tracking-wide">{item.label}</h3>
                  <p className="text-lg md:text-xl text-vintage-900 group-hover:text-vintage-700 transition-colors duration-300 font-serif-jp">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Tags - 絵葉書風 */}
        {work.tags.length > 0 && (
          <AnimatedSection direction="up" delay={700}>
            <div className="mb-12 flex flex-wrap gap-3">
              {work.tags.map((tag, index) => (
                <span
                  key={tag}
                  className="text-xs px-4 py-2 bg-vintage-50 border border-vintage-200 rounded-sm text-vintage-700 hover:bg-vintage-100 hover:border-vintage-300 transition-all duration-300 transform hover:scale-105 cursor-default font-serif-jp"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Challenge Section - 絵葉書風 */}
        <AnimatedSection direction="up" delay={800}>
          <div className="mb-24">
            <h2 className="text-xl md:text-2xl font-serif font-normal mb-8 text-vintage-900 tracking-wide">{t.works.challenge}</h2>
            <p className="text-base md:text-lg text-vintage-800 leading-relaxed max-w-3xl font-serif-jp">
              {workDetail.challenge[language]}
            </p>
          </div>
        </AnimatedSection>

        {/* Main Image/Media - 絵葉書風 */}
        <AnimatedSection direction="up" delay={900}>
          <div className="mb-24">
            <div className="aspect-video bg-vintage-100 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 group relative" style={{ filter: 'sepia(5%)' }}>
              <div className="w-full h-full flex items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors">
                <span className="text-sm font-serif-jp">アルバム/シングルカバー画像</span>
              </div>
              <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Description - 絵葉書風 */}
        <AnimatedSection direction="up" delay={1000}>
          <div className="mb-24 max-w-3xl">
            <p className="text-lg md:text-xl text-vintage-800 leading-relaxed font-serif-jp">
              {workDetail.description[language]}
            </p>
          </div>
        </AnimatedSection>

        {/* YouTube & SoundCloud Section - 絵葉書風 */}
        {(workDetail.youtubeUrl || workDetail.soundcloudUrl) && (
          <AnimatedSection direction="up" delay={1100}>
            <div className="mb-24 space-y-12">
              <h2 className="text-2xl md:text-3xl font-serif font-normal mb-12 text-vintage-900 tracking-wide">
                {language === 'ja' ? '音源' : language === 'de' ? 'Audio' : 'Audio'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* YouTube */}
                {workDetail.youtubeUrl && (
                  <div className="group">
                    <a
                      href={workDetail.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="aspect-video bg-vintage-100 border border-vintage-200 overflow-hidden mb-4 group-hover:border-vintage-400 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                        {workDetail.youtubeThumbnail ? (
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{
                              backgroundImage: `url(${workDetail.youtubeThumbnail})`,
                              filter: 'sepia(10%) contrast(1.05) brightness(0.98)',
                            }}
                          >
                            <div className="absolute inset-0 bg-vintage-900/20 flex items-center justify-center group-hover:bg-vintage-900/10 transition-all duration-500">
                              <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span className="text-xs font-light tracking-wide font-serif">YouTube</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors">
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                              <span className="text-sm font-serif-jp">YouTube</span>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
                      </div>
                      <p className="text-sm text-vintage-600 font-serif text-center">YouTube</p>
                    </a>
                  </div>
                )}

                {/* SoundCloud */}
                {workDetail.soundcloudUrl && (
                  <div className="group">
                    <a
                      href={workDetail.soundcloudUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="aspect-video bg-vintage-100 border border-vintage-200 overflow-hidden mb-4 group-hover:border-vintage-400 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                        {workDetail.soundcloudThumbnail ? (
                          <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{
                              backgroundImage: `url(${workDetail.soundcloudThumbnail})`,
                              filter: 'sepia(10%) contrast(1.05) brightness(0.98)',
                            }}
                          >
                            <div className="absolute inset-0 bg-vintage-900/20 flex items-center justify-center group-hover:bg-vintage-900/10 transition-all duration-500">
                              <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5c-4.135 0-7.5-3.365-7.5-7.5S7.865 4.5 12 4.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5zm-1.5-10.5v6l6-3-6-3z"/>
                                </svg>
                                <span className="text-xs font-light tracking-wide font-serif">SoundCloud</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors">
                            <div className="text-center">
                              <svg className="w-16 h-16 mx-auto mb-3 opacity-90 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5c-4.135 0-7.5-3.365-7.5-7.5S7.865 4.5 12 4.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5zm-1.5-10.5v6l6-3-6-3z"/>
                              </svg>
                              <span className="text-sm font-serif-jp">SoundCloud</span>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
                      </div>
                      <p className="text-sm text-vintage-600 font-serif text-center">SoundCloud</p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Website Link - 絵葉書風 */}
        {workDetail.websiteUrl && (
          <AnimatedSection direction="up" delay={1200}>
            <div className="mb-24">
              <a
                href={workDetail.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border border-vintage-300 px-6 py-3 rounded-sm hover:bg-vintage-50 transition-all duration-300 hover:scale-105 hover:border-vintage-500 group font-serif text-vintage-700 hover:text-vintage-900"
              >
                <span>Launch website</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </AnimatedSection>
        )}

        {/* Related Projects - 絵葉書風 */}
        <AnimatedSection direction="up" delay={1300}>
          <div className="pt-24 border-t border-vintage-200">
            <h2 className="text-2xl md:text-3xl font-serif font-normal mb-12 text-vintage-900 tracking-wide">{t.works.relatedProjects}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {allWorks
                .filter((w) => w.id !== params.id)
                .slice(0, 3)
                .map((relatedWork, index) => (
                  <AnimatedSection key={relatedWork.id} direction="up" delay={1400 + index * 100}>
                    <Link
                      href={`/works/${relatedWork.id}`}
                      className="group block"
                    >
                      <div className="aspect-square bg-vintage-100 rounded-sm overflow-hidden mb-6 group-hover:opacity-90 transition-all duration-500 relative" style={{ filter: 'sepia(5%)' }}>
                        <div className="w-full h-full flex items-center justify-center text-vintage-400 group-hover:text-vintage-600 transition-colors">
                          <span className="text-sm px-4 text-center font-serif-jp">{relatedWork.title}</span>
                        </div>
                        <div className="absolute inset-0 bg-cream-50/0 group-hover:bg-cream-50/10 transition-all duration-500"></div>
                      </div>
                      <h3 className="text-lg md:text-xl font-serif font-normal group-hover:text-vintage-700 transition-colors duration-300 text-vintage-900">{relatedWork.title}</h3>
                    </Link>
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}



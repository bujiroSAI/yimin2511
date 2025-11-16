export interface Work {
  id: string
  title: string
  year: string
  category: string
  image: string
  genre: 'Opera' | 'Ballet' | 'Orchestra' | 'Chamber Music' | 'Concert' | 'Contemporary' | 'Solo' | 'Duo'
  instruments: string[] // 楽器の配列
  tags: string[]
}

export const worksData: Work[] = [
  {
    id: 'new-me',
    title: 'NEW ME',
    year: '2025',
    category: 'Contemporary',
    image: '/works/new-me.png',
    genre: 'Contemporary',
    instruments: [],
    tags: ['現代音楽', '2025'],
  },
  {
    id: 'opera-fune',
    title: 'オペラ《船はついに安らぎぬ》',
    year: '2025',
    category: 'Opera',
    image: '/works/船はついに安らぎぬ.jpg',
    genre: 'Opera',
    instruments: ['声楽', 'オーケストラ'],
    tags: ['オペラ', '日本語オペラ', '委嘱作品', '2025'],
  },
  {
    id: 'ballet-umschlungen',
    title: 'バレエ音楽『umschlungen』',
    year: '2025',
    category: 'Ballet',
    image: '/works/umschlungen.jpg',
    genre: 'Ballet',
    instruments: ['オーケストラ', '現代音楽アンサンブル'],
    tags: ['バレエ', '現代音楽', '委嘱作品', '2025'],
  },
  {
    id: 'work-out',
    title: 'work out',
    year: '2025',
    category: 'Duo',
    image: '/works/work-out.jpg',
    genre: 'Contemporary',
    instruments: ['アコーディオン', 'ヴァイオリン'],
    tags: ['デュオ', 'アコーディオン', 'ヴァイオリン', '2025'],
  },
  {
    id: 'lovely-lonely-christmas',
    title: 'Lovely Lonely Christmas',
    year: '2024',
    category: 'Chamber Music',
    image: '/works/lovely-lonely-christmas.jpg',
    genre: 'Chamber Music',
    instruments: ['ピアノ', 'ヴァイオリン', 'チェロ', 'エレキギター'],
    tags: ['室内楽', 'ピアノトリオ', 'エレキギター', '2024'],
  },
  {
    id: 'klavier-konzert',
    title: 'Klavier Konzert',
    year: '2024',
    category: 'Orchestra',
    image: '/works/klavier-konzert.jpg',
    genre: 'Concert',
    instruments: ['ピアノ', '弦楽オーケストラ'],
    tags: ['オーケストラ', 'ピアノ', 'AI', '2024'],
  },
  {
    id: 'peacock',
    title: '孔雀は羽を広げて - オーケストラのために',
    year: '2024',
    category: 'Orchestra',
    image: '/works/peacock.jpg',
    genre: 'Orchestra',
    instruments: ['オーケストラ'],
    tags: ['オーケストラ', '委嘱作品', '2024'],
  },
  {
    id: 'opera-aoi',
    title: 'オペラ《葵上のあわい》',
    year: '2023',
    category: 'Opera',
    image: '/works/opera-aoi.jpg',
    genre: 'Opera',
    instruments: ['声楽', 'オーケストラ'],
    tags: ['オペラ', '日本語オペラ', '委嘱作品', '2023'],
  },
]

export const genreOptions = [
  'All',
  'Opera',
  'Ballet',
  'Orchestra',
  'Chamber Music',
  'Concert',
  'Contemporary',
  'Solo',
  'Duo',
] as const

// 楽器オプション（作品データから自動生成される）
export const instrumentOptions = [
  'All',
  'ピアノ',
  'ヴァイオリン',
  'チェロ',
  'アコーディオン',
  'エレキギター',
  'オーケストラ',
  '弦楽オーケストラ',
  '声楽',
  '現代音楽アンサンブル',
] as const

export type GenreFilter = typeof genreOptions[number]
export type InstrumentFilter = typeof instrumentOptions[number]


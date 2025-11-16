export type Language = 'ja' | 'de' | 'en'

export interface Translations {
  nav: {
    home: string
    about: string
    works: string
    news: string
    contact: string
  }
  home: {
    title: string
    subtitle: string
    composer: string
    pianist: string
    description: string
    profileText1: string
    profileText2: string
    worksLink: string
    worksLinkSubtitle: string
  }
  about: {
    title: string
    name: string
    role: string
    bio1: string
    bio2: string
    bio3: string
    achievements: string
    mainAchievement: string
    year2025: string
    year2025Items: string[]
    year2024: string
    year2024Items: string[]
    year2023: string
    year2023Items: string[]
    otherActivities: string
    activity1: string
    activity2: string
    activity3: string
  }
  works: {
    title: string
    backToWorks: string
    project: string
    client: string
    date: string
    service: string
    challenge: string
    relatedProjects: string
  }
  contact: {
    title: string
    inquiry: string
    inquiryText: string
    location: string
    locationText: string
    social: string
  }
  footer: {
    location: string
    email: string
    social: string
    copyright: string
  }
}

export const translations: Record<Language, Translations> = {
  ja: {
    nav: {
      home: '01Home',
      about: '02ABOUT',
      works: '03WORKS',
      news: '04NEWS',
      contact: '05CONTACT',
    },
    home: {
      title: 'Minami Nagai',
      subtitle: '作曲家・ピアニスト。ドイツ・ミュンヘンと東京を拠点に活動。',
      composer: 'composer',
      pianist: 'pianist',
      description: '',
      profileText1: '大阪府出身。大阪府立夕陽丘高校音楽科ピアノ専攻を経て、東京藝術大学音楽学部作曲科卒業。2022年に渡独し、現在ミュンヘン音楽演劇大学作曲科修士課程に在籍。',
      profileText2: '作曲をMoritz Eggert氏に、リート伴奏をRudi Spring氏に師事。現在はドイツ・ミュンヘンと東京を拠点に作曲・編曲・演奏活動を展開する。2026年にはオランダ・アムステルダムでのアーティストインレジデンスにも招聘されており、国外からも注目される。',
      worksLink: 'Works',
      worksLinkSubtitle: '作品一覧を見る',
    },
    about: {
      title: 'About',
      name: '永井 みなみ',
      role: '作曲家・ピアニスト',
      bio1: '大阪府出身。大阪府立夕陽丘高校音楽科ピアノ専攻を経て、東京藝術大学音楽学部作曲科卒業。',
      bio2: '2022年に渡独し、現在ミュンヘン音楽演劇大学作曲科修士課程に在籍。作曲をMoritz Eggert氏に、リート伴奏をRudi Spring氏に師事。現在はドイツ・ミュンヘンと東京を拠点に作曲・編曲・演奏活動を展開する。',
      bio3: '2026年にはオランダ・アムステルダムでのアーティストインレジデンスにも招聘されており、国外からも注目される。',
      achievements: '主な受賞・実績',
      mainAchievement: '第8回東京国際歌曲作曲コンクール最高位受賞',
      year2025: '2025年',
      year2025Items: [
        '6月、オペラカンパニーNovanta Quattroの作曲家公募において選出され、オペラ《船はついに安らぎぬ》（脚本・河野咲子）を成城ホールにて委嘱初演',
        '5月、ミュンヘンバレエアカデミーと現代音楽アンサンブルのEnsemble Oktopusによる委嘱で、バレエ音楽『umschlungen』をReaktorhalle（ドイツ・ミュンヘン）にて初演',
        '4月、アコーディオンとヴァイオリンのためのデュオ作品『work out』がシベリウス音楽院アコーディオンフェスティバル2025に取り上げられ、フィンランド・ヘルシンキにて初演',
      ],
      year2024: '2024年',
      year2024Items: [
        '12月、ミュンヘンの現代音楽団体NKM（Neues Kollektive München）の委嘱を受け、ピアノトリオとエレキギターのための作品『Lovely Lonely Christmas』をschwere reiter（ドイツ・ミュンヘン）にて初演',
        '10月、ミュンヘン音楽演劇大学とAIの共同プロジェクトに参加し、自動演奏ピアノと弦楽オーケストラのための作品『Klavier Konzert』がミュンヘンフィルハーモニー（指揮・Hankyeol Yoon）によりBrain Labo（ドイツ・ミュンヘン）にて初演',
        '3月、オーケストラ作品『孔雀は羽を広げて - オーケストラのために』が新日本フィルハーモニー交響楽団（指揮・齋藤友香理）によって第一生命ホール（東京）にて初演',
      ],
      year2023: '2023年',
      year2023Items: [
        '9月、音楽制作会社シバムジークの委嘱によりオペラ《葵上のあわい》（台本・角直之）をミレニアムホール（東京）にて初演',
      ],
      otherActivities: 'その他の活動',
      activity1: '2018-20年、文化庁委託事業オペラ創作人材育成事業に選出され作曲家として日本語オペラの作曲に携わる。',
      activity2: '作品は、ミューズ・プレス出版、ワンハンドピアノミュージック、MIRAI RECORDSから出版されている。',
      activity3: 'ピアニストとしては、現代音楽作品を中心にドイツの現代音楽団体 Ensemble Oktopus やNeues Kollektive München などのほか、大学内のプロジェクトのコンサートにおいて、作品の初演に多く携わる。リート伴奏においては、ミュンヘンと東京を中心に数多くの歌手と共演し、コンクールやコンサートに出演する。',
    },
    works: {
      title: 'Works',
      backToWorks: 'Works に戻る',
      project: 'Project',
      client: 'Client',
      date: 'Date',
      service: 'Service',
      challenge: 'The challenge',
      relatedProjects: 'Related projects',
    },
    contact: {
      title: 'Contact',
      inquiry: 'お問い合わせ',
      inquiryText: '作品のご依頼、コンサートのご相談、コラボレーション、その他のお問い合わせは、以下のメールアドレスまでご連絡ください。',
      location: '活動拠点',
      locationText: 'ドイツ・ミュンヘンと東京を拠点に活動しています。',
      social: 'SNS',
    },
    footer: {
      location: 'Location',
      email: 'Email',
      social: 'Social',
      copyright: '© 2024 Minami Nagai. All rights reserved.',
    },
  },
  de: {
    nav: {
      home: '01Home',
      about: '02ÜBER',
      works: '03WERKE',
      news: '04NACHRICHTEN',
      contact: '05KONTAKT',
    },
    home: {
      title: 'Minami Nagai',
      subtitle: 'Komponistin und Pianistin. Aktiv in München, Deutschland und Tokio.',
      composer: 'Komponistin',
      pianist: 'Pianistin',
      description: '',
      profileText1: 'Geboren in Osaka. Abschluss an der Musikabteilung für Klavier der Osaka Prefectural Yuhigaoka High School, gefolgt von einem Abschluss in Komposition an der Tokyo University of the Arts. Seit 2022 in Deutschland und derzeit im Masterstudium Komposition an der Hochschule für Musik und Theater München.',
      profileText2: 'Studierte Komposition bei Moritz Eggert und Liedbegleitung bei Rudi Spring. Aktiv als Komponistin, Arrangeurin und Interpretin in München, Deutschland und Tokio. 2026 wird sie zu einem Artist-in-Residence-Programm in Amsterdam, Niederlande eingeladen und erregt auch international Aufmerksamkeit.',
      worksLink: 'Werke',
      worksLinkSubtitle: 'Werke anzeigen',
    },
    about: {
      title: 'Über',
      name: 'Minami Nagai',
      role: 'Komponistin und Pianistin',
      bio1: 'Geboren in Osaka. Abschluss an der Musikabteilung für Klavier der Osaka Prefectural Yuhigaoka High School, gefolgt von einem Abschluss in Komposition an der Tokyo University of the Arts.',
      bio2: 'Seit 2022 in Deutschland und derzeit im Masterstudium Komposition an der Hochschule für Musik und Theater München. Studierte Komposition bei Moritz Eggert und Liedbegleitung bei Rudi Spring. Aktiv als Komponistin, Arrangeurin und Interpretin in München, Deutschland und Tokio.',
      bio3: '2026 wird sie zu einem Artist-in-Residence-Programm in Amsterdam, Niederlande eingeladen und erregt auch international Aufmerksamkeit.',
      achievements: 'Hauptauszeichnungen und Erfolge',
      mainAchievement: 'Höchste Auszeichnung beim 8. Tokyo International Art Song Composition Competition',
      year2025: '2025',
      year2025Items: [
        'Juni: Ausgewählt im Komponistenwettbewerb der Operngesellschaft Novanta Quattro, Uraufführung der Oper "船はついに安らぎぬ" (Libretto: Sakiko Kono) im Seijo Hall',
        'Mai: Auftragswerk der Münchner Ballettakademie und des Ensembles Oktopus, Uraufführung der Ballettmusik "umschlungen" in der Reaktorhalle (München, Deutschland)',
        'April: Duo-Werk für Akkordeon und Violine "work out" beim Sibelius-Akademie-Akkordeonfestival 2025 aufgeführt, Uraufführung in Helsinki, Finnland',
      ],
      year2024: '2024',
      year2024Items: [
        'Dezember: Auftragswerk der NKM (Neues Kollektive München), Uraufführung von "Lovely Lonely Christmas" für Klaviertrio und E-Gitarre im schwere reiter (München, Deutschland)',
        'Oktober: Teilnahme am gemeinsamen Projekt der Hochschule für Musik und Theater München mit KI, Uraufführung von "Klavier Konzert" für selbstspielendes Klavier und Streichorchester durch die Münchner Philharmoniker (Dirigent: Hankyeol Yoon) im Brain Labo (München, Deutschland)',
        'März: Orchesterwerk "孔雀は羽を広げて - オーケストラのために" Uraufführung durch das New Japan Philharmonic Orchestra (Dirigentin: Yukari Saito) in der Dai-ichi Seimei Hall (Tokio)',
      ],
      year2023: '2023',
      year2023Items: [
        'September: Auftragswerk der Musikproduktionsfirma Shibamusic, Uraufführung der Oper "葵上のあわい" (Libretto: Naoyuki Tsunogai) in der Millennium Hall (Tokio)',
      ],
      otherActivities: 'Weitere Aktivitäten',
      activity1: '2018-20 ausgewählt für das Kulturministerium-Projekt zur Förderung von Opernschaffenden und beteiligt an der Komposition japanischer Opern.',
      activity2: 'Werke werden von Muse Press, One-Hand Piano Music und MIRAI RECORDS veröffentlicht.',
      activity3: 'Als Pianistin arbeitet sie hauptsächlich mit zeitgenössischen Musikwerken zusammen, darunter das Ensemble Oktopus und Neues Kollektive München in Deutschland, sowie bei Konzerten von Universitätsprojekten, wo sie an vielen Uraufführungen beteiligt ist. In der Liedbegleitung tritt sie mit zahlreichen Sängern in München und Tokio auf und nimmt an Wettbewerben und Konzerten teil.',
    },
    works: {
      title: 'Werke',
      backToWorks: 'Zurück zu Werke',
      project: 'Projekt',
      client: 'Auftraggeber',
      date: 'Datum',
      service: 'Service',
      challenge: 'Die Herausforderung',
      relatedProjects: 'Verwandte Projekte',
    },
    contact: {
      title: 'Kontakt',
      inquiry: 'Anfrage',
      inquiryText: 'Für Aufträge, Konzertanfragen, Kooperationen und andere Anfragen kontaktieren Sie uns bitte unter der folgenden E-Mail-Adresse.',
      location: 'Standort',
      locationText: 'Aktiv in München, Deutschland und Tokio.',
      social: 'Soziale Medien',
    },
    footer: {
      location: 'Standort',
      email: 'E-Mail',
      social: 'Soziale Medien',
      copyright: '© 2024 Minami Nagai. Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      home: '01Home',
      about: '02ABOUT',
      works: '03WORKS',
      news: '04NEWS',
      contact: '05CONTACT',
    },
    home: {
      title: 'Minami Nagai',
      subtitle: 'Composer and pianist. Based in Munich, Germany and Tokyo.',
      composer: 'composer',
      pianist: 'pianist',
      description: '',
      profileText1: 'Born in Osaka. Graduated from the Piano Department of Osaka Prefectural Yuhigaoka High School, followed by a degree in Composition from Tokyo University of the Arts. Moved to Germany in 2022 and currently enrolled in the Master\'s program in Composition at the University of Music and Performing Arts Munich.',
      profileText2: 'Studied composition with Moritz Eggert and lied accompaniment with Rudi Spring. Active as a composer, arranger, and performer in Munich, Germany and Tokyo. In 2026, she will be invited to an artist-in-residence program in Amsterdam, Netherlands, attracting international attention.',
      worksLink: 'Works',
      worksLinkSubtitle: 'View works',
    },
    about: {
      title: 'About',
      name: 'Minami Nagai',
      role: 'Composer and Pianist',
      bio1: 'Born in Osaka. Graduated from the Piano Department of Osaka Prefectural Yuhigaoka High School, followed by a degree in Composition from Tokyo University of the Arts.',
      bio2: 'Moved to Germany in 2022 and currently enrolled in the Master\'s program in Composition at the University of Music and Performing Arts Munich. Studied composition with Moritz Eggert and lied accompaniment with Rudi Spring. Active as a composer, arranger, and performer in Munich, Germany and Tokyo.',
      bio3: 'In 2026, she will be invited to an artist-in-residence program in Amsterdam, Netherlands, attracting international attention.',
      achievements: 'Main Awards and Achievements',
      mainAchievement: 'Highest Award at the 8th Tokyo International Art Song Composition Competition',
      year2025: '2025',
      year2025Items: [
        'June: Selected in the composer competition of Opera Company Novanta Quattro, premiere of the opera "船はついに安らぎぬ" (Libretto: Sakiko Kono) at Seijo Hall',
        'May: Commissioned work by Munich Ballet Academy and Ensemble Oktopus, premiere of ballet music "umschlungen" at Reaktorhalle (Munich, Germany)',
        'April: Duo work for accordion and violin "work out" featured at Sibelius Academy Accordion Festival 2025, premiered in Helsinki, Finland',
      ],
      year2024: '2024',
      year2024Items: [
        'December: Commissioned work by NKM (Neues Kollektive München), premiere of "Lovely Lonely Christmas" for piano trio and electric guitar at schwere reiter (Munich, Germany)',
        'October: Participated in the joint project of the University of Music and Performing Arts Munich with AI, premiere of "Klavier Konzert" for self-playing piano and string orchestra by the Munich Philharmonic (Conductor: Hankyeol Yoon) at Brain Labo (Munich, Germany)',
        'March: Orchestra work "孔雀は羽を広げて - オーケストラのために" premiered by the New Japan Philharmonic Orchestra (Conductor: Yukari Saito) at Dai-ichi Seimei Hall (Tokyo)',
      ],
      year2023: '2023',
      year2023Items: [
        'September: Commissioned work by music production company Shibamusic, premiere of the opera "葵上のあわい" (Libretto: Naoyuki Tsunogai) at Millennium Hall (Tokyo)',
      ],
      otherActivities: 'Other Activities',
      activity1: '2018-20 selected for the Agency for Cultural Affairs project for fostering opera creators and involved in composing Japanese operas.',
      activity2: 'Works are published by Muse Press, One-Hand Piano Music, and MIRAI RECORDS.',
      activity3: 'As a pianist, she primarily works with contemporary music works, including Ensemble Oktopus and Neues Kollektive München in Germany, as well as at university project concerts, where she is involved in many premieres. In lied accompaniment, she performs with numerous singers in Munich and Tokyo and participates in competitions and concerts.',
    },
    works: {
      title: 'Works',
      backToWorks: 'Back to Works',
      project: 'Project',
      client: 'Client',
      date: 'Date',
      service: 'Service',
      challenge: 'The challenge',
      relatedProjects: 'Related projects',
    },
    contact: {
      title: 'Contact',
      inquiry: 'Inquiry',
      inquiryText: 'For work requests, concert inquiries, collaborations, and other inquiries, please contact us at the following email address.',
      location: 'Location',
      locationText: 'Active in Munich, Germany and Tokyo.',
      social: 'Social Media',
    },
    footer: {
      location: 'Location',
      email: 'Email',
      social: 'Social',
      copyright: '© 2024 Minami Nagai. All rights reserved.',
    },
  },
}


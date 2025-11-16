import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CursorFish from '@/components/CursorFish'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Playfair_Display, Noto_Serif_JP } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Minami Nagai - Composer & Pianist',
  description: '作曲家・ピアニスト 永井みなみのポートフォリオサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${playfairDisplay.variable} ${notoSerifJP.variable}`}>
      <body>
        <LanguageProvider>
          <CursorFish />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}


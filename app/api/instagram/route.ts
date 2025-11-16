import { NextResponse } from 'next/server'

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  timestamp: string
  caption?: string
}

export async function GET() {
  try {
    // Instagram Graph APIを使用して投稿を取得
    // 環境変数から設定を取得
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    if (!accessToken || !userId) {
      // 環境変数が設定されていない場合は、モックデータを返す
      return NextResponse.json({
        data: [
          {
            id: 'mock1',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+1',
            permalink: 'https://www.instagram.com/p/mock1/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 1',
          },
          {
            id: 'mock2',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+2',
            permalink: 'https://www.instagram.com/p/mock2/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 2',
          },
          {
            id: 'mock3',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+3',
            permalink: 'https://www.instagram.com/p/mock3/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 3',
          },
          {
            id: 'mock4',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+4',
            permalink: 'https://www.instagram.com/p/mock4/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 4',
          },
          {
            id: 'mock5',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+5',
            permalink: 'https://www.instagram.com/p/mock5/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 5',
          },
          {
            id: 'mock6',
            media_type: 'IMAGE',
            media_url: 'https://via.placeholder.com/400x400?text=Instagram+6',
            permalink: 'https://www.instagram.com/p/mock6/',
            timestamp: new Date().toISOString(),
            caption: 'Sample Instagram post 6',
          },
        ],
      })
    }

    // Instagram Graph APIから投稿を取得
    const response = await fetch(
      `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,timestamp,caption&access_token=${accessToken}&limit=12`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram posts')
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching Instagram posts:', error)
    // エラー時もモックデータを返す
    return NextResponse.json({
      data: [
        {
          id: 'error1',
          media_type: 'IMAGE',
          media_url: 'https://via.placeholder.com/400x400?text=Error',
          permalink: 'https://www.instagram.com/',
          timestamp: new Date().toISOString(),
          caption: 'Error loading Instagram posts',
        },
      ],
    })
  }
}


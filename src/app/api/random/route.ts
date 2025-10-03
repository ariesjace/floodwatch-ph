import { NextResponse } from 'next/server'

const NEWS_API_BASE = 'https://newsapi.org/v2'

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_TOKEN_NEWS
    if (!apiKey) {
      return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: 'Missing API key' }, { status: 500 })
    }

    // Fetch a pool, then randomly pick 5
    const url = new URL(`${NEWS_API_BASE}/everything`)
    url.searchParams.set('q', 'flood OR storm OR typhoon OR corruption flood control AND Philippines')
    url.searchParams.set('language', 'en')
    url.searchParams.set('sortBy', 'publishedAt')
    url.searchParams.set('pageSize', '50')
    url.searchParams.set('apiKey', apiKey)

    const res = await fetch(url.toString(), { cache: 'no-store' })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: data?.message || 'Failed to fetch' }, { status: res.status })
    }

    const pool = Array.isArray(data?.articles) ? data.articles : []
    const shuffled = pool.sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, 5)
    return NextResponse.json({ status: 'ok', totalResults: picked.length, articles: picked }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: 'Unexpected server error' }, { status: 500 })
  }
}



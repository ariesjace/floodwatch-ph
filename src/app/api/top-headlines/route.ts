import { NextResponse } from 'next/server'

const NEWS_API_BASE = 'https://newsapi.org/v2'

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_TOKEN_NEWS
    if (!apiKey) {
      return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: 'Missing API key' }, { status: 500 })
    }

    const url = new URL(`${NEWS_API_BASE}/top-headlines`)
    url.searchParams.set('country', 'ph')
    url.searchParams.set('q', 'flood OR storm OR typhoon OR corruption flood control')
    url.searchParams.set('pageSize', '30')
    url.searchParams.set('apiKey', apiKey)

    const res = await fetch(url.toString(), { cache: 'no-store' })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: data?.message || 'Failed to fetch' }, { status: res.status })
    }
    return NextResponse.json(data, { status: 200 })
  } catch (e) {
    return NextResponse.json({ status: 'error', totalResults: 0, articles: [], message: 'Unexpected server error' }, { status: 500 })
  }
}



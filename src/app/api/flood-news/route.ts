import { NextResponse } from 'next/server'

const NEWS_API_BASE = 'https://newsapi.org/v2'

function buildFloodQuery(extra?: string) {
  const base = [
    '(flood OR floods OR flooding)',
    '(typhoon OR storm OR tropical OR monsoon)',
    '(rainfall OR heavy rain)',
    '(storm surge OR landslide)',
    '(dam release OR spillway)',
    '(evacuation OR rescue)',
    '(river overflow OR inundation)',
    '(government OR LGU OR DPWH OR MMDA OR NDRRMC OR PAGASA)',
    '(corruption OR misuse OR anomaly OR irregularity OR controversy)'
  ].join(' OR ')
  return extra ? `${base} OR (${extra})` : base
}

export async function GET(req: Request) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_TOKEN_NEWS
    const msKey = process.env.NEXT_PUBLIC_MEDIASTACK_KEY || '86dc7c486cd2e49dee3115e4a22c3424'
    const url = new URL(`${NEWS_API_BASE}/everything`)
    // Query per spec and ensure Philippines context
    url.searchParams.set('q', 'flood OR storm OR typhoon OR corruption flood control AND Philippines')
    url.searchParams.set('language', 'en')
    url.searchParams.set('sortBy', 'publishedAt')
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'
    url.searchParams.set('page', page)
    url.searchParams.set('pageSize', pageSize)
    url.searchParams.set('apiKey', String(apiKey))

    const res = await fetch(url.toString(), { cache: 'no-store' })
    const data = await res.json().catch(() => ({}))

    // Mediastack parallel
    const msUrl = new URL('http://api.mediastack.com/v1/news')
    msUrl.searchParams.set('access_key', msKey)
    msUrl.searchParams.set('countries', 'ph')
    msUrl.searchParams.set('languages', 'en')
    msUrl.searchParams.set('sort', 'published_desc')
    msUrl.searchParams.set('limit', pageSize)
    msUrl.searchParams.set('keywords', 'flood OR storm OR typhoon OR corruption flood control')
    const msRes = await fetch(msUrl.toString(), { cache: 'no-store' })
    const msData = await msRes.json().catch(() => ({}))
    const msArticles = Array.isArray(msData?.data) ? msData.data.map((x:any)=>({
      source: { id: null, name: x.source || 'Unknown' },
      author: x.author || null,
      title: x.title,
      description: x.description,
      url: x.url,
      urlToImage: x.image,
      publishedAt: x.published_at,
      content: null,
    })) : []

    const a = Array.isArray(data?.articles) ? data.articles : []
    const merged = [...a, ...msArticles]
    const seen = new Set<string>()
    const deduped = merged.filter((it:any)=>{
      const key = (it?.url || it?.title || '').toLowerCase()
      if (!key || seen.has(key)) return false
      seen.add(key)
      return true
    })
    return NextResponse.json({ status: 'ok', totalResults: deduped.length, articles: deduped }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: 'Unexpected server error' }, { status: 500 })
  }
}



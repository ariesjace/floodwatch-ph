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

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_API_TOKEN_NEWS
    const url = new URL(`${NEWS_API_BASE}/everything`)
    // Query per spec and ensure Philippines context
    url.searchParams.set('q', 'flood OR storm OR typhoon OR corruption flood control AND Philippines')
    url.searchParams.set('language', 'en')
    url.searchParams.set('sortBy', 'publishedAt')
    url.searchParams.set('pageSize', '30')
    url.searchParams.set('apiKey', String(apiKey))

    const res = await fetch(url.toString(), { cache: 'no-store' })
    if (!res.ok) {
      return NextResponse.json({ status: 'error', message: 'Failed to fetch' }, { status: res.status })
    }
    const data = await res.json()
    return NextResponse.json(data, { status: 200 })
  } catch (e) {
    return NextResponse.json({ status: 'error', message: 'Unexpected server error' }, { status: 500 })
  }
}



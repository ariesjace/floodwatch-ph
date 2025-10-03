const NEWS_API_BASE = "https://newsapi.org/v2";
const MEDIASTACK_BASE = "http://api.mediastack.com/v1";

function buildFloodQuery(extra?: string) {
  const base = [
    "(flood OR floods OR flooding)",
    "(typhoon OR storm OR tropical OR monsoon)",
    "(rainfall OR heavy rain)",
    "(storm surge OR landslide)",
    "(dam release OR spillway)",
    "(evacuation OR rescue)",
    "(river overflow OR inundation)",
    "(government OR LGU OR DPWH OR MMDA OR NDRRMC OR PAGASA)",
    "(corruption OR misuse OR anomaly OR irregularity OR controversy)",
  ].join(" OR ");
  return extra ? `${base} OR (${extra})` : base;
}

async function fetchNews(path: string, params: Record<string, string>) {
  const apiKey = process.env.NEXT_PUBLIC_API_TOKEN_NEWS;
  if (!apiKey) {
    console.error('NewsAPI key is missing: set NEXT_PUBLIC_API_TOKEN_NEWS')
    return { status: 'error', totalResults: 0, articles: [], message: 'Missing API key' }
  }
  const url = new URL(`${NEWS_API_BASE}/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  url.searchParams.set("apiKey", String(apiKey));

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    let body: any = undefined
    try { body = await res.json() } catch {}
    const msg = body?.message ? `${res.status} ${body.message}` : `${res.status}`
    console.error(`News API error: ${msg}`)
    return { status: 'error', totalResults: 0, articles: [], message: msg }
  }
  return res.json();
}

export async function getFloodNews() {
  const newsApiPromise = fetchNews("top-headlines", {
    country: "ph",
    pageSize: "30",
    q: "flood OR storm OR typhoon OR corruption flood control",
  });

  const mediastackPromise = fetchMediastackFlood({ limit: 30 });

  const [newsApi, mediastack] = await Promise.allSettled([newsApiPromise, mediastackPromise]);
  const a = newsApi.status === 'fulfilled' ? (newsApi.value as any)?.articles ?? [] : [];
  const b = mediastack.status === 'fulfilled' ? mediastack.value : [];
  return { status: 'ok', totalResults: a.length + b.length, articles: dedupeArticles([...a, ...b]) } as NewsResponse;
}

export async function searchFloodNews(keyword: string) {
  const q = buildFloodQuery(`${keyword} AND Philippines`);
  const newsApiPromise = fetchNews("everything", {
    q,
    sortBy: "publishedAt",
    language: "en",
    pageSize: "20",
  });
  const mediastackPromise = fetchMediastackFlood({ keywords: keyword, limit: 20 });
  const [newsApi, mediastack] = await Promise.allSettled([newsApiPromise, mediastackPromise]);
  const a = newsApi.status === 'fulfilled' ? (newsApi.value as any)?.articles ?? [] : [];
  const b = mediastack.status === 'fulfilled' ? mediastack.value : [];
  return { status: 'ok', totalResults: a.length + b.length, articles: dedupeArticles([...a, ...b]) } as NewsResponse;
}

export type NewsArticle = {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt: string;
  content?: string | null;
};

export type NewsResponse = {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
};

function dedupeArticles(items: any[]): NewsArticle[] {
  const seen = new Set<string>();
  const out: NewsArticle[] = [];
  for (const it of items) {
    if (!it) continue;
    const desc = typeof it.description === 'string' ? it.description.trim() : '';
    if (!desc) continue;
    const normalized: NewsArticle = {
      source: { id: (it.source?.id ?? null) as any, name: it.source?.name || it.source || 'Unknown' },
      author: it.author ?? null,
      title: it.title || '',
      description: desc,
      url: it.url,
      urlToImage: it.urlToImage ?? it.image ?? null,
      publishedAt: it.publishedAt || it.published_at || new Date().toISOString(),
      content: it.content ?? null,
    };
    const key = (normalized.url || normalized.title).toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(normalized);
  }
  return out;
}

async function fetchMediastackFlood({ keywords = '', limit = 20 }: { keywords?: string; limit?: number }) {
  const msKey = process.env.NEXT_PUBLIC_MEDIASTACK_KEY || '';
  if (!msKey) {
    return [];
  }
  const url = new URL(`${MEDIASTACK_BASE}/news`);
  url.searchParams.set('access_key', msKey);
  url.searchParams.set('countries', 'ph');
  url.searchParams.set('languages', 'en');
  url.searchParams.set('sort', 'published_desc');
  url.searchParams.set('limit', String(limit));
  const kw = [
    'flood', 'flooding', 'typhoon', 'storm', 'monsoon', 'storm surge', 'landslide', 'dam release', 'spillway',
    keywords || ''
  ].filter(Boolean).join(' OR ');
  url.searchParams.set('keywords', kw);

  const res = await fetch(url.toString(), { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json().catch(() => ({} as any));
  const d = Array.isArray(data?.data) ? data.data : [];
  return d.map((x: any) => ({
    source: { id: null, name: x.source || 'Unknown' },
    author: x.author || null,
    title: x.title,
    description: x.description,
    url: x.url,
    urlToImage: x.image,
    publishedAt: x.published_at,
    content: null,
  } as NewsArticle));
}



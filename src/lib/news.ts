const NEWS_API_BASE = "https://newsapi.org/v2";

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
  return fetchNews("top-headlines", {
    country: "ph",
    pageSize: "30",
    q: "flood OR storm OR typhoon OR corruption flood control",
  });
}

export async function searchFloodNews(keyword: string) {
  const q = buildFloodQuery(keyword);
  return fetchNews("everything", {
    q,
    sortBy: "publishedAt",
    language: "en",
    pageSize: "20",
  });
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



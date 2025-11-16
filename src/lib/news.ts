// Deprecated - using static articles instead
export async function getFloodNews() {
  return { status: 'ok', totalResults: 0, articles: [] }
}

export async function searchFloodNews() {
  return { status: 'ok', totalResults: 0, articles: [] }
}

export type NewsArticle = {
  title: string
  description: string
  url: string
  urlToImage?: string
  publishedAt: string
  source: { name: string }
  author?: string
}

export type NewsResponse = {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

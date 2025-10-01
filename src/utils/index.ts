import { news } from '@/types'

export const removeDuplicateData = (articles:any) => {
  const items: news[] = Array.isArray(articles?.articles) ? articles.articles : []

  const seen = new Set<string>()
  const unique: news[] = []

  for (const a of items) {
    if (!a) continue
    const hasDescription = typeof a.description === 'string' && a.description.trim().length > 0
    if (!hasDescription) continue

    const normalizedTitle = (a.title || '').toLowerCase().trim()
    const normalizedUrl = (a.url || '').toLowerCase().trim()
    const key = normalizedUrl || normalizedTitle
    if (!key) continue

    if (seen.has(key)) continue
    seen.add(key)
    unique.push(a)
  }

  return unique
}
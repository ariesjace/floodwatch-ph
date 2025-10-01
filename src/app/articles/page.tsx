"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type Article = {
  source: { id: string | null; name: string }
  author: string | null
  title: string
  description: string | null
  url: string
  publishedAt: string
}

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/flood-news', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to load articles')
        const data = await res.json()
        setArticles(Array.isArray(data?.articles) ? data.articles : [])
      } catch (e: any) {
        setError(e?.message || 'Unexpected error')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return <div className="w-full max-w-3xl mx-auto p-4">Loading articles…</div>
  }

  if (error) {
    return <div className="w-full max-w-3xl mx-auto p-4 text-red-600">{error}</div>
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="rounded border border-gray-200 bg-white shadow p-6 text-gray-700">
          No flood-related articles found right now. Try again later.
        </div>
      </div>
    )
  }

  return (
    <main className="w-full max-w-3xl mx-auto p-4 space-y-6">
      {articles.map((a, idx) => (
        <article key={`${a.title}-${idx}`} className="rounded-lg border border-gray-200 bg-white shadow overflow-hidden">
          {/** image banner */}
          {/** we can't trust the domain allowlist entirely here but next.config enables remote */}
          {(a as any).urlToImage && (
            <div className="relative w-full h-56">
              {/* @ts-ignore dynamic remote is allowed by next.config */}
              <img src={(a as any).urlToImage} alt={a.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-4">
            <Link href={a.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg">
              {a.title}
            </Link>
            <p className="text-sm text-gray-700 mt-2">{a.description}</p>
            <div className="text-xs text-gray-500 mt-2">
              {a.source?.name} • {new Date(a.publishedAt).toLocaleString()}
            </div>
          </div>
        </article>
      ))}
    </main>
  )
}

export default ArticlesPage
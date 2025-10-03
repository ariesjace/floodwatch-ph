"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import ArticleCard from './Article'

type Article = {
  source: { id: string | null; name: string }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage?: string | null
  publishedAt: string
}

const ArticlesFeed = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/flood-news?page=1&pageSize=5', { cache: 'no-store' })
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

  if (loading) return <div>Loading…</div>
  if (error) return <div className="text-red-600">{error}</div>
  if (!articles.length) return <div>No flood-related articles right now.</div>

  return (
    <div className="space-y-4">
      {articles.map((a, idx) => (
        <div key={`${a.title}-${idx}`} className="rounded bg-white shadow">
          <div className="p-4">
            <ArticleCard data={a as any} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesFeed



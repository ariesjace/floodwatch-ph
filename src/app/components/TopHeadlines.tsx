                                                                                                                                                                                                 import { getFloodNews } from '@/lib/news'
import Article from './Article'

const TopHeadlines = async () => {
  const newsTop = await getFloodNews()
  const raw = Array.isArray((newsTop as any)?.articles) ? (newsTop as any).articles : []
  const seen = new Set<string>()
  const articles = raw.filter((a:any) => {
    const key = (a?.url || a?.title || '').toLowerCase().trim()
    if (!key) return false
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  if (!articles || articles.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto p-4">
        <div className="rounded border border-gray-200 bg-white shadow p-6 text-gray-700">
          No flood-related top headlines found right now. Please check back later.
        </div>
      </div>
    )                                                                                                                                                                                     
  }

  return (
    <div className='w-full max-w-3xl mx-auto p-4 space-y-4'>
      {articles.map((article:any,idx:number) => (
        <div key={`${article?.title}-${idx}`} className="rounded bg-white shadow">
          <div className="p-4">                                                                                                                                                                    
            <Article data={article} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopHeadlines
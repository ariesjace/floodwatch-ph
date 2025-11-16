export type ArticleSource = {
  id: string | null
  name: string
}

export type StaticArticle = {
  id: string
  title: string
  description: string
  source: string
  url: string
  date: string
  category: string
  imageUrl?: string
}

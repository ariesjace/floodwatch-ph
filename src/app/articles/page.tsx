import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  description: string
  source: string
  url: string
  date: string
  category: string
  imageUrl?: string
}

const articles: Article[] = [
  {
    id: '1',
    title: 'The Runaway Crisis of Flooding in the Philippines',
    description: 'A comprehensive analysis of the escalating flood crisis, examining systemic failures in infrastructure, urban planning, and climate adaptation strategies.',
    source: 'Inquirer.net',
    url: 'https://business.inquirer.net/488009/the-runaway-crisis-of-flooding-in-the-philippines',
    date: '2024',
    category: 'Crisis Analysis',
    imageUrl: '/img/flood-crisis.jpg'
  },
  {
    id: '2',
    title: 'Flood Control Fiasco: A Policy Reckoning for Accountability',
    description: 'An investigation into the failures of flood control policies and the need for accountability in government agencies responsible for disaster management.',
    source: 'UP CIDS',
    url: 'https://cids.up.edu.ph/flood-control-fiasco-a-policy-reckoning-for-accountability-in-the-philippines/',
    date: '2024',
    category: 'Policy Analysis',
    imageUrl: '/img/policy-analysis.jpg'
  },
  {
    id: '3',
    title: 'Filipinos Rise Up: Outrage Over Corruption Scandal in Flood Control',
    description: 'Coverage of public outrage and protests surrounding corruption allegations in the flood control and disaster management sector.',
    source: 'The Guardian',
    url: 'https://www.theguardian.com/environment/2025/oct/15/filipinos-rise-up-outrage-corruption-scandal-flood-control',
    date: 'October 2024',
    category: 'Accountability',
    imageUrl: '/img/guardian-flood.jpg'
  },
  {
    id: '4',
    title: 'Flooding in the Philippines: A Growing Environmental Crisis',
    description: 'An in-depth report on the environmental dimensions of the Philippine flooding crisis, including deforestation, urbanization, and climate change impacts.',
    source: 'BBC News',
    url: 'https://www.bbc.com/news/articles/czrp7xkd2gpo',
    date: '2024',
    category: 'Environment',
    imageUrl: '/img/bbc-environment.jpg'
  }
]

export default function ArticlesPage() {
  return (
    <main className="w-full py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Credible Articles & Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Read investigative journalism, policy analysis, and environmental research from credible sources covering the flood crisis in the Philippines.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={article.url} target="_blank" rel="noopener noreferrer">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{article.date}</span>
                  </div>
                  <CardTitle className="line-clamp-3 text-lg">{article.title}</CardTitle>
                  <CardDescription className="text-sm">{article.source}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full justify-between">
                    Read Full Article
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 pt-12 border-t">
          <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Academic Research</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Peer-reviewed studies on flood management, climate adaptation, and environmental resilience in Southeast Asia.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Government Reports</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Official documentation from NDRRMC, PAGASA, and other agencies on flood preparedness and response strategies.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Voices</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                First-hand accounts and testimonies from flood-affected communities across the Philippines.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

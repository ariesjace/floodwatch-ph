import Link from 'next/link'
import TopHeadlines from './components/TopHeadlines'
import ArticlesFeed from './components/ArticlesFeed'

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col">
        {/* Header that blends into hero */}
        <header className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 md:px-12 py-4 bg-white/10 backdrop-blur-md rounded-b-2xl">
          <h2 className="text-xl font-bold text-white">FloodWatch.ph</h2>
          <nav className="flex gap-6 text-white font-medium">
            <Link href="/top-headlines" className="hover:text-green-300">Headlines</Link>
            <Link href="/articles" className="hover:text-green-300">Articles</Link>
            <Link href="/about" className="hover:text-green-300">About</Link>
          </nav>
          <Link
            href="/login"
            className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Login
          </Link>
        </header>

        {/* Background image full */}
        <div className="absolute inset-0">
          <img
            src="/img/hero.jpg"
            alt="Flood awareness"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-1 items-center justify-between px-6 md:px-12 z-10">
          {/* Left: text + CTA */}
          <div className="max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Stay Ahead of Flood News
            </h1>
            <p className="mt-6 text-gray-200 text-base md:text-lg">
              Real-time updates on floods, storms, and flood-control efforts in the Philippines. 
              Stay informed, stay safe, and help your community prepare.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/top-headlines"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-white font-medium shadow hover:bg-green-700 transition"
              >
                View Latest News
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-white font-medium shadow hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right: hero image (optional, decorative) */}
          <div className="hidden md:block max-w-md">
            <img
              src="/img/hero-figure.png"
              alt="Flood safety"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* News blocks below hero */}
      <section className="mt-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <TopHeadlines />
          </div>
          <div>
            <ArticlesFeed />
          </div>
        </div>
      </section>
    </main>
  )
}
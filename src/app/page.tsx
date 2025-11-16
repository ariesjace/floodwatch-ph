import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, AlertCircle, Droplet, Leaf } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section with Video */}
      <section className="relative w-full min-h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/img/hero.jpg"
            alt="Flood awareness background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Real-Time Flood Awareness
                </h1>
                <p className="text-lg md:text-xl text-gray-200">
                  Stay informed, stay safe. Get credible flood news, solutions, and emergency resources for every Filipino.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/articles">
                  <Button size="lg" className="w-full sm:w-auto">
                    Read Articles <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Video Embed */}
            <div className="hidden md:block">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dNI3i13Ce38"
                  title="Flood Awareness Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Mobile Video Section */}
          <div className="md:hidden mt-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dNI3i13Ce38"
                title="Flood Awareness Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Section */}
      <section className="w-full bg-muted/50 py-12 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding the Flood Crisis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flooding is a complex challenge in the Philippines with far-reaching impacts on communities and ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* What is Flooding */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Droplet className="h-5 w-5 text-blue-600" />
                  <CardTitle>What is Flooding?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Flooding occurs when heavy rains, typhoons, or overflowing rivers cause water to cover land areas. It's worsened by clogged drainage, deforestation, and rapid urban growth.
              </CardContent>
            </Card>

            {/* Human Impact */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  <CardTitle>Impact on Humans</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Floods damage homes, cause health risks, disrupt livelihoods, and create enormous economic burdens for families and government recovery efforts.
              </CardContent>
            </Card>

            {/* Ecosystem Impact */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <CardTitle>Ecosystem Effects</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Floods cause soil erosion, destroy habitats, pollute water bodies, and devastate mangrove forests and wetlands critical to biodiversity.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Information Sections */}
      <section className="w-full py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 space-y-12">
          {/* How Flooding Affects Humans */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-2xl">👨‍👩‍👧‍👦</span> How Flooding Affects Humans in the Philippines
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Damage to Homes and Communities</h3>
                <p className="text-sm text-muted-foreground">
                  Many houses, especially in low-lying areas in Metro Manila, Visayas, and Mindanao, are easily damaged during floods, forcing families to relocate.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Health Risks</h3>
                <p className="text-sm text-muted-foreground">
                  Floodwater mixes with garbage and sewage, leading to diseases like leptospirosis, diarrhea, dengue, and skin infections.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Loss of Livelihood</h3>
                <p className="text-sm text-muted-foreground">
                  Many workers cannot work due to transport shutdowns and damaged workplaces, causing income loss for struggling families.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Economic Burden</h3>
                <p className="text-sm text-muted-foreground">
                  Flood recovery costs the government and families millions in repair, relief goods, and rebuilding efforts.
                </p>
              </div>
            </div>
          </div>

          {/* How Flooding Affects Ecosystem */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-2xl">🌱</span> How Flooding Affects the Ecosystem
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Soil Erosion</h3>
                <p className="text-sm text-muted-foreground">
                  Strong floodwaters wash away soil in upland regions, affecting farming and causing landslides.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Habitat Destruction</h3>
                <p className="text-sm text-muted-foreground">
                  Floods damage natural habitats, reducing populations of fish, birds, and animals in ecosystems.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Water Pollution</h3>
                <p className="text-sm text-muted-foreground">
                  Floods carry plastic, chemicals, and sewage into major bodies of water like Pasig River and Manila Bay.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-2">Loss of Natural Barriers</h3>
                <p className="text-sm text-muted-foreground">
                  When mangroves are cut down, coastal communities become more vulnerable because these forests naturally absorb floodwater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Take Action Now</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Flooding is not just a natural disaster. Every Filipino can play a part by supporting reforestation, proper waste management, and disaster preparedness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions">
              <Button variant="secondary" size="lg">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/community">
              <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Community & Hotlines
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

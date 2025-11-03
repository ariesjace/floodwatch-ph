import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col">
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
              Learn how flooding affects communities, the environment, and the nation — and how we can all help reduce its impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-white font-medium shadow hover:bg-green-700 transition"
              >
                Discover Solutions
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

      {/* Informative Flooding Section */}
      <section className="mt-20 px-6 max-w-5xl mx-auto space-y-12">
        {/* What is Flooding */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🌊 What is Flooding?</h2>
          <p className="text-gray-700 leading-relaxed">
            Flooding in the Philippines happens when heavy rains, typhoons, or overflowing rivers cause water to cover land areas. 
            It is made worse by clogged drainage, deforestation, and rapid urban growth. Flooding often damages homes, affects 
            transportation, and can harm people’s health and livelihoods.
          </p>
        </div>

        {/* Effects on Humans */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            👨‍👩‍👧‍👦 How Flooding Affects Humans in the Philippines
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Damage to Homes and Communities:</strong> Many houses, especially in low-lying areas in Metro Manila, Visayas, and Mindanao,
              are easily damaged during floods, forcing families to relocate and seek shelter in evacuation centers.
            </li>
            <li>
              <strong>Health Risks:</strong> Floodwater often mixes with garbage and sewage, leading to diseases common in the Philippines 
              such as leptospirosis, diarrhea, dengue, and skin infections, especially during rainy and typhoon seasons.
            </li>
            <li>
              <strong>Loss of Livelihood:</strong> Many workers cannot go to work due to transport shutdowns and damaged workplaces, 
              causing loss of income for families already struggling financially.
            </li>
            <li>
              <strong>Economic Burden:</strong> Flood recovery costs the government and families millions to billions of pesos 
              in repair, relief goods, and rebuilding.
            </li>
          </ul>
        </div>

        {/* Effects on Ecosystem */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🌱 How Flooding Affects the Ecosystem in the Philippines
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>
              <strong>Soil Erosion:</strong> Strong floodwaters wash away soil in upland regions like the Cordilleras and Bicol, 
              affecting farming and causing landslides.
            </li>
            <li>
              <strong>Habitat Destruction:</strong> Floods damage natural habitats, reducing populations of fish, birds, and animals 
              in rivers, wetlands, and forests.
            </li>
            <li>
              <strong>Water Pollution:</strong> Floods carry plastic, chemicals, and sewage into major bodies of water such as Pasig River, 
              Marikina River, Cagayan River, and Manila Bay, harming marine life.
            </li>
            <li>
              <strong>Loss of Mangroves and Wetlands:</strong> When floods hit areas where mangroves are already cut down, 
              coastal communities become more vulnerable because mangroves naturally absorb and slow floodwater.
            </li>
            <li>
              <strong>Reduced Biodiversity:</strong> Species struggle to survive when their environment changes, 
              leading to fewer plants and animals in affected areas.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🌏 Take Action Now</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Flooding is not just a natural disaster — it’s a wake-up call. 
          Every Filipino can play a part by supporting reforestation, proper waste management, and disaster preparedness programs.
        </p>
        <Link
          href="/solutions"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Explore Flood Solutions
        </Link>
      </section>
    </main>
  )
}

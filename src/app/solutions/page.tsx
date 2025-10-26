"use client"

export default function SolutionsPage() {
  return (
    <main className="px-6 py-12 max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">💡 Flood Solutions in the Philippines</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover sustainable and science-based strategies that help communities across the Philippines
          reduce flood risks, protect ecosystems, and strengthen climate resilience.
        </p>
      </section>

      {/* Mangrove Reforestation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🌿 Mangrove Reforestation</h2>
        <p className="text-gray-700 leading-relaxed">
          Mangrove reforestation is one of the most effective and eco-friendly ways to reduce flooding in the Philippines.
          These coastal trees act as natural barriers that protect communities from strong waves, storm surges, and rising tides.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">How Mangroves Help Prevent Flooding</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Natural Flood Protection:</strong> Roots slow down waves and absorb excess water.</li>
              <li><strong>Prevents Erosion:</strong> Holds soil in place and stabilizes coastlines.</li>
              <li><strong>Supports Marine Life:</strong> Serves as nurseries for fish, crabs, and other sea life.</li>
              <li><strong>Cleans the Environment:</strong> Filters pollutants and traps sediments.</li>
              <li><strong>Sustainable and Low-Cost:</strong> Grows stronger over time with minimal maintenance.</li>
            </ul>
          </div>
          <div className="h-56 bg-teal-50 rounded-lg flex items-center justify-center text-5xl">
            🌴
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-6">
          <h4 className="font-semibold mb-2">References</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Department of Environment and Natural Resources. (n.d.). <em>Mangrove rehabilitation projects.</em> <a href="https://denr.gov.ph" className="text-blue-600 hover:underline">denr.gov.ph</a></li>
            <li>GMA News Online. (n.d.). <em>How mangroves protect coastal communities from storm surges.</em> <a href="https://www.gmanetwork.com/news" className="text-blue-600 hover:underline">GMA News</a></li>
            <li>ABS-CBN News. (n.d.). <em>Philippine mangroves: Nature’s defense against climate change.</em> <a href="https://news.abs-cbn.com" className="text-blue-600 hover:underline">ABS-CBN News</a></li>
            <li>Green Economy Coalition. (2023). <em>Philippine mangroves fight floods & provide livelihoods.</em> <a href="https://www.greeneconomycoalition.org/news-and-resources/philippine-mangroves-fight-floods" className="text-blue-600 hover:underline">Green Economy Coalition</a></li>
          </ul>
        </div>
      </section>

      {/* Dredging Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🚜 Dredging as a Sustainable Flood Control Measure</h2>
        <p className="text-gray-700 leading-relaxed">
          Flooding in the Philippines is intensified by heavy rainfall, typhoons, rapid urbanization, and poor waste management.
          Dredging — the removal of sediments, debris, and waste from waterways — is one of the most practical and effective flood control strategies.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-56 bg-blue-50 rounded-lg flex items-center justify-center text-5xl">
            🏗️
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Ongoing Efforts and Impact</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cagayan River Restoration Project — deepening and widening channels to reduce flooding.</li>
              <li>Pasig River Dredging — over 1.2M metric tons of silt removed, improving flow to Manila Bay.</li>
              <li>Tullahan–Tinajeros River Rehabilitation — reduced flooding in CAMANAVA areas.</li>
              <li>Battle for Manila Bay — integrates dredging with estero cleanup and waste segregation.</li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-600 mt-6">
          <h4 className="font-semibold mb-2">Results & Benefits</h4>
          <p>Reports show a <strong>35% reduction</strong> in floodwater levels in downstream towns after the 2022 Cagayan River dredging (DPWH Region II, 2023).</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Fewer flood events in CAMANAVA and Cagayan Valley.</li>
            <li>Improved river flow and reduced overflow during typhoons.</li>
            <li>Enhanced water quality and ecosystem health.</li>
          </ul>
        </div>

        <div className="text-sm text-gray-600 mt-6">
          <h4 className="font-semibold mb-2">Supporting Policies</h4>
          <ul className="list-disc list-inside space-y-1">
            <li><a href="https://www.officialgazette.gov.ph/2004/03/22/republic-act-no-9275/" className="text-blue-600 hover:underline">Republic Act No. 9275 – Philippine Clean Water Act of 2004</a></li>
            <li>DPWH Department Order No. 50, s. 2014 – Guidelines for environmentally safe dredging operations.</li>
            <li>Flood Management Master Plan for Metro Manila and Surrounding Areas (DPWH–World Bank).</li>
            <li>Battle for Manila Bay (DENR, 2019–present).</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">🌏 Join the Movement</h2>
        <p className="text-gray-600 mb-6">
          Flood resilience starts with awareness and collective action. Support mangrove planting drives, 
          community cleanups, and transparent flood management efforts in your area.
        </p>
        <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">
          Get Involved
        </button>
      </section>

      {/* Disclaimer */}
      <section className="text-center text-sm text-gray-500 border-t pt-6">
        <p>
          Disclaimer: This website and its contents are part of a <strong>school project</strong> that aims to provide 
          information on environmental issues and inspire collective actions for the preservation and protection 
          of the Earth’s ecosystems.
        </p>
      </section>
    </main>
  )
}

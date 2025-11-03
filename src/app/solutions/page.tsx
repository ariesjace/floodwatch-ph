"use client"
import TiltedCard from "@/components/TiltedCard";
import Image from "next/image";

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
          {/* TiltedCard for Mangrove Image */}
          <TiltedCard
            imageSrc="/img/mangrove.png"
            altText="Mangrove Reforestation"
            captionText="Mangrove Restoration"
            containerHeight="220px"
            containerWidth="100%"
            imageHeight="220px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
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
          {/* TiltedCard for Dredging Image */}
          <TiltedCard
            imageSrc="/img/dredging.png"
            altText="Dredging Operation"
            captionText="River Dredging"
            containerHeight="220px"
            containerWidth="100%"
            imageHeight="220px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />

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
      </section>

      {/* Retention Ponds Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🏞️ Construction of Retention Ponds (Flood Retarding Basins)</h2>
        <p className="text-gray-700 leading-relaxed">
          A retention pond stores excess rainwater during heavy rains and then releases it gradually to prevent flooding. 
          It helps reduce water overflow and protects low-lying communities from sudden flood buildup.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Impacts</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Temporarily stores excess rainwater during storms or heavy rain.</li>
              <li>Releases water slowly back into rivers and drainage systems to prevent overflow.</li>
              <li>Reduces flash flooding in urban and low-lying areas.</li>
              <li>Helps recharge groundwater, improving water supply sustainability.</li>
            </ul>
          </div>

          {/* TiltedCard for Basin Image */}
          <TiltedCard
            imageSrc="/img/basin.png"
            altText="Retention Pond Project"
            captionText="Flood Retarding Basin"
            containerHeight="220px"
            containerWidth="100%"
            imageHeight="220px"
            imageWidth="100%"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        </div>
      </section>

      {/* Fundraising and NGO Support Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">💰 Fundraising & NGO Support for Flood Resilience Projects</h2>
        <p className="text-gray-700 leading-relaxed">
          Sustainable flood management doesn’t rely on government efforts alone. 
          Many non-governmental organizations (NGOs), environmental groups, and private donors actively fund and support 
          community-driven projects that help restore ecosystems and reduce flood risks across the Philippines.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">🌿 Mangrove Reforestation</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong><a href="https://www.pcp4nbs.forestfoundation.ph/grants" className="text-blue-600 hover:underline">Forest Foundation Philippines</a></strong> — Funds nature-based solutions and community reforestation projects.</li>
              <li><strong><a href="https://www.wetlands.org" className="text-blue-600 hover:underline">Wetlands International</a></strong> — Supports science-based mangrove restoration and partnerships.</li>
              <li><strong><a href="https://www.bluemarinefoundation.com" className="text-blue-600 hover:underline">Blue Marine Foundation</a></strong> — Restores mangroves and strengthens local conservation initiatives.</li>
            </ul>
          </div>
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
  );
}

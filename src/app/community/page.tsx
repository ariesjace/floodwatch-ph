// src/app/community/page.tsx
import Image from "next/image";

export default function Community() {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Community Support & Emergency Hotlines
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Be prepared and stay safe during floods and typhoons. Below are
          emergency hotline numbers, key organizations, and essential safety
          tips for every Filipino.
        </p>
      </div>

      {/* Emergency Hotlines */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
          📞 Emergency Hotlines
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Philippine Red Cross */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/redcross.png"
              alt="Philippine Red Cross"
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold">Philippine Red Cross</h3>
              <a href="tel:143" className="text-blue-600 hover:underline">
                Hotline: 143, (02) 8790-2300
              </a>
            </div>
          </div>

          {/* NDRRMC */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/ndrrmc.png"
              alt="NDRRMC"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-semibold">NDRRMC</h3>
              <a href="tel:0289115061" className="text-blue-600 hover:underline">
                Hotline: (02) 8911-5061 to 65
              </a>
            </div>
          </div>

          {/* DSWD */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/dswd.png"
              alt="DSWD"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-semibold">DSWD</h3>
              <a href="tel:029318101" className="text-blue-600 hover:underline">
                Hotline: (02) 931-8101 to 07
              </a>
            </div>
          </div>

          {/* PNP */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/pnp.png"
              alt="PNP"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-semibold">PNP</h3>
              <a href="tel:117" className="text-blue-600 hover:underline">
                Hotline: 117 / (02) 8722-0650
              </a>
            </div>
          </div>

          {/* BFP */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/bfp.png"
              alt="BFP"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-semibold">BFP (Fire & Rescue)</h3>
              <a href="tel:0284260219" className="text-blue-600 hover:underline">
                Hotline: (02) 8426-0219
              </a>
            </div>
          </div>

          {/* MMDA */}
          <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
            <Image
              src="/img/mmda.png"
              alt="MMDA"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-semibold">MMDA</h3>
              <a href="tel:136" className="text-blue-600 hover:underline">
                Hotline: 136
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Preparedness Tips */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          ℹ️ Preparedness Tips
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Always prepare an emergency go-bag with essentials.</li>
          <li>Charge phones and power banks before the storm.</li>
          <li>Stay updated with PAGASA weather bulletins.</li>
          <li>Know your nearest evacuation centers.</li>
          <li>Keep important documents in waterproof containers.</li>
          <li>Stock clean drinking water and non-perishable food.</li>
        </ul>
      </div>

      {/* Cautions */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          ⚠️ Cautions During Floods
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Avoid walking or driving through floodwaters.</li>
          <li>Beware of electrical wires submerged in water.</li>
          <li>Move to higher ground immediately when floods rise.</li>
          <li>Follow local government evacuation orders strictly.</li>
          <li>Assist children, elderly, and persons with disabilities first.</li>
        </ul>
      </div>

      {/* Community Involvement */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          🤝 Community Involvement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Let’s work together as a community to spread awareness, help our
          neighbors, and build resilience against floods and typhoons. If you
          have more hotlines or safety tips to share, contact us and we’ll add
          them here.
        </p>
      </div>
    </section>
  );
}
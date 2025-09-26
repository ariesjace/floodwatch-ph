export default function AboutPage() {
  return (
    <main className="px-6 py-12 max-w-7xl mx-auto space-y-16">
      {/* Title */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About FloodWatch Philippines</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’re dedicated to understanding, documenting, and addressing the flooding crisis across the Philippines through
          research, storytelling, and community engagement.
        </p>
      </section>

      {/* Mission */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            FloodWatch Philippines aims to bridge the gap between complex climate science and real community concerns. We
            strive to make flood-related information accessible and understandable.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Through engagement, research, and media, we highlight the real impacts of flooding across the Philippines,
            giving local voices a platform and inspiring collective action.
          </p>
        </div>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
          {/* Placeholder for an image */}
          Community image/visualization
        </div>
      </section>

      {/* Values */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-10">Our Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Empathy First", desc: "We listen to and prioritize community voices." },
            { title: "Solution-Oriented", desc: "We work toward practical flood resilience strategies." },
            { title: "Community-Driven", desc: "We build partnerships across sectors and groups." },
            { title: "Anti-Corruption", desc: "We hold the powerful accountable, so the people never drown in silence." },
          ].map((val, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-10">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Julie Ann Abella", role: "Journalist", desc: "Focused on documenting local flood stories." },
            { name: "Rey Lorenz Carreon", role: "Scientist", desc: "Provides expertise on climate science." },
            { name: "Maria Precy Ipanag", role: "Community Leader", desc: "Connects initiatives with grassroots groups." },
            { name: "Aries Jace Balgos", role: "Technologist", desc: "Develops digital tools for awareness." },
          ].map((member, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto mb-4">
                {member.name.split(" ")[0][0]}
                {member.name.split(" ")[1][0]}
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-blue-700">{member.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-10">Get Involved</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Share Your Story</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you a researcher, community leader, or citizen with a story to share?
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Contribute</button>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <h3 className="font-semibold mb-2">Community Partnership</h3>
            <p className="text-sm text-gray-600 mb-4">
              Partner with us to strengthen flood awareness and resilience programs.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Work with us</button>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with relevant research and stories. Together, we can build more resilient communities across the Philippines.
        </p>
        <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
          Subscribe to Updates
        </button>
      </section>
    </main>
  );
}

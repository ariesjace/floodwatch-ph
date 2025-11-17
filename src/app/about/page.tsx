import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="w-full py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About FloodWatch Philippines</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to understanding, documenting, and addressing the flooding crisis across the Philippines through research, storytelling, and community engagement.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              FloodWatch Philippines bridges the gap between complex climate science and real community concerns. We make flood-related information accessible and understandable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through engagement, research, and media, we highlight the real impacts of flooding, give local voices a platform, and inspire collective action.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge>Research-Driven</Badge>
              <Badge>Community-Focused</Badge>
              <Badge>Action-Oriented</Badge>
            </div>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/img/poster.png"
              alt="Community visualization"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Empathy First', desc: 'We listen to and prioritize community voices.' },
              { icon: '🛠️', title: 'Solution-Oriented', desc: 'We work toward practical flood resilience strategies.' },
              { icon: '🌍', title: 'Community-Driven', desc: 'We build partnerships across sectors and groups.' },
              { icon: '⚖️', title: 'Anti-Corruption', desc: 'We hold the powerful accountable for flood preparedness.' }
            ].map((value, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Julie Ann Abella', role: 'Journalist', desc: 'Documenting local flood stories and community voices.' },
              { name: 'Rey Lorenz Carreon', role: 'Scientist', desc: 'Providing expertise on climate science and research.' },
              { name: 'Maria Precy Ipanag', role: 'Community Leader', desc: 'Connecting initiatives with grassroots groups.' },
              { name: 'Aries Jace Balgos', role: 'Technologist', desc: 'Developing digital tools for awareness.' }
            ].map((member, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {member.name.split(' ')[0][0]}
                    {member.name.split(' ')[member.name.split(' ').length - 1][0]}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <Badge className="mt-2" variant="secondary">{member.role}</Badge>
                  <p className="text-xs text-muted-foreground mt-3">{member.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share Your Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Are you a researcher, community leader, or citizen with a story to share about flooding in the Philippines?
                </p>
                <Button variant="outline" className="w-full">
                  Contribute Your Story
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Partnership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Partner with us to strengthen flood awareness and resilience programs in your area.
                </p>
                <Button variant="outline" className="w-full">
                  Work With Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get the latest research, articles, and community stories delivered to your inbox.
          </p>
          <Button variant="secondary" size="lg">
            Subscribe to Updates
          </Button>
        </section>

        {/* Disclaimer */}
        <div className="text-center text-sm text-muted-foreground border-t pt-8">
          <p className="italic">
            This website is a school project that aims to provide information on an environmental issue and inspire collective actions for ecosystem preservation and protection.
          </p>
        </div>
      </div>
    </main>
  )
}

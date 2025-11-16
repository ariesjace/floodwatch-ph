"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function SolutionsPage() {
  return (
    <main className="w-full py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-16">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Flood Solutions</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover sustainable and science-based strategies that help communities reduce flood risks, protect ecosystems, and strengthen climate resilience.
          </p>
        </section>

        {/* Solutions Tabs */}
        <Tabs defaultValue="mangrove" className="w-full">
          <TabsList className="grid w-full md:w-fit md:mx-auto md:grid-cols-4">
            <TabsTrigger value="mangrove">Mangroves</TabsTrigger>
            <TabsTrigger value="dredging">Dredging</TabsTrigger>
            <TabsTrigger value="retention">Retention Ponds</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
          </TabsList>

          {/* Mangrove Solution */}
          <TabsContent value="mangrove" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">🌿</span>
                  <div>
                    <CardTitle className="text-2xl">Mangrove Reforestation</CardTitle>
                    <CardDescription>Natural flood protection through coastal restoration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Mangrove reforestation is one of the most effective and eco-friendly ways to reduce flooding in the Philippines. 
                  These coastal trees act as natural barriers that protect communities from strong waves, storm surges, and rising tides.
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">How Mangroves Help Prevent Flooding</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: '🌊', title: 'Natural Flood Protection', desc: 'Roots slow down waves and absorb excess water.' },
                        { icon: '🏔️', title: 'Prevents Erosion', desc: 'Holds soil in place and stabilizes coastlines.' },
                        { icon: '🐟', title: 'Supports Marine Life', desc: 'Serves as nurseries for fish, crabs, and sea life.' },
                        { icon: '🌍', title: 'Cleans the Environment', desc: 'Filters pollutants and traps sediments.' },
                        { icon: '✅', title: 'Sustainable & Low-Cost', desc: 'Grows stronger over time with minimal maintenance.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-xl flex-shrink-0">{item.icon}</span>
                          <div>
                            <p className="font-semibold text-sm">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden h-80 md:h-96">
                    <Image
                      src="/img/mangrove.png"
                      alt="Mangrove Reforestation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dredging Solution */}
          <TabsContent value="dredging" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">🚜</span>
                  <div>
                    <CardTitle className="text-2xl">Dredging Operations</CardTitle>
                    <CardDescription>Clearing waterways for improved flow</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Dredging is the removal of sediments, debris, and waste from waterways. It is one of the most practical and effective flood control strategies for the Philippines.
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden h-80 md:h-96 order-2 md:order-1">
                    <Image
                      src="/img/dredging.png"
                      alt="Dredging Operation"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4 order-1 md:order-2">
                    <h3 className="font-semibold text-lg">Ongoing Efforts and Impact</h3>
                    <div className="space-y-3">
                      {[
                        { project: 'Cagayan River Restoration', desc: 'Deepening and widening channels to reduce flooding.' },
                        { project: 'Pasig River Dredging', desc: 'Over 1.2M metric tons of silt removed, improving flow.' },
                        { project: 'Tullahan–Tinajeros Rehabilitation', desc: 'Reduced flooding in CAMANAVA areas.' },
                        { project: 'Battle for Manila Bay', desc: 'Integrates dredging with estero cleanup and waste segregation.' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-muted rounded-lg">
                          <p className="font-semibold text-sm">{item.project}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Retention Ponds */}
          <TabsContent value="retention" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">🏞️</span>
                  <div>
                    <CardTitle className="text-2xl">Retention Ponds</CardTitle>
                    <CardDescription>Water storage basins for flood control</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Retention ponds store excess rainwater during heavy rains and gradually release it to prevent flooding. They reduce water overflow and protect low-lying communities.
                </p>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Benefits</h3>
                    <div className="space-y-3">
                      {[
                        'Temporarily stores excess rainwater during storms',
                        'Releases water slowly to prevent overflow',
                        'Reduces flash flooding in urban and low-lying areas',
                        'Helps recharge groundwater supplies',
                        'Improves water supply sustainability'
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <p className="text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden h-80 md:h-96">
                    <Image
                      src="/img/basin.png"
                      alt="Retention Pond"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Funding Support */}
          <TabsContent value="funding" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">💰</span>
                  <div>
                    <CardTitle className="text-2xl">Funding & NGO Support</CardTitle>
                    <CardDescription>Organizations supporting flood resilience projects</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Sustainable flood management relies on partnerships between government, NGOs, and private donors to fund community-driven projects across the Philippines.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold">Supporting Organizations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      {
                        name: 'Forest Foundation Philippines',
                        focus: 'Mangrove Reforestation',
                        desc: 'Funds nature-based solutions and community reforestation projects'
                      },
                      {
                        name: 'Wetlands International',
                        focus: 'Wetland Restoration',
                        desc: 'Supports science-based mangrove restoration and partnerships'
                      },
                      {
                        name: 'Blue Marine Foundation',
                        focus: 'Coastal Conservation',
                        desc: 'Restores mangroves and strengthens local conservation initiatives'
                      },
                      {
                        name: 'Philippine NGO Coalition',
                        focus: 'Community Programs',
                        desc: 'Coordinates flood preparedness and community resilience efforts'
                      }
                    ].map((org, idx) => (
                      <Card key={idx} className="bg-muted/50">
                        <CardContent className="pt-4">
                          <Badge className="mb-2">{org.focus}</Badge>
                          <h4 className="font-semibold text-sm mb-2">{org.name}</h4>
                          <p className="text-xs text-muted-foreground">{org.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold">Join the Movement</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Flood resilience starts with awareness and collective action. Support mangrove planting drives, community cleanups, and transparent flood management efforts.
          </p>
          <Button variant="secondary" size="lg">
            Get Involved in Your Community
          </Button>
        </section>

        {/* Disclaimer */}
        <div className="text-center text-xs text-muted-foreground border-t pt-8">
          <p>
            This website is part of a school project aimed at providing information on environmental issues and inspiring collective action for ecosystem preservation.
          </p>
        </div>
      </div>
    </main>
  )
}

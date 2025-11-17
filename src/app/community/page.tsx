import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Phone, MapPin, Info } from 'lucide-react'
import Image from "next/image"

export default function Community() {
  const emergencyHotlines = [
    {
      name: 'Philippine Red Cross',
      hotline: '143, (02) 8790-2300',
      icon: '/img/redcross.png',
      priority: 'high'
    },
    {
      name: 'NDRRMC (Disaster Mgmt)',
      hotline: '(02) 8911-5061 to 65',
      icon: '/img/ndrrmc.png',
      priority: 'high'
    },
    {
      name: 'DSWD (Social Welfare)',
      hotline: '(02) 931-8101 to 07',
      icon: '/img/dswd.png',
      priority: 'high'
    },
    {
      name: 'PNP (Police)',
      hotline: '117 / (02) 8722-0650',
      icon: '/img/pnp.png',
      priority: 'high'
    },
    {
      name: 'BFP (Fire & Rescue)',
      hotline: '(02) 8426-0219',
      icon: '/img/bfp.png',
      priority: 'high'
    },
    {
      name: 'MMDA (Metro Manila)',
      hotline: '136',
      icon: '/img/mmda.png',
      priority: 'medium'
    }
  ]

  const preparednessTips = [
    'Always prepare an emergency go-bag with essentials',
    'Charge phones and power banks before the storm',
    'Stay updated with PAGASA weather bulletins',
    'Know your nearest evacuation centers',
    'Keep important documents in waterproof containers',
    'Stock clean drinking water and non-perishable food',
    'Have first aid kits readily available',
    'Know how to turn off utilities (gas, electricity)'
  ]

  const cautionsDuringFloods = [
    'Avoid walking or driving through floodwaters',
    'Beware of electrical wires submerged in water',
    'Move to higher ground immediately when floods rise',
    'Follow local government evacuation orders strictly',
    'Assist children, elderly, and persons with disabilities first',
    'Do not touch dead animals or contaminated objects',
    'Stay away from swept away debris and structures'
  ]

  return (
    <main className="w-full py-12 md:py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-12">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Community Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Emergency hotlines, safety tips, and resources to keep you and your family safe during floods and typhoons.
          </p>
        </section>

        {/* Emergency Alert */}
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>In Case of Emergency</AlertTitle>
          <AlertDescription>
            Immediately move to higher ground and call the appropriate hotlines below for assistance.
          </AlertDescription>
        </Alert>

        {/* Emergency Hotlines */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <Phone className="h-6 w-6" />
              Emergency Hotlines
            </h2>
            <p className="text-muted-foreground mb-6">
              Save these numbers or contact them immediately during emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyHotlines.map((hotline, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={hotline.icon || "/placeholder.svg"}
                        alt={hotline.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm">{hotline.name}</h3>
                        {hotline.priority === 'high' && (
                          <Badge variant="destructive" className="text-xs">Priority</Badge>
                        )}
                      </div>
                      <a
                        href={`tel:${hotline.hotline.split(' ')[0]}`}
                        className="text-primary font-mono text-sm hover:underline"
                      >
                        {hotline.hotline}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Preparedness & Safety Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Preparedness Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                Preparedness Tips
              </CardTitle>
              <CardDescription>Get ready before the season starts</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {preparednessTips.map((tip, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Cautions During Floods */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Safety During Floods
              </CardTitle>
              <CardDescription>What to do when floodwaters rise</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {cautionsDuringFloods.map((caution, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="text-destructive flex-shrink-0 mt-0.5">!</span>
                    <span>{caution}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Community Action Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Community Involvement</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              How you can help build a more resilient community
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Flood resilience is built together. Join community programs, participate in cleanup drives, and help your neighbors prepare for disasters.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Share Knowledge', desc: 'Educate friends and family about flood preparedness' },
                { title: 'Community Cleanup', desc: 'Join drainage system maintenance in your area' },
                { title: 'Support Networks', desc: 'Help vulnerable families prepare and evacuate' }
              ].map((action, idx) => (
                <div key={idx} className="p-3 bg-primary-foreground/10 rounded-lg">
                  <p className="font-semibold text-sm">{action.title}</p>
                  <p className="text-xs opacity-90">{action.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Weather Updates</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>PAGASA (Philippine Atmospheric, Geophysical and Astronomical Services Administration)</p>
                <Button variant="outline" size="sm" className="w-full">
                  Visit PAGASA
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Evacuation Centers</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Contact your local government unit (LGU) for nearest evacuation centers and relief assistance.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Find Your LGU
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">More Information</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Read our articles and explore solutions to understand and prepare for flooding.</p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

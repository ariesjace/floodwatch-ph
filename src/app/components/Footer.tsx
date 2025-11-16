import React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">FloodWatch PH</h3>
            <p className="text-sm text-muted-foreground">
              Real-time flood awareness and solutions for every Filipino.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              <Link href="/about" className="text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/articles" className="text-sm hover:text-primary transition-colors">
                Articles
              </Link>
              <Link href="/community" className="text-sm hover:text-primary transition-colors">
                Community
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Emergency Hotlines</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>NDRRMC: (02) 8911-5061</p>
              <p>Red Cross: 143</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FloodWatch Philippines. All rights reserved.</p>
          <p>Made with 💜 for a resilient Philippines</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

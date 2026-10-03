import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { SelectedWork } from "@/components/selected-work"

import { HowIWork } from "@/components/how-i-work"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
        
        <HowIWork />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}

import { ArrowRight } from "lucide-react"
import { HeroVisual } from "@/components/hero-visual"

export function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Data Analysis · Business Insights · Real Impact
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turning data into clearer business decisions
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I help businesses turn fragmented operational data into reliable reporting, actionable KPIs and automated
            analytics solutions.
          </p>
          <p className="mt-6 text-sm font-medium text-foreground/80">
            Power BI · SQL · DAX · Excel · Power Query · Power Automate · Microsoft Fabric
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

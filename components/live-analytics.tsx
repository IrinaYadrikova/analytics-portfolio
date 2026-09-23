import { ArrowUpRight } from "lucide-react"
import { DashboardMock } from "@/components/dashboard-mock"

export function LiveAnalytics() {
  return (
    <section className="scroll-mt-24 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.06] p-8 md:p-12">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Live Analytics</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Customer & Revenue Intelligence
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                Explore an interactive analytics application analysing customer behaviour, revenue trends, churn,
                retention and lifetime value.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["PostgreSQL", "Supabase", "Next.js", "React", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
              >
                Open Live Dashboard
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Currently a visual placeholder — the real application will be connected later.
              </p>
            </div>

            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  )
}

import { SectionHeading } from "@/components/section-heading"
import { processSteps } from "@/lib/site-data"

export function HowIWork() {
  return (
    <section className="scroll-mt-24 border-t border-border/70 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading eyebrow="How I Work" title="A structured approach to real business problems" />

        {/* Desktop: horizontal connected journey */}
        <ol className="mt-16 hidden lg:grid lg:grid-cols-7">
          {processSteps.map((step, index) => (
            <li key={step.number} className="group relative flex flex-col items-start pr-4">
              {/* Connector line */}
              <div className="relative mb-6 flex w-full items-center">
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary/70 ring-4 ring-primary/10 transition-colors group-hover:bg-primary" />
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-2 h-px flex-1 bg-gradient-to-r from-border to-border/40"
                  />
                )}
              </div>
              <span className="font-display text-3xl font-semibold text-primary/25 transition-colors group-hover:text-primary/60">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>

        {/* Mobile / tablet: vertical process */}
        <ol className="mt-12 lg:hidden">
          {processSteps.map((step, index) => (
            <li key={step.number} className="group relative flex gap-5 pb-8 last:pb-0">
              {/* Vertical connector rail */}
              <div className="relative flex flex-col items-center">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-primary/70 ring-4 ring-primary/10 transition-colors group-hover:bg-primary" />
                {index < processSteps.length - 1 && (
                  <span aria-hidden className="mt-1 w-px flex-1 bg-gradient-to-b from-border to-border/30" />
                )}
              </div>
              <div className="-mt-1 pb-1">
                <span className="font-display text-2xl font-semibold text-primary/30 transition-colors group-hover:text-primary/60">
                  {step.number}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

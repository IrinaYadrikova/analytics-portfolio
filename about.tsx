const principles = [
  {
    title: "Question before tool",
    description: "Understand what the business actually needs to know before deciding how to analyse it.",
  },
  {
    title: "Evidence before assumption",
    description: "Validate the data, definitions and logic before drawing conclusions.",
  },
  {
    title: "Insight into action",
    description: "Turn analysis into reporting and processes that support real decisions.",
  },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Analytics built around business questions, not just dashboards.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                My approach to analytics is shaped by my scientific background and PhD research — understanding the
                problem, testing assumptions, validating evidence and building conclusions that can be supported by the
                data.
              </p>
              <p>
                I bring that same discipline to business analytics: understanding how the organisation works, defining
                meaningful measures, checking data quality and translating complex information into reporting people can
                actually use.
              </p>
              <p>
                The goal isn&apos;t simply to build a dashboard. It&apos;s to create reliable evidence for better
                decisions.
              </p>
            </div>
          </div>

          <div className="lg:pt-1">
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {principles.map((principle, index) => (
                <li key={principle.title} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                  <span className="mt-0.5 font-display text-sm tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

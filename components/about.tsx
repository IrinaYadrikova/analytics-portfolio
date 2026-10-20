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

    <section

      id="about"

      className="scroll-mt-24 border-t border-border/70 bg-white"

    >

      <div className="mx-auto max-w-6xl px-6 py-12 md:py-14">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

          {/* LEFT */}

          <div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">

              About My Approach

            </p>

            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">

              A scientific approach to business analytics

            </h2>

          </div>

          {/* RIGHT */}

          <div className="max-w-2xl">

            <p className="text-base leading-relaxed text-muted-foreground">

              My background in environmental engineering and research shaped

              how I approach data: understand the problem, test assumptions and

              validate the evidence before drawing conclusions.

            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">

              I apply the same discipline to business analytics, drawing on hands-on experience delivering reporting solutions, developing data models, defining business KPIs and automating workflows. My focus is on creating reliable solutions that people can trust and use to make decisions.

            </p>

            <div className="mt-10 border-t border-border/70 pt-8">

              <p className="font-display text-xl font-semibold text-foreground">

                From evidence to practical decisions

              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">

                I work across the analytics process, from understanding business requirements and assessing data quality to developing reporting solutions and communicating insights. The goal is to make complex information easier to understand and translate it into practical business decisions.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}
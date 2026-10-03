import Link from "next/link"
import Image from "next/image"

const tools = [
  "Power BI",
  "DAX",
  "Star Schema",
  "SQL",
  "Python",
  "Cohort Analysis",
]

const kpis = [
  {
    title: "Recurring Revenue",
    value: "MRR & ARR",
    text: "Tracking recurring revenue performance and subscription growth.",
  },
  {
    title: "Customer Retention",
    value: "Churn & Retention",
    text: "Understanding customer loss, retention patterns and revenue risk.",
  },
  {
    title: "Customer Value",
    value: "LTV",
    text: "Evaluating the long-term commercial value of customer relationships.",
  },
  {
    title: "Customer Behaviour",
    value: "Cohorts",
    text: "Comparing customer groups over time to identify changes in retention.",
  },
]

const analysisAreas = [
  {
    number: "01",
    title: "Revenue Performance",
    text: "Analysis of recurring revenue, subscription performance and changes in the revenue base.",
  },
  {
    number: "02",
    title: "Customer Retention",
    text: "Churn and retention analysis to identify where customer and recurring revenue risk emerges.",
  },
  {
    number: "03",
    title: "Cohort Analysis",
    text: "Customer cohorts used to understand how retention and behaviour develop over time.",
  },
  {
    number: "04",
    title: "Customer Segmentation",
    text: "Customer groups analysed to identify differences in value, behaviour and commercial importance.",
  },
  {
    number: "05",
    title: "Product Performance",
    text: "Analysis of product and subscription performance to understand contribution to commercial results.",
  },
  {
    number: "06",
    title: "Promotion Effectiveness",
    text: "Evaluation of promotional activity and its relationship with customer and revenue performance.",
  },
]

export default function SaaSCustomerRevenuePage() {
  return (
    <main className="min-h-screen bg-[#f7fafc] text-[#10233f]">

      {/* HERO */}

<section className="border-b border-[#dce6ed]">

  <div className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">

    <Link

      href="/#work"

      className="inline-flex items-center gap-2 text-sm font-medium text-[#1769aa] transition hover:opacity-70"

    >

      ← Back to Selected Work

    </Link>

    <div className="mt-9 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

      {/* HERO TEXT */}

      <div>

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">

          SaaS Analytics · Portfolio Project

        </p>

        <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] md:text-6xl">

          SaaS Customer &amp; Revenue Intelligence

        </h1>

        <p className="mt-7 text-lg leading-8 text-[#64758a]">

          An end-to-end analytics project exploring recurring revenue,

          customer behaviour, churn, retention, lifetime value and

          product performance for a subscription-based SaaS business.

        </p>

        <div className="mt-7 flex flex-wrap gap-2">

          {tools.map((tool) => (

            <span

              key={tool}

              className="rounded-full border border-[#d5e1e8] bg-[#edf5f9] px-4 py-2 text-sm text-[#24415f]"

            >

              {tool}

            </span>

          ))}

        </div>

        <div className="mt-8">

          <a

            href="https://github.com/IrinaYadrikova/UK_saas_star_schema"

            target="_blank"

            rel="noopener noreferrer"

            className="inline-flex items-center rounded-full bg-[#1768a5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#125786]"

          >

            View GitHub Project ↗

          </a>

        </div>

      </div>

      {/* HERO DASHBOARD */}

      <div className="w-full">

        <div className="overflow-hidden rounded-[24px] border border-[#d8e4ec] bg-white p-3 shadow-sm">

          <Image

            src="/saas-retention-dashboard.png"

            alt="SaaS retention, cohort and lifetime value Power BI dashboard"

            width={1400}

            height={850}

            className="h-auto w-full rounded-[16px]"

            priority

          />

        </div>

        <p className="mt-3 text-center text-xs text-[#71869a]">

          Retention, Cohorts &amp; Lifetime Value · Power BI · Synthetic portfolio data

        </p>

      </div>

    </div>

  </div>

</section>


      {/* BUSINESS QUESTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
            Business Question
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-2">

            <h2 className="max-w-xl font-serif text-3xl font-semibold leading-tight md:text-4xl">
              Understanding what drives recurring revenue and customer value
            </h2>

            <div className="space-y-5 text-base leading-7 text-[#64758a]">
              <p>
                Subscription businesses need to understand more than total
                sales. Revenue performance depends on customer acquisition,
                retention, churn, subscription behaviour and the long-term
                value of different customer groups.
              </p>

              <p>
                This project brings these areas together in one analytical
                model to explore how customer behaviour, products and
                commercial activity contribute to recurring revenue
                performance.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* DATA MODEL */}
      <section className="border-y border-[#dce6ed] bg-[#f1f7fa]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
            Data Model
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold md:text-4xl">
            A star schema designed for commercial analysis
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-[#64758a]">
            The analytical model separates descriptive business entities from
            transactional activity, creating a structured foundation for
            customer, subscription, payment and usage analysis.
          </p>

          <div className="mt-10 rounded-[24px] border border-[#d5e2ea] bg-white p-6 md:p-9">

            <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-center">

              {/* DIMENSIONS */}
              <div className="space-y-3">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#71869a]">
                  Dimensions
                </p>

                {["Customer", "Product", "Date"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#dce6ed] bg-[#f8fbfd] p-4 text-center font-medium"
                  >
                    Dim {item}
                  </div>
                ))}
              </div>

              {/* CORE */}
              <div className="rounded-2xl border border-[#acd2df] bg-[#eaf6f8] p-7 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2a98a6]">
                  Analytical Core
                </p>

                <p className="mt-3 font-serif text-2xl font-semibold">
                  SaaS Star Schema
                </p>

                <p className="mt-3 text-sm leading-6 text-[#64758a]">
                  Customer, product and date dimensions connected to
                  subscription, payment and usage activity.
                </p>
              </div>

              {/* FACTS */}
              <div className="space-y-3">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#71869a]">
                  Facts
                </p>

                {["Subscriptions", "Payments", "Usage"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#dce6ed] bg-[#f8fbfd] p-4 text-center font-medium"
                  >
                    Fact {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* KPI FRAMEWORK */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
            KPI Framework
          </p>

          <h2 className="mt-5 font-serif text-3xl font-semibold md:text-4xl">
            From revenue totals to customer economics
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.title}
                className="rounded-[20px] border border-[#dce6ed] bg-[#f8fbfd] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#71869a]">
                  {kpi.title}
                </p>

                <p className="mt-3 font-serif text-xl font-semibold">
                  {kpi.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#64758a]">
                  {kpi.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ANALYSIS */}
      <section className="border-y border-[#dce6ed] bg-[#f1f7fa]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
            Analytical Scope
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-3xl font-semibold md:text-4xl">
            Connecting customer behaviour with commercial performance
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {analysisAreas.map((area) => (
              <div
                key={area.number}
                className="rounded-[20px] border border-[#d8e4ec] bg-white p-6"
              >
                <p className="text-sm font-semibold text-[#2aa8b2]">
                  {area.number}
                </p>

                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#64758a]">
                  {area.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* BUSINESS VALUE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
                Business Value
              </p>

              <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-4xl">
                Turning SaaS activity into clearer commercial decisions
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                [
                  "Revenue Visibility",
                  "Creates a clearer view of recurring revenue performance rather than relying only on total sales.",
                ],
                [
                  "Retention Insight",
                  "Highlights churn and retention patterns that can affect future recurring revenue.",
                ],
                [
                  "Customer Prioritisation",
                  "Supports comparison of customer groups by behaviour, retention and long-term value.",
                ],
                [
                  "Commercial Analysis",
                  "Connects product and promotional performance with customer and revenue outcomes.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[18px] border border-[#dce6ed] bg-[#f8fbfd] p-6"
                >
                  <h3 className="font-serif text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64758a]">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* MY ROLE */}
      <section className="border-t border-[#dce6ed] bg-[#f1f7fa]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2aa8b2]">
            My Role
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-2">

            <h2 className="font-serif text-3xl font-semibold md:text-4xl">
              End-to-End Analytics Development
            </h2>

            <div>
              <p className="leading-7 text-[#64758a]">
                I designed the analytical structure, developed the data model
                and measures, and explored the data through customer, revenue,
                retention and product analysis. The project combines data
                modelling with business-focused KPI design and visual
                analytics.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Data Modelling",
                  "DAX",
                  "SQL",
                  "Power BI",
                  "KPI Design",
                  "Customer Analytics",
                  "Commercial Analytics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#d5e1e8] bg-white px-4 py-2 text-sm text-[#24415f]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


            {/* PROJECT NOTE + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-[#71869a]">
            This is a portfolio analytics project using synthetic data designed
            to represent realistic SaaS business structures and analytical
            questions.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/IrinaYadrikova/UK_saas_star_schema"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#1768a5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#125786]"
            >
              View GitHub Project ↗
            </a>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link
              href="/#work"
              className="text-sm font-medium text-[#1769aa] transition hover:opacity-70"
            >
              ← Back to Selected Work
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
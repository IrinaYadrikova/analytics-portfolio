import Link from "next/link"

const kpis = [
  "Activity vs Target",
  "Pipeline Value ",
  "Sales Outcome",
  "Target Coverage ",
  "Conversion Performance",
  "Existing Business",
  "New Opportunities",
  "Historical Comparison"
]

const technologies = [
  "Power BI",
  "DAX",
  "Power Query",
  "Semantic Models",
  "Data Modelling",
  "Salesforce",
  "Excel",
]

export default function InternationalSalesCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f4f9fc] text-[#142640]">

      {/* BACK */}
      <div className="mx-auto max-w-6xl px-6 pt-10 md:px-10">
        <Link
          href="/#work"
          className="text-sm font-medium text-[#1769aa] transition hover:opacity-70"
        >
          ← Back to Selected Work
        </Link>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">
          Commercial Project
        </p>

        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
          International Sales Performance & KPI Reporting
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
          Power BI reporting for commercial performance, pipeline, targets
          and KPI monitoring across international teams.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {["Power BI", "DAX", "KPI Frameworks", "Semantic Model"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                {item}
              </span>
            )
          )}
        </div>

{/* Anonymised dashboard */}

<div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm md:p-5">

  <img

    src="/international-sales-dashboard.png"

    alt="Anonymised sales performance Power BI dashboard showing commercial KPIs, targets, trends and team comparisons"

    className="h-auto w-full rounded-2xl"

  />

</div>

      </section>

      {/* BUSINESS CHALLENGE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_2fr] md:px-10 md:py-20">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
          
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Business Challenge
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Management needed a consistent view of sales performance across
            teams, markets and product areas, with clear comparison against
            targets and prior performance.
          </p>

        </div>
      </section>

      {/* MY ROLE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
              My Role
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold">
              Power BI Developer
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Developed and extended the reporting layer using an existing
              semantic model.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Built dashboard pages and interactive analysis",
              "Developed DAX measures and KPI logic",
              "Extended the semantic model when required",
              "Added supporting tables and relationships",
              "Implemented dynamic time-period reporting",
              "Validated reporting against source data",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <span className="mr-2 text-[#29aeb5]">✓</span>
                <span className="text-sm leading-6 text-slate-700">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

          {/* FLEXIBLE PERFORMANCE ANALYSIS */}

      <section className="bg-[#eaf4fa]">

        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">

            Key Feature

          </p>

          <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-center">

            {/* LEFT SIDE */}

            <div>

              <h2 className="font-serif text-3xl font-semibold md:text-4xl">

                Flexible Performance Analysis

              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">

                The reporting solution was designed to let management analyse

                commercial performance across different time periods and

                business dimensions. Dynamic measures and filter context

                supported multiple analytical views without duplicating

                reporting pages.

              </p>

            </div>

            {/* RIGHT SIDE */}

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

              {/* TIME PERIOD */}

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">

                Time Period

              </p>

              <div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm">

                <div className="rounded-xl bg-[#f4f9fc] p-3">Month</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">Quarter</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">YTD</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">FY</div>

              </div>

              <div className="my-5 text-center text-2xl text-[#29aeb5]">

                ↓

              </div>

              {/* PERFORMANCE */}

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">

                Performance View

              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">

                <div className="rounded-xl bg-[#f4f9fc] p-3">Actual vs Target</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">Conversion Performance</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">

                  Historical Comparison

                </div>

              </div>

              <div className="my-5 text-center text-2xl text-[#29aeb5]">

                ↓

              </div>

              {/* ANALYSIS */}

              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">

                Analysis

              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">

                <div className="rounded-xl bg-[#f4f9fc] p-3">Team</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">Product</div>

                <div className="rounded-xl bg-[#f4f9fc] p-3">Market</div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SOLUTION + KPIs */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
              Solution
            </p>

            <h2 className="mt-3 font-serif text-3xl font-semibold">
              One interactive reporting environment
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Commercial performance with drill-down by team, market and
              product area, supported by dynamic Month, Quarter, YTD and FY
              analysis.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
              Key Analytics
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {kpis.map((kpi) => (
                <span
                  key={kpi}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
                >
                  {kpi}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
            Business Value
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-serif text-xl font-semibold">
                Consistent KPIs
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Common performance definitions across commercial reporting.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-serif text-xl font-semibold">
                Faster Investigation
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Move from management overview to team, product and market
                detail.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-serif text-xl font-semibold">
                Performance Visibility
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Actual, target and prior-year performance viewed together.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#29aeb5]">
          Technology
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8">
          <Link
            href="/#work"
            className="font-medium text-[#1769aa] transition hover:opacity-70"
          >
            ← Back to Selected Work
          </Link>
        </div>

      </section>

    </main>
  )
}
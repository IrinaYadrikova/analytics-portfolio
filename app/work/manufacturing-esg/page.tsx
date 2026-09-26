import Link from "next/link"

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-[#d5e1ea] bg-white px-4 py-2 text-sm text-[#10233f]">
    {children}
  </span>
)

export default function ManufacturingESGPage() {
  return (
    <main className="min-h-screen bg-white text-[#10233f]">

      {/* HEADER */}
      <header className="border-b border-[#dce6ed] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold text-[#10233f]"
            >
              Irina Yadrikova
            </Link>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#53677e]">
              Data Analyst | BI · ESG · Automation
            </p>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <Link href="/">Home</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d5e1ea] px-5 py-2"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      </header>


      {/* HERO */}
      <section className="bg-[#f4f9fc]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#18a9b8]">
              Portfolio Project
            </p>

            <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.05] md:text-6xl">
              Manufacturing ESG & Operations Analytics
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4c617c]">
              An end-to-end analytics solution connecting environmental
              performance with manufacturing operations, production efficiency
              and business KPIs.
            </p>

                        <div className="mt-7 flex flex-wrap items-center gap-2">

              <Tag>Power BI</Tag>

              <Tag>PostgreSQL</Tag>

              <Tag>SQL</Tag>

              <Tag>DAX</Tag>

              <Tag>Data Modelling</Tag>

              <Tag>ESG Analytics</Tag>

              <Tag>Operational Analytics</Tag>

              <a

  href="https://github.com/IrinaYadrikova/Manufacturing-ESG"

  target="_blank"

  rel="noreferrer"

  className="inline-flex items-center rounded-full bg-[#1267d6] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0f58b8]"

>

  GitHub Project →

</a>

            </div>

          </div>

          <div className="rounded-[26px] border border-[#d9e4ec] bg-white p-3 shadow-sm">

            <img

              src="/esg-executive-summary.png"

              alt="Manufacturing ESG Executive Summary Power BI dashboard"

              className="w-full rounded-[18px]"

            />

          </div>

        </div>

      </section>


      {/* BUSINESS QUESTION */}

<section className="mx-auto max-w-6xl px-6 py-10 md:px-10">

  {/* TWO-COLUMN AREA */}

  <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">

    {/* LEFT — BUSINESS QUESTION */}

    <div>

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#18a9b8]">

        Business Question

      </p>

      <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1.12] text-[#10233f] md:text-5xl">

        Connecting ESG Performance with Operations

      </h2>

      <p className="mt-7 max-w-xl text-lg leading-8 text-[#4c617c]">

        Environmental metrics become more useful when they can be analysed

        alongside the operational activity that generates them.

      </p>

    </div>

    {/* RIGHT — PROJECT SCOPE */}

    <div className="self-start rounded-[26px] border border-[#d9e4ec] bg-[#f7fbfd] p-8">

      <h3 className="font-serif text-2xl font-semibold text-[#10233f]">

        Project Scope

      </h3>

      <div className="mt-7 grid gap-7 md:grid-cols-3">

        {/* ENVIRONMENTAL */}

        <div>

          <p className="font-semibold text-[#168d68]">

            Environmental

          </p>

          <ul className="mt-3 space-y-2 text-[#4c617c]">

            <li>• Emissions</li>

            <li>• Energy</li>

            <li>• Waste</li>

            <li>• Recycling</li>

          </ul>

        </div>

        {/* OPERATIONS */}

        <div>

          <p className="font-semibold text-[#10233f]">

            Operations

          </p>

          <ul className="mt-3 space-y-2 text-[#4c617c]">

            <li>• Production</li>

            <li>• Quality control</li>

            <li>• Throughput</li>

            <li>• Product performance</li>

          </ul>

        </div>

        {/* BUSINESS & PEOPLE */}

        <div>

          <p className="font-semibold text-[#10233f]">

            Business &amp; People

          </p>

          <ul className="mt-3 space-y-2 text-[#4c617c]">

            <li>• Revenue</li>

            <li>• Customers</li>

            <li>• Workforce</li>

            <li>• Productivity</li>

          </ul>

        </div>

      </div>

    </div>

  </div>

  {/* FULL-WIDTH PROJECT DESCRIPTION */}

  <p className="mt-5 max-w-5xl text-lg leading-8 text-[#4c617c]">

    This project explores how a manufacturing organisation could bring

    emissions, energy, waste, production, quality, workforce and commercial

    data into one analytical model.

  </p>

</section>


      {/* DATA & MODELLING */}
      <section className="border-y border-[#dce6ed] bg-[#f7fbfd]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#18a9b8]">
              Data & Modelling
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold">
              PostgreSQL Analytical Model
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4c617c]">
              Built a connected manufacturing dataset in PostgreSQL combining
              ESG, operational, sales and HR data.
            </p>

            <ul className="mt-6 space-y-3 text-[#4c617c]">
              <li>
                • 10 interconnected tables covering customers, orders,
                products, production, employees, departments, waste, energy
                and emissions
              </li>
              <li>• SQL exploration and transformation</li>
              <li>• Analytical data modelling for Power BI</li>
              <li>• Reusable structure for ESG analysis</li>
            </ul>
          </div>

          <div className="rounded-[26px] border border-[#d9e4ec] bg-white p-4 shadow-sm">
            <img
              src="/esg-data-model.png"
              alt="PostgreSQL manufacturing ESG data model"
              className="w-full rounded-[18px]"
            />
          </div>

        </div>
      </section>


      {/* DASHBOARDS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#18a9b8]">
          Analysis
        </p>

        <h2 className="mt-3 font-serif text-4xl font-semibold">
          Key Analysis & Dashboard Examples
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4c617c]">
          The Power BI solution connects sustainability measures with
          operational performance, allowing environmental results to be
          explored alongside their underlying business drivers.
        </p>


        {/* DASHBOARD 1 */}
        <div className="mt-12">
          <h3 className="font-serif text-2xl font-semibold">
            Waste & Circularity
          </h3>

          <p className="mt-2 text-[#4c617c]">
            Analysis of waste generation, recycling performance and waste intensity across departments and product categories, with year-on-year trends used to identify where operational changes may be affecting environmental performance.
          </p>

          <div className="mt-5 rounded-[26px] border border-[#d9e4ec] bg-white p-4 shadow-sm">
            <img
              src="/esg-waste-circularity.png"
              alt="Waste and Circularity Power BI dashboard"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>


        {/* DASHBOARD 2 */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl font-semibold">
            Production & Quality
          </h3>

          <p className="mt-2 text-[#4c617c]">
            Production volume, unit economics and quality performance analysed alongside emissions and waste intensity to understand the relationship between operational output, cost and environmental impact.
          </p>

          <div className="mt-5 rounded-[26px] border border-[#d9e4ec] bg-white p-4 shadow-sm">
            <img
              src="/esg-production-quality.png"
              alt="Production and Quality Power BI dashboard"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>


        {/* DASHBOARD 3 */}
        <div className="mt-14">
          <h3 className="font-serif text-2xl font-semibold">
            Sustainability Performance
          </h3>

          <p className="mt-2 text-[#4c617c]">
            Year-on-year emissions, energy and waste indicators brought together to assess overall sustainability performance and track how key measures are changing over time.
          </p>

          <div className="mt-5 rounded-[26px] border border-[#d9e4ec] bg-white p-4 shadow-sm">
            <img
              src="/esg-sustainability-index.png"
              alt="Manufacturing sustainability performance Power BI dashboard"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>

      </section>


      {/* OUTCOME / ROLE / TOOLS */}
      <section className="border-t border-[#dce6ed] bg-[#f4f9fc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:px-10 lg:grid-cols-3">

          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Project Outcome
            </h3>

            <ul className="mt-5 space-y-3 leading-7 text-[#4c617c]">
              <li>• Identified high-impact emissions periods</li>
              <li>• Calculated department-level recycling performance</li>
              <li>• Analysed production efficiency and waste per unit</li>
              <li>• Evaluated product and revenue performance</li>
              <li>• Built a documented SQL analysis workflow</li>
            </ul>
          </div>


          <div>
            <h3 className="font-serif text-2xl font-semibold">
              My Role
            </h3>

            <ul className="mt-5 space-y-3 leading-7 text-[#4c617c]">
              <li>• Independent portfolio project</li>
              <li>• Data preparation and modelling</li>
              <li>• PostgreSQL and SQL analysis</li>
              <li>• DAX measure development</li>
              <li>• Power BI dashboard design</li>
              <li>• ESG and operational analysis</li>
            </ul>
          </div>


          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Tools Used
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              <Tag>Power BI</Tag>
              <Tag>PostgreSQL</Tag>
              <Tag>SQL</Tag>
              <Tag>DAX</Tag>
              <Tag>Excel</Tag>
              <Tag>ESG Analytics</Tag>
            </div>

            <a
              href="https://github.com/IrinaYadrikova/Manufacturing-ESG"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#1267d6] px-6 py-3 font-medium text-white transition hover:bg-[#0f58b8]"
            >
              View full project on GitHub →
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}
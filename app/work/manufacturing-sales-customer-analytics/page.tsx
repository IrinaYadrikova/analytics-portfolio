import Link from "next/link"
import Image from "next/image"

const technologies = [
  "Zoho Analytics",
  "SQL",
  "Excel",
  "CRM Data",
  "Customer Analytics",
  "Sales Analytics",
  "KPI Design",
  "Data Modelling",
]

const phases = [
  {
    number: "01",
    period: "June 2025",
    title: "Sales & Executive Reporting",
    items: [
      "Team Performance Dashboard",
      "Excel-based management reporting",
    ],
  },
  {
    number: "02",
    period: "July 2025",
    title: "Sales & Executive Reporting",
    items: [
      "Weekly KPI reporting",
      "Sales by year",
      "Sales by product",
      "Time & attendance reporting",
    ],
  },
  {
    number: "03",
    period: "August 2025",
    title: "Sales & Executive Reporting",
    items: [
      "Monthly Team Dashboard",
      "Migration to Zoho Analytics",
      "SQL-based reporting",
    ],
  },
  {
    number: "04",
    period: "September 2025",
    title: "Production & Quality",
    items: [
      "Delivery performance",
      "Production benchmarking",
      "Enquiry reporting",
    ],
  },
  {
    number: "05",
    period: "October 2025",
    title: "Enquiry Conversion & Funnel",
    items: [
      "Enquiry conversion analysis",
      "Sales funnel analysis",
      "People & productivity",
      "Conversion-rate KPIs",
    ],
  },
  {
    number: "06",
    period: "November 2025",
    title: "Advanced Excel Modelling",
    items: [
      "Production-time calculator",
      "Production phases",
      "Production-time estimation",
    ],
  },
  {
    number: "07",
    period: "December 2025",
    title: "Customer Analytics",
    items: [
      "Customer lifecycle & retention",
      "Customer segmentation",
      "Zoho Analytics",
      "SQL analysis",
    ],
  },
  {
    number: "08",
    period: "January 2026",
    title: "Enquiry Lead Time",
    items: [
      "Lead-time analysis",
      "Performance KPIs",
    ],
  },
  {
    number: "09",
    period: "February 2026",
    title: "Commercial Analytics",
    items: [
      "Monthly sales analysis",
      "Enquiry conversion performance",
      "Zoho Analytics & SQL",
    ],
  },
  {
    number: "10",
    period: "May 2026 → Ongoing",
    title: "Commercial Analytics",
    items: [
      "Reporting improvements",
      "Workflow automation",
      "Ad-hoc business analysis",
    ],
  },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#d5e1ea] bg-white px-4 py-2 text-sm text-[#10233f]">
      {children}
    </span>
  )
}

function ValueCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="rounded-[24px] border border-[#dbe6ed] bg-white p-6">
      <h3 className="font-serif text-xl font-semibold text-[#10233f]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#53677e]">
        {text}
      </p>
    </div>
  )
}

export default function ManufacturingSalesCustomerAnalyticsPage() {
  return (
    <main className="min-h-screen bg-white text-[#10233f]">

      {/* BACK */}
      <div className="mx-auto max-w-6xl px-6 pt-8 md:px-10">
        <Link
          href="/#work"
          className="text-sm font-medium text-[#1769aa] transition hover:opacity-70"
        >
          ← Back to Selected Work
        </Link>
      </div>

      {/* HERO */}
      <section className="bg-[#f3f9fc]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* HERO TEXT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
              Commercial Client Project · UK Manufacturing
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl font-semibold leading-[1.02] text-[#10233f] md:text-6xl">
              Manufacturing Sales &amp; Customer Analytics
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#53677e]">
              A multi-phase analytics project that evolved from Excel-based
              management reporting into SQL-driven sales, customer and
              operational analytics in Zoho Analytics.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div>
            <div className="overflow-hidden rounded-[26px] border border-[#d8e3eb] bg-white shadow-sm">
              <Image
                src="/manufacturing-client-dashboard.png"
                alt="Analytics dashboard deployed in a manufacturing environment"
                width={1400}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#6b7f96]">
  <span className="font-semibold text-[#53677e]">
    Portfolio recreation:
  </span>{" "}
  Visuals use synthetic/anonymised demonstration data while reflecting the
  analytical structure and business questions developed during the commercial
  project.
</p>
          </div>
        </div>
      </section>

 

      {/* BUSINESS PROBLEM */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
              Business Problem
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold">
              From fragmented reporting to connected analytics
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#53677e]">
              The company had valuable operational and commercial data across
              several sources, but Excel remained the primary reporting
              platform. Existing reporting consisted largely of disconnected
              tables and charts, making it difficult for management to identify
              trends, monitor performance consistently or turn the available
              data into actionable insight.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
              Solution
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold">
              An analytics environment that evolved with the business
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#53677e]">
              Working directly with management and business teams, the project
              developed through several phases — from improving core management
              reporting to SQL-based analytics covering sales, enquiry
              conversion, customer behaviour, operational performance and
              commercial forecasting.
            </p>
          </div>

        </div>
      </section>

      {/* PROJECT DEVELOPMENT */}
      <section className="bg-[#f5fafc]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
            Project Development
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold">
            From Reporting Foundation to Customer Intelligence
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53677e]">
            The work expanded as new business questions emerged, creating a
            progressive analytics roadmap rather than a single standalone
            dashboard.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="rounded-[22px] border border-[#d8e5ec] bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1267a6] text-sm font-semibold text-white">
                    {phase.number}
                  </span>

                  <span className="text-xs font-semibold text-[#168ca4]">
                    {phase.period}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {phase.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#53677e]">
                  {phase.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DASHBOARD EXAMPLES */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
          Analysis
        </p>

        <h2 className="mt-4 font-serif text-4xl font-semibold">
          Dashboard &amp; Analytics Examples
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#53677e]">
          Reporting developed from management KPI monitoring into deeper
          customer and commercial analytics designed to support operational
          decisions and sales activity.
        </p>

        <div className="mt-10 space-y-14">

          {/* DASHBOARD 1 */}
          
          <div>
            <h3 className="font-serif text-3xl font-semibold text-[#10233f]">

  Management KPI Reporting

</h3>

<p className="mt-3 text-lg leading-8 text-[#5d7189]">

  Sales, absenteeism, quality and delivery performance brought together

  into a consistent monthly management view.

</p>

<p className="mt-3 text-xs italic text-[#7b8da1]">

  * Portfolio demonstration using synthetic/anonymised data.

</p>

            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#d8e3eb] bg-white p-4">
              <Image
                src="/manufacturing-monthly-kpi.png"
                alt="Monthly management KPI dashboard"
                width={1800}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* DASHBOARD 2 */}
          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Customer Lifecycle &amp; Retention
            </h3>

            <p className="mt-2 text-[#53677e]">
              Customer acquisition, lifecycle, loyalty and purchasing frequency
              analysed to understand retention and commercial behaviour.
            </p>
<p className="mt-3 text-xs italic text-[#7b8da1]">

  * Portfolio demonstration using synthetic/anonymised data.

</p>
            <div className="mt-6 overflow-hidden rounded-[24px] border border-[#d8e3eb] bg-white p-4">
              <Image
                src="/manufacturing-customer-lifecycle.png"
                alt="Customer lifecycle and retention analytics dashboard"
                width={1800}
                height={1000}
                className="h-auto w-full"
              />
            </div>
          </div>

         

        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="bg-[#eef8fc]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
            Business Value
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold">
            Reporting designed to support ongoing management decisions
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <ValueCard
              title="Consistent Performance Monitoring"
              text="Management reporting provided a clearer and more consistent view of operational and sales performance over time."
            />

            <ValueCard
              title="Conversion Visibility"
              text="Enquiry and funnel analysis made it possible to monitor how conversion performance changed over time."
            />

            <ValueCard
              title="Customer Prioritisation"
              text="Lifecycle, purchasing frequency and recency analysis helped identify valuable, inactive and potentially at-risk customers."
            />

            <ValueCard
              title="Commercial Insight"
              text="Sales and customer analytics supported pipeline analysis, forecasting and more targeted follow-up activity."
            />
          </div>

        </div>
      </section>

      {/* MY ROLE */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#29aeb5]">
              My Role
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold">
              End-to-End Analytics Development
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#53677e]">
              I worked directly with management and business users throughout the project, translating evolving reporting requirements into data models, SQL analysis, KPIs, dashboards and automated workflows. My work covered data preparation, metric definition, SQL development, customer segmentation, dashboard development and iterative stakeholder feedback.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold">
              Tools &amp; Skills
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

        </div>

        {/* BACK */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/#work"
            className="text-sm font-medium text-[#1769aa] transition hover:opacity-70"
          >
            ← Back to Selected Work
          </Link>
        </div>

      </section>

    </main>
  )
}
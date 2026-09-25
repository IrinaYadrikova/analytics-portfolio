
import Link from "next/link"

const technologies = [
  "Power BI",
  "Power Automate",
  "DAX",
  "Power Query",
  "Slack",
  "Workflow Automation",
  "KPI Design",
  "Sales Analytics",
  "Data Modelling",
]

export default function AutomatedKPIAlertsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f4f9fc] text-[#142640]">

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
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-10 md:py-16">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">
              Sales Automation · Commercial Project
            </p>

            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.08] md:text-6xl">
              Sales Performance & Automated KPI Alerts
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              An automated performance monitoring solution that evaluates
              individual sales KPIs and sends personalised notifications
              alongside a management summary.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Power BI", "Power Automate", "Slack", "DAX"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* REAL DASHBOARD */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <img

  src="/sales performance.png"

  alt="Power BI sales performance dashboard using synthetic demonstration data"

  className="h-auto w-full rounded-2xl object-contain"

/>
            </div>

            <p className="mt-3 px-2 text-xs leading-5 text-slate-500">
              Portfolio version — names and figures use synthetic
              demonstration data and do not represent real employees
              or client results.
            </p>
          </div>

        </div>
      </section>

      {/* BUSINESS CONTEXT */}
      <section className="border-y border-slate-200 bg-[#eaf6fb]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_1.15fr] md:px-10 md:py-16">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">
              Business Context
            </p>

            <h2 className="mt-4 max-w-lg font-serif text-3xl font-semibold leading-tight md:text-4xl">
              From Manual Reporting to Automated Insights
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Sales managers relied on manually updated reporting to monitor
              performance. This made it harder to identify performance gaps
              early and required repeated manual communication with individual
              salespeople.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* KEY CHALLENGES */}

  <div className="rounded-[24px] border border-[#d9e3ea] bg-white p-6">

    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f1] text-[#ef5361]">

        !

      </div>

      <h3 className="text-xl font-semibold text-[#10233f]">

        Key Challenges

      </h3>

    </div>

  <div className="space-y-3 text-[#4c617c]">

  <p>• Manual performance monitoring</p>

  <p>• Limited individual visibility</p>

  <p>• Delayed performance feedback</p>

  <p>• Performance gaps identified late</p>

</div>

  </div>

  {/* PROJECT GOAL */}

  <div className="rounded-[24px] border border-[#d9e3ea] bg-white p-6">

    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ecfbf4] text-[#00a875]">

        ✓

      </div>

      <h3 className="text-xl font-semibold text-[#10233f]">

        Project Goal

      </h3>

    </div>

   <div className="space-y-3 text-[#4c617c]">

  <p>• Automate KPI monitoring</p>

  <p>• Track individual and team performance</p>

  <p>• Compare results against targets</p>

  <p>• Send personalised Slack notifications</p>

  <p>• Automate management reporting</p>

</div>

  </div>

</div>
        </div>
      </section>

     {/* SOLUTION */}
<section className="bg-[#eef7fb]">
  
  <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-14">
    
    
    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      
      {/* LEFT — SOLUTION DESCRIPTION */}
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#18a9b8]">
          Solution
        </p>

        <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-[1.12] text-[#10233f] md:text-4xl">
          Integrated Power BI + Power Automate + Slack Solution
        </h2>

        <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-[#4c617c]">
          <p>
            I built an end-to-end solution combining a Power BI semantic
            model with Power Automate to monitor individual sales KPIs and
            automatically deliver targeted messages through Slack.
          </p>

          <p>
            The workflow runs on a schedule, retrieves performance data,
            evaluates each salesperson against the relevant target and
            applies conditional logic to determine the appropriate
            notification.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Power BI",
            "Power Automate",
            "DAX",
            "Slack",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#d5e0e8] bg-white px-4 py-2 text-sm font-medium text-[#243b59]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — REAL POWER AUTOMATE WORKFLOW */}
      <div>
       <div className="flex justify-center">

  <div className="w-full max-w-[390px] overflow-hidden rounded-[24px] border border-[#d9e3ea] bg-white p-3 shadow-sm">

    <img

      src="/power-automate-workflow.png"

      alt="Power Automate workflow for automated sales KPI monitoring"

      className="h-auto w-full object-contain"

    />

  </div>

</div>

        <p className="mx-auto mt-3 max-w-[430px] text-center text-sm italic leading-6 text-[#70829a]">

  Power Automate workflow showing scheduled KPI evaluation,

  conditional messaging and management summary automation.

</p>
      </div>

    </div>
  </div>
</section>

   {/* AUTOMATION */}

<section className="bg-white">

  <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-14">

    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">

      Automation

    </p>

    <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">

      From Reporting to Automated Action

    </h2>

    <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">

      Instead of requiring managers to repeatedly review the dashboard,

      Power Automate queries the Power BI semantic model on a scheduled

      basis and processes each salesperson individually.

    </p>

    {/* WORKFLOW */}

    <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f8fbfd] p-5 md:p-7">

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.2fr_auto_1.2fr] md:items-center">

        {/* STEP 1 */}

        <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm">

          <p className="text-xs font-semibold uppercase tracking-wider text-[#29aeb5]">

            01

          </p>

          <h3 className="mt-2 font-semibold text-slate-900">

            Power BI

          </h3>

          <p className="mt-1 text-sm text-slate-500">

            Performance data

          </p>

        </div>

        <div className="hidden text-xl text-[#29aeb5] md:block">

          →

        </div>

        {/* STEP 2 */}

        <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm">

          <p className="text-xs font-semibold uppercase tracking-wider text-[#29aeb5]">

            02

          </p>

          <h3 className="mt-2 font-semibold text-slate-900">

            KPI Evaluation

          </h3>

          <p className="mt-1 text-sm text-slate-500">

            Compare against target

          </p>

        </div>

        <div className="hidden text-xl text-[#29aeb5] md:block">

          →

        </div>

        {/* STEP 3 */}

        <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm">

          <p className="text-xs font-semibold uppercase tracking-wider text-[#29aeb5]">

            03

          </p>

          <h3 className="mt-2 font-semibold text-slate-900">

            Conditional Logic

          </h3>

          <p className="mt-1 text-sm text-slate-500">

            Determine status

          </p>

        </div>

        <div className="hidden text-xl text-[#29aeb5] md:block">

          →

        </div>

        {/* STEP 4 */}

        <div className="rounded-2xl bg-white px-4 py-5 shadow-sm">

          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#29aeb5]">

            04 · Slack

          </p>

          <div className="mt-3 space-y-2">

            <div className="rounded-xl bg-[#f8fbfd] px-3 py-2">

              <p className="text-sm font-semibold text-emerald-600">

                ✓ On Target

              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">

                Achievement message

              </p>

            </div>

            <div className="rounded-xl bg-[#f8fbfd] px-3 py-2">

              <p className="text-sm font-semibold text-orange-600">

                △ Behind Target

              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">

                Performance alert

              </p>

            </div>

          </div>

        </div>

        <div className="hidden text-xl text-[#29aeb5] md:block">

          →

        </div>

        {/* STEP 5 */}

        <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm">

          <p className="text-xs font-semibold uppercase tracking-wider text-[#29aeb5]">

            05

          </p>

          <h3 className="mt-2 font-semibold text-slate-900">

            Management Summary

          </h3>

          <p className="mt-1 text-sm leading-5 text-slate-500">

            Team-level performance summary posted to Slack

          </p>

        </div>

      </div>

    </div>

    

  </div>

</section>

      {/* BUSINESS VALUE */}

<section className="bg-[#eaf6fb]">

  <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">

    <div className="max-w-3xl">

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">

        Business Value

      </p>

      <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">

        From Dashboard to Action

      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">

        The project extended Power BI beyond reporting. Performance data

        was actively used to trigger communication and support management

        follow-up, turning the dashboard into part of an operational workflow.

      </p>

    </div>

    <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

      <ValueCard

        title="Less Manual Monitoring"

        text="Scheduled KPI checks replaced repeated manual review of individual performance."

      />

      <ValueCard

        title="Earlier Performance Visibility"

        text="Performance against targets was evaluated consistently, helping surface gaps sooner."

      />

      <ValueCard

        title="Personalised Communication"

        text="Each salesperson received information relevant to their own performance rather than a generic team update."

      />

      <ValueCard

        title="Management Visibility"

        text="A separate automated summary gave management a consolidated view of team performance."

      />

    </div>

  </div>

</section>

      {/* MY ROLE */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-16">

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#29aeb5]">
            My Role
          </p>

          <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">
            End-to-End Analytics & Automation Development
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            I designed and developed the complete solution, including the
            Power BI reporting logic, DAX measures, semantic-model queries,
            Power Automate workflow, conditional KPI evaluation,
            personalised Slack messages and management summary.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
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

function ValueCard({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="font-serif text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  )
}
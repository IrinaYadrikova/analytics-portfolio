import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"

const technologies = [
  "Microsoft Fabric",
  "Data Pipelines",
  "Azure SQL",
  "HubSpot API",
  "PySpark",
  "Delta Lake",
  "Power BI",
  "DAX",
]

const capabilities = [
  {
    number: "01",
    title: "Multi-source Data Ingestion",
    description:
      "Integrated Azure SQL ERP data, HubSpot CRM data and CSV datasets into Microsoft Fabric using orchestrated pipelines and notebooks.",
  },
  {
    number: "02",
    title: "Incremental Data Processing",
    description:
      "Implemented watermark-based incremental ingestion for ERP orders and order lines, reducing unnecessary reprocessing.",
  },
  {
    number: "03",
    title: "Medallion Architecture",
    description:
      "Organised data into Bronze, Silver and Gold layers, with six Gold Delta tables supporting analytical reporting.",
  },
  {
    number: "04",
    title: "Validation & Data Quality",
    description:
      "Implemented ERP validation and Gold table checks to detect processing issues and protect downstream data quality.",
  },
  {
    number: "05",
    title: "Execution Logging",
    description:
      "Developed run-level logging using unique Run IDs to capture execution status, duration, failures and validation results.",
  },
  {
    number: "06",
    title: "Power BI Monitoring",
    description:
      "Built a Power BI monitoring dashboard showing pipeline reliability, historical success rates, execution status and Gold table validation.",
  },
]

export default function MicrosoftFabricAnalyticsPipelinePage() {
  return (
    <main className="bg-[#f3f9fc] text-[#19324d]">

      {/* BACK LINK */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#159eb5]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Selected Work
        </Link>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
              Data Engineering · Business Intelligence · Portfolio Project
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
              Microsoft Fabric
              <br />
              Pipeline Monitoring
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              An end-to-end Microsoft Fabric analytics solution integrating ERP,
              CRM and business target data through automated ingestion,
              transformation and validation, with operational monitoring
              in Power BI.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[#d5e4ed] bg-white px-4 py-2 text-sm text-[#294763]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <a
                href="https://github.com/IrinaYadrikova/microsoft-fabric-pipeline-monitoring"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1769aa] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12568c]"
              >
                View GitHub Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#d5e4ed] bg-white p-4 shadow-sm">
            <Image
              src="/architecture.png"
              alt="Microsoft Fabric pipeline monitoring architecture"
              width={1500}
              height={1000}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="border-y border-[#dce8ef] bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
              Business Problem
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight">
              Reliable data pipelines need more than successful ingestion
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Business data often comes from multiple systems, including ERP,
              CRM and operational files. Bringing these sources together
              creates challenges around data consistency, processing failures
              and reporting reliability.
            </p>

            <p>
              This project explores how to build an analytics pipeline that
              not only processes data but also validates results, records
              execution history and makes failures visible to reporting teams.
            </p>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
          Technical Implementation
        </p>

        <h2 className="mb-5 font-serif text-4xl font-semibold">
          From ingestion to monitored analytics
        </h2>

        <p className="mb-12 max-w-3xl text-lg leading-8 text-slate-600">
          The solution combines automated ingestion, data transformation,
          validation, execution logging and Power BI reporting into one
          connected analytics workflow.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-[#dce8ef] bg-white p-7"
            >
              <span className="text-3xl font-semibold text-[#c8d9e7]">
                {item.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PIPELINE VISUAL */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
            Microsoft Fabric
          </p>

          <h2 className="font-serif text-4xl font-semibold">
            Orchestrated data processing
          </h2>

          <p className="mt-5 mb-10 max-w-3xl text-lg leading-8 text-slate-600">
            The pipeline coordinates incremental ERP ingestion, CRM and
            target-data processing, notebook transformations and Gold-layer
            generation. Success and failure paths capture execution outcomes.
          </p>

          <div className="overflow-hidden rounded-2xl border border-[#dce8ef] bg-[#f8fbfd] p-4 shadow-sm">
            <Image
              src="/pipeline.png"
              alt="Microsoft Fabric pipeline orchestration workflow"
              width={1800}
              height={850}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* MONITORING */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
          Power BI Monitoring
        </p>

        <h2 className="font-serif text-4xl font-semibold">
          Making pipeline reliability visible
        </h2>

        <p className="mt-5 mb-12 max-w-3xl text-lg leading-8 text-slate-600">
          The monitoring dashboard combines pipeline execution logs and Gold
          validation results to provide visibility into processing status,
          historical reliability, execution duration and failures.
        </p>

        <div className="space-y-14">

          <div>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold">
                Successful pipeline execution
              </h3>
              <p className="mt-2 text-slate-600">
                A successful run with completed processing and passing
                Gold-table validations.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#dce8ef] bg-white p-3 shadow-sm">
              <Image
                src="/dashboard-success.png"
                alt="Power BI monitoring dashboard showing a successful pipeline run"
                width={1800}
                height={1000}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>

          <div>
            <div className="mb-5">
              <h3 className="text-2xl font-semibold">
                Failed pipeline execution
              </h3>
              <p className="mt-2 text-slate-600">
                A failed ERP processing run, showing the recorded error and
                Gold-layer processing marked as not run.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#dce8ef] bg-white p-3 shadow-sm">
              <Image
                src="/dashboard-failure.png"
                alt="Power BI monitoring dashboard showing a failed pipeline run"
                width={1800}
                height={1000}
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE */}
      <section className="border-y border-[#dce8ef] bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#159eb5]">
            Project Outcomes
          </p>

          <h2 className="mb-10 font-serif text-4xl font-semibold">
            A more observable and reliable analytics pipeline
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Integrated ERP, CRM and target data into a structured Fabric workflow.",
              "Created six analytical Gold Delta tables using a dimensional model.",
              "Implemented validation and failure-handling logic to protect downstream processing.",
              "Built operational reporting to monitor execution status, errors and historical pipeline reliability.",
            ].map((outcome) => (
              <div
                key={outcome}
                className="flex gap-4 rounded-2xl border border-[#dce8ef] bg-[#f8fbfd] p-6"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#159eb5]" />
                <p className="leading-7 text-slate-700">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#159eb5]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Selected Work
        </Link>
      </div>

    </main>
  )
}

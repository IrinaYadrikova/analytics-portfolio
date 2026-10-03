export default function MicrosoftFabricAnalyticsPipelinePage() {

  return (

    <main>

      {/* FABRIC DATA ENGINEERING PROJECT */}

      <section className="border-y border-border/70 bg-[#f3f9fc]">
  <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
    <div className="overflow-hidden rounded-[28px] border border-[#d7e4ec] bg-white">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT — PROJECT DESCRIPTION */}
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#25a9b4]">
            Data Engineering · Portfolio Project · In Development
          </p>

          <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1.08] text-[#10233f] md:text-5xl">
            Microsoft Fabric Analytics Pipeline
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#5d7087]">
            Building an end-to-end analytics architecture that brings together
            ERP, CRM and target data through automated ingestion,
            transformation and validation into a reporting-ready analytical
            model.
          </p>

          {/* TECHNOLOGY TAGS */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Microsoft Fabric",
              "Data Pipelines",
              "Dataflow Gen2",
              "Lakehouse",
              "SQL",
              "Power BI",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#d4e1e9] bg-[#f7fbfd] px-4 py-2 text-sm text-[#233b58]"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* STATUS */}
          <div className="mt-7 border-l-2 border-[#25a9b4] pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#25a9b4]">
              Currently in development
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-[#6b7f96]">
              Ingestion and transformation workflows are being implemented.
              The analytical modelling, validation and reporting layers will
              be developed as the project progresses.
            </p>
          </div>
        </div>

        {/* RIGHT — ARCHITECTURE */}
        <div className="bg-[#f8fbfd] p-8 md:p-10 lg:p-12">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#10233f]">
                Target Analytics Architecture
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                End-to-end Fabric workflow
              </p>
            </div>

            <span className="rounded-full bg-[#e8f3f8] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#60778e]">
              In Progress
            </span>
          </div>

          {/* SOURCES */}
          <div className="flex gap-3">
            <div className="min-w-0 flex-1 rounded-xl border border-[#d8e4ec] bg-white p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-[#7890a5]">
                CRM
              </p>
              <p className="mt-1 font-semibold text-[#10233f]">
                HubSpot API
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                Companies · Deals
              </p>
            </div>

            <div className="min-w-0 flex-1 rounded-xl border border-[#d8e4ec] bg-white p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-[#7890a5]">
                ERP
              </p>
              <p className="mt-1 font-semibold text-[#10233f]">
                Azure SQL
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                Orders · Order Lines
              </p>
            </div>

            <div className="min-w-0 flex-1 rounded-xl border border-[#d8e4ec] bg-white p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-[#7890a5]">
                Targets
              </p>
              <p className="mt-1 font-semibold text-[#10233f]">
                Excel / File
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                Business Targets
              </p>
            </div>
          </div>

          {/* CONNECTOR */}
          <div className="flex h-7 justify-center">
            <div className="w-px bg-[#b9cfdd]" />
          </div>

          {/* PIPELINE */}
          <div className="rounded-xl border border-[#a9ccdf] bg-[#edf7fb] px-5 py-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#258fa3]">
              Microsoft Fabric
            </p>
            <p className="mt-1 font-semibold text-[#10233f]">
              Data Pipeline &amp; Incremental Ingestion
            </p>
          </div>

          <div className="flex h-6 justify-center">
            <div className="w-px bg-[#b9cfdd]" />
          </div>

          {/* MEDALLION */}

<div className="flex items-center gap-2">

  <div className="min-w-0 flex-1 rounded-xl border border-[#d8e4ec] bg-white p-4 text-center">

    <p className="font-serif text-lg font-semibold text-[#10233f]">

      Bronze

    </p>

    <p className="mt-1 text-xs text-[#7890a5]">

      Raw &amp; historical

    </p>

  </div>

  <span className="shrink-0 text-[#7f9aae]">→</span>

  <div className="min-w-0 flex-1 rounded-xl border border-[#d8e4ec] bg-white p-4 text-center">

    <p className="font-serif text-lg font-semibold text-[#10233f]">

      Silver

    </p>

    <p className="mt-1 text-xs text-[#7890a5]">

      Cleaned &amp; standardised

    </p>

  </div>

  <span className="shrink-0 text-[#7f9aae]">→</span>

  <div className="min-w-0 flex-1 rounded-xl border border-dashed border-[#b8cad6] bg-white/60 p-4 text-center">

    <p className="font-serif text-lg font-semibold text-[#10233f]">

      Gold

    </p>

    <p className="mt-1 text-xs text-[#7890a5]">

      Business-ready

    </p>

  </div>

</div>

          <div className="flex h-6 justify-center">
            <div className="w-px bg-[#b9cfdd]" />
          </div>

          {/* VALIDATION */}
          <div className="rounded-xl border border-[#d8e4ec] bg-white px-5 py-3 text-center">
            <p className="text-sm font-semibold text-[#10233f]">
              Validation &amp; Data Quality
            </p>
          </div>

          <div className="flex h-6 justify-center">
            <div className="w-px bg-[#b9cfdd]" />
          </div>

          {/* OUTPUT */}
       <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-3">
            <div className="rounded-xl border border-dashed border-[#b8cad6] bg-white/60 p-4 text-center">
              <p className="font-semibold text-[#10233f]">
                Semantic Model
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                Measures &amp; KPIs
              </p>
            </div>

            <div className="rounded-xl border border-dashed border-[#b8cad6] bg-white/60 p-4 text-center">
              <p className="font-semibold text-[#10233f]">
                Power BI
              </p>
              <p className="mt-1 text-xs text-[#7890a5]">
                Analytics &amp; reporting
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-[#7890a5]">
            Dashed elements represent planned layers as the project continues.
          </p>

        </div>
      </div>
    </div>
  </div>
    </section>

    </main>

  )

}
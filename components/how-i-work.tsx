"use client"

import { useEffect, useRef, useState } from "react"
import { SectionHeading } from "@/components/section-heading"

export function HowIWork() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stageClass = (delay: number) =>
    `transition-all duration-700 ease-out ${
      started
        ? "translate-y-0 opacity-100"
        : "translate-y-5 opacity-0"
    }`

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-24 border-t border-border/70 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="How I Work"
          title="A structured approach to real business problems"
        />

        {/* DESKTOP */}
        <div className="mt-14 hidden overflow-hidden rounded-3xl border border-border bg-white shadow-sm lg:block">
          <div className="grid grid-cols-7">

            {/* 01 UNDERSTAND */}
            <Stage
              number="01"
              title="Understand"
              detail="Business question"
              started={started}
              delay={0}
              arrow
            >
              <div
                className={stageClass(250)}
                style={{ transitionDelay: "250ms" }}
              >
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    Business Question
                  </p>

                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-foreground">
                    Why is conversion falling?
                  </p>
                </div>
              </div>
            </Stage>

            {/* 02 ASSESS */}
            <Stage
              number="02"
              title="Assess"
              detail="Data & quality"
              started={started}
              delay={300}
              arrow
            >
              <div className="flex flex-col items-start gap-2">
                {["CRM", "Sales", "Targets"].map((item, index) => (
                  <div
                    key={item}
                    className={`
                      rounded-xl border border-border bg-white
                      px-3 py-3 text-sm font-semibold text-foreground
                      transition-all duration-500 ease-out
                      ${
                        started
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-3 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${650 + index * 280}ms`,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Stage>

            {/* 03 MODEL */}
            <Stage
              number="03"
              title="Model"
              detail="Structure & KPIs"
              started={started}
              delay={700}
              arrow
            >
              <div
                className={`
                  rounded-2xl border border-cyan-300 bg-cyan-50/70
                  p-4 text-center
                  transition-all duration-700 ease-out
                  ${
                    started
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0"
                  }
                `}
                style={{ transitionDelay: "1150ms" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                  Analytical Model
                </p>

                <p className="mt-2 font-display text-lg font-semibold text-foreground">
                  Clean & Connected
                </p>
              </div>
            </Stage>

            {/* 04 VALIDATE */}
            <Stage
              number="04"
              title="Validate"
              detail="Logic & definitions"
              started={started}
              delay={1100}
              arrow
            >
              <div className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Revenue reconciled",
                  "KPI definitions",
                  "Data quality",
                ].map((item, index) => (
                  <p
                    key={item}
                    className={`
                      transition-all duration-500 ease-out
                      ${
                        started
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-3 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${1550 + index * 180}ms`,
                    }}
                  >
                    <span className="mr-1 text-cyan-600">✓</span>
                    {item}
                  </p>
                ))}
              </div>
            </Stage>

            {/* 05 BUILD */}
            <Stage
              number="05"
              title="Build"
              detail="Analytics & automation"
              started={started}
              delay={1600}
              arrow
            >
              <div
                className={`
                  rounded-2xl border border-border bg-white p-4
                  transition-opacity duration-500
                  ${started ? "opacity-100" : "opacity-0"}
                `}
                style={{ transitionDelay: "2000ms" }}
              >
                <div className="mb-5 grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((item) => (
                    <div
                      key={item}
                      className={`
                        h-8 rounded bg-secondary
                        transition-all duration-500
                        ${
                          started
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0"
                        }
                      `}
                      style={{
                        transitionDelay: `${2100 + item * 120}ms`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex h-12 items-end justify-center gap-2">
                  {[
                    "h-4",
                    "h-7",
                    "h-11",
                    "h-6",
                  ].map((height, index) => (
                    <div
                      key={index}
                      className={`
                        w-7 origin-bottom rounded-md
                        ${height}
                        ${
                          index === 2
                            ? "bg-cyan-500"
                            : index === 1
                            ? "bg-cyan-400"
                            : "bg-cyan-300"
                        }
                        transition-transform duration-700 ease-out
                        ${
                          started
                            ? "scale-y-100"
                            : "scale-y-0"
                        }
                      `}
                      style={{
                        transitionDelay: `${2300 + index * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </Stage>

            {/* 06 DELIVER */}
            <Stage
              number="06"
              title="Deliver"
              detail="Insights & adoption"
              started={started}
              delay={2200}
              arrow
            >
              <div
                className={`
                  rounded-2xl border border-border bg-white p-4
                  transition-all duration-700 ease-out
                  ${
                    started
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }
                `}
                style={{ transitionDelay: "2850ms" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Insight
                </p>

                <p className="mt-2 font-display text-base font-semibold leading-tight text-foreground">

  Conversion

</p>

<p className="mt-1 font-display text-xl font-semibold text-foreground">

  ↓ 8%

</p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Enterprise segment
                </p>
              </div>
            </Stage>

            {/* 07 SUPPORT */}
            <Stage
              number="07"
              title="Support"
              detail="Improve & evolve"
              started={started}
              delay={2800}
            >
              <div
                className={`
                  rounded-2xl border border-cyan-300 bg-cyan-50/70
                  p-4 text-center
                  transition-all duration-700 ease-out
                  ${
                    started
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0"
                  }
                `}
                style={{ transitionDelay: "3400ms" }}
              >
                <p className="font-semibold leading-snug text-foreground">
                  <span
                    className={`
                      mr-1 inline-block
                      transition-transform duration-700
                      ${started ? "rotate-[360deg]" : "rotate-0"}
                    `}
                    style={{ transitionDelay: "3550ms" }}
                  >
                    ↻
                  </span>

                  Monitor · Improve · Evolve
                </p>
              </div>
            </Stage>
          </div>

          {/* BUSINESS QUESTION → BUSINESS DECISION */}
          <div className="flex items-center gap-6 border-t border-border bg-secondary/30 px-6 py-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Business Question
            </span>

            <div className="relative h-px flex-1 overflow-hidden bg-border">
              <div
                className={`
                  absolute inset-y-0 left-0 bg-primary/40
                  transition-all duration-[2700ms] ease-out
                  ${started ? "w-full" : "w-0"}
                `}
              />
            </div>

            <span
              className={`
                text-xs font-semibold uppercase tracking-[0.2em]
                text-accent transition-opacity duration-700
                ${started ? "opacity-100" : "opacity-0"}
              `}
              style={{ transitionDelay: "3500ms" }}
            >
              Business Decision
            </span>
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-12 space-y-4 lg:hidden">
          {[
            ["01", "Understand", "Business question"],
            ["02", "Assess", "Data & quality"],
            ["03", "Model", "Structure & KPIs"],
            ["04", "Validate", "Logic & definitions"],
            ["05", "Build", "Analytics & automation"],
            ["06", "Deliver", "Insights & adoption"],
            ["07", "Support", "Improve & evolve"],
          ].map(([number, title, detail], index) => (
            <div
              key={number}
              className={`
                rounded-2xl border border-border bg-white p-5
                transition-all duration-700
                ${
                  started
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex gap-4">
                <span className="font-display text-3xl font-semibold text-primary/25">
                  {number}
                </span>

                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stage({
  number,
  title,
  detail,
  started,
  delay,
  arrow = false,
  children,
}: {
  number: string
  title: string
  detail: string
  started: boolean
  delay: number
  arrow?: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={`
        relative min-h-[360px] border-r border-border p-5
        last:border-r-0
        transition-all duration-700 ease-out
        ${
          started
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {arrow && (
        <div
          className={`
            absolute right-[-16px] top-[92px] z-10
            flex h-8 w-8 items-center justify-center
            rounded-full border border-border bg-white
            text-lg text-muted-foreground shadow-sm
            transition-all duration-500
            ${started ? "opacity-100" : "opacity-0"}
          `}
          style={{ transitionDelay: `${delay + 300}ms` }}
        >
          →
        </div>
      )}

      <div className="font-display text-4xl font-semibold text-primary/20">
        {number}
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-muted-foreground">
        {detail}
      </p>

      <div className="mt-6">{children}</div>
    </div>
  )
}
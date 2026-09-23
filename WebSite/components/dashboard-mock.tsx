const kpis = [
  { label: "Revenue", value: "£1.24M" },
  { label: "Active Customers", value: "4,892" },
  { label: "Churn Rate", value: "3.6%" },
  { label: "Average LTV", value: "£284" },
]

const segments = [
  { label: "Enterprise", value: 42, color: "oklch(0.48 0.13 252)" },
  { label: "Mid-market", value: 31, color: "oklch(0.62 0.12 210)" },
  { label: "SMB", value: 27, color: "oklch(0.7 0.1 196)" },
]

function Donut() {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90" role="img" aria-label="Customer segment breakdown donut chart">
      <circle cx="60" cy="60" r={radius} fill="none" stroke="oklch(0.912 0.015 244)" strokeWidth="14" />
      {segments.map((seg) => {
        const length = (seg.value / 100) * circumference
        const dash = `${length} ${circumference - length}`
        const el = (
          <circle
            key={seg.label}
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth="14"
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            strokeLinecap="butt"
          />
        )
        offset += length
        return el
      })}
    </svg>
  )
}

export function DashboardMock() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent blur-2xl"
      />
      <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_30px_70px_-30px_oklch(0.48_0.13_252/0.45)]">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm font-semibold text-foreground">Customer & Revenue Intelligence</p>
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Preview
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-xl border border-border/70 bg-background/60 p-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{kpi.label}</p>
              <p className="mt-1.5 font-display text-2xl font-semibold text-foreground">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Revenue trend */}
          <div className="rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="text-xs font-medium text-foreground">Revenue Trend</p>
            <svg viewBox="0 0 200 90" className="mt-3 h-20 w-full" role="img" aria-label="Revenue trend line chart">
              <defs>
                <linearGradient id="revArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.48 0.13 252)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="oklch(0.48 0.13 252)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,70 L28,60 L56,66 L84,44 L112,50 L140,30 L168,26 L200,12"
                fill="none"
                stroke="oklch(0.48 0.13 252)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0,70 L28,60 L56,66 L84,44 L112,50 L140,30 L168,26 L200,12 L200,90 L0,90 Z"
                fill="url(#revArea)"
              />
            </svg>
          </div>

          {/* Customer segment donut */}
          <div className="rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="text-xs font-medium text-foreground">Customer Segment</p>
            <div className="mt-2 flex items-center gap-3">
              <Donut />
              <ul className="space-y-1.5">
                {segments.map((seg) => (
                  <li key={seg.label} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
                    {seg.label}
                    <span className="font-medium text-foreground">{seg.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/5 via-accent/5 to-transparent blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_24px_60px_-24px_oklch(0.48_0.13_252/0.35)]">
        {/* Top KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Revenue", value: "Performance", accent: "text-primary" },
            { label: "Pipeline", value: "Coverage", accent: "text-accent" },
            { label: "Customers", value: "Retention", accent: "text-primary" },
          ].map((k) => (
            <div key={k.label} className="rounded-lg border border-border/70 bg-background/60 p-3">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{k.label}</p>
              <p className={`mt-1 font-display text-lg font-semibold ${k.accent}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Line chart */}
        <div className="mt-5 rounded-lg border border-border/70 bg-background/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-foreground">Business performance</p>
          </div>
          <svg viewBox="0 0 320 110" className="h-24 w-full" role="img" aria-label="Upward trending performance line chart">
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.48 0.13 252)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="oklch(0.48 0.13 252)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[22, 52, 82].map((y) => (
              <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="oklch(0.912 0.015 244)" strokeWidth="1" />
            ))}
            <path
              d="M0,88 L45,74 L90,80 L135,58 L180,62 L225,40 L270,30 L320,14"
              fill="none"
              stroke="oklch(0.48 0.13 252)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,88 L45,74 L90,80 L135,58 L180,62 L225,40 L270,30 L320,14 L320,110 L0,110 Z"
              fill="url(#heroArea)"
            />
            {[
              [225, 40],
              [270, 30],
              [320, 14],
            ].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="3" fill="oklch(1 0 0)" stroke="oklch(0.48 0.13 252)" strokeWidth="2" />
            ))}
          </svg>
        </div>

        {/* Bars */}
        <div className="mt-4 flex items-end gap-2">
          {[38, 60, 46, 72, 54, 84, 66].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent/30 to-accent/70"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

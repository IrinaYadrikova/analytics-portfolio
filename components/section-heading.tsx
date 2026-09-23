type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

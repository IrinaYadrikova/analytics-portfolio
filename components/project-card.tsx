import { ArrowRight, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/site-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_oklch(0.26_0.05_258/0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_-24px_oklch(0.48_0.13_252/0.4)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{project.type}</p>
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      {project.workflow && (
        <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border border-border/70 bg-background/60 p-3">
          {project.workflow.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{step}</span>
              {i < project.workflow!.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {(project.technology ?? []).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-1 items-end">
        <a
          href={`/work/${project.slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          {project.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  )
}

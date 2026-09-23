import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/site-data"

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border/70 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading title="Selected Work" subtitle="Commercial Analytics & BI Projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

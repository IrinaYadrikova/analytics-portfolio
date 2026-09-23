import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { projects } from "@/lib/site-data"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{project.type}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/30 p-8 text-center">
          <p className="font-display text-lg font-semibold text-foreground">Full case study coming soon</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            A detailed write-up of the approach, data model, KPIs and business outcomes for this project is being
            prepared.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

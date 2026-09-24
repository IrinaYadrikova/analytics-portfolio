import { socialLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">Irina Yadrikova</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Data Analyst | Business Intelligence &amp; ESG Analytics
          </p>
          <p className="mt-1 text-sm text-muted-foreground">London, UK</p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex items-center gap-5">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Irina Yadrikova</p>
        </div>
      </div>
    </footer>
  )
}

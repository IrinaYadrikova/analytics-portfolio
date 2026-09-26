export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

// Placeholder links — replace with real destinations later.
export const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  email: "#contact",
}

export type Project = {
  slug: string
  title: string
  type: string
  technology: string[]
  description: string
  cta: string
  workflow?: string[]
}

export const projects: Project[] = [
  {
    slug: "international-sales-kpi-reporting",
    title: "International Sales Performance & KPI Reporting",
    type: "INTERNATIONAL SALES · COMMERCIAL PROJECT",
    technology: ["Power BI", "DAX", "Data Modelling", "Sales Analytics"],
    description:
      "A centralised sales reporting solution designed to standardise KPIs and provide consistent management visibility across international teams, products and markets.",
    cta: "View Case Study",
  },
  {
    slug: "manufacturing-sales-customer-analytics",
    title: "Manufacturing Sales & Customer Analytics",
    type: "UK MANUFACTURING · COMMERCIAL PROJECT",
    technology: ["SQL", "Zoho Analytics", "Excel", "Customer Analytics"],
    description:
      "A multi-phase analytics transformation covering management reporting, enquiry conversion, customer behaviour, sales performance and commercial forecasting.",
    cta: "View Case Study",
  },
  {
    slug: "automated-kpi-alerts",
    title: "Sales Performance & Automated KPI Alerts",
    type: "SALES AUTOMATION · COMMERCIAL PROJECT",
    
    description:
      "An automated performance monitoring solution that evaluates individual sales KPIs and sends personalised notifications alongside a management summary.",
    cta: "View Case Study",
    workflow: ["Power BI", "Power Automate", "KPI Logic", "Slack"],
  },
  {
    slug: "manufacturing-esg",
    title: "ENVIRONMENTAL & ESG · PORTFOLIO PROJECT",
    type: "Specialist Analytics",
    technology: ["Power BI", "SQL", "Environmental Data", "ESG"],
    description:
      "Analytics solutions exploring emissions, sustainability performance, operational efficiency and environmental KPIs.",
    cta: "View Case Study",
  },
]

export const processSteps = [
  { number: "01", title: "Understand", detail: "Business question" },
  { number: "02", title: "Assess", detail: "Data & quality" },
  { number: "03", title: "Model", detail: "Structure & KPIs" },
  { number: "04", title: "Validate", detail: "Logic & definitions" },
  { number: "05", title: "Build", detail: "Analytics & automation" },
  { number: "06", title: "Deliver", detail: "Insights & adoption" },
  { number: "07", title: "Support", detail: "Improve & evolve" },
  ]

export const skillGroups = [
  {
    title: "Business Intelligence",
    skills: ["Power BI", "DAX", "Power Query", "Excel"],
  },
  {
    title: "Data & Modelling",
    skills: ["SQL", "PostgreSQL", "Data Modelling", "Microsoft Fabric"],
  },
  {
    title: "Automation",
    skills: ["Power Automate", "Workflow Automation"],
  },
  {
    title: "Specialist Analytics",
    skills: ["Sales Analytics", "Customer Analytics", "Environmental & ESG Analytics"],
  },
]

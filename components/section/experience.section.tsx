type Experience = {
  period: string
  role: string
  company: string
  href: string
  summary: string
}

const experiences: Experience[] = [
  {
    period: "2025",
    role: "Frontend Developer",
    company: "HaupCar",
    href: "https://www.haupcar.com/",
    summary:
      "Built responsive long-term rental flows and connected the new experience to the company’s REST API.",
  },
  {
    period: "2016 — 2024",
    role: "Full-stack Developer",
    company: "C2 Media",
    href: "https://www.linkedin.com/company/c2media-asia/about/",
    summary:
      "Led development of ContentGrow, a workflow platform that connects freelance talent with global content teams.",
  },
]

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        Experience
      </h2>

      <div className="space-y-7 text-sm leading-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="grid gap-2.5 sm:grid-cols-[7.5rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-xs tabular-nums text-muted-foreground">
              {experience.period}
            </p>
            <div>
              <p className="text-foreground">
                {experience.role}
                <span aria-hidden="true" className="text-muted-foreground"> — </span>
                <a
                  href={experience.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-1 font-medium underline decoration-border underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:decoration-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  <span>{experience.company}</span>
                  <ExternalArrow />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </p>
              <p className="mt-0.5 text-muted-foreground">{experience.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExternalArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="size-3 shrink-0 translate-y-px transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M3.25 2.25h6.5v6.5M9.25 2.75 2.5 9.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

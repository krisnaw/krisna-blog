"use client"

import {Award, ExternalLink} from "lucide-react"
import {motion} from "framer-motion"

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const fadeUp = {
  hidden: {opacity: 0, y: 10, filter: "blur(4px)"},
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {duration: 0.45, ease: EASE_OUT},
  },
}

const certifications = [
  {
    title: "Boot.dev Certification",
    issuer: "Boot.dev",
    date: "2026",
    description:
      "Backend development training focused on practical programming, computer science fundamentals, and production-minded web services.",
    href: "https://www.boot.dev/",
  },
]

export function CertificationsSection() {
  return (
    <motion.section variants={fadeUp}>
      <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Certifications
      </h2>

      <div className="border-t border-border">
        {certifications.map((cert) => (
          <a
            key={cert.title}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-5 border-b border-border py-4 transition-opacity duration-150 hover:opacity-80 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
          >
            <div className="flex min-w-0 gap-3">
              <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground">
                <Award className="size-4" aria-hidden="true" strokeWidth={1.8}/>
              </span>
              <div className="min-w-0 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-medium text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
                    {cert.title}
                  </h3>
                  <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {cert.issuer}
                  </span>
                </div>
                <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 pt-0.5 font-mono text-[11px] text-muted-foreground">
              <span>{cert.date}</span>
              <ExternalLink className="size-3" aria-hidden="true" strokeWidth={1.8}/>
              <span className="sr-only"> (opens in new tab)</span>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  )
}

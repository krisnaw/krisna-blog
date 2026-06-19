"use client"

import {motion} from "framer-motion"
import {CalendarDays} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React, {ReactNode} from "react"
import {SiteLayout} from "@/components/site-layout"
import {CertificationsSection} from "@/components/section/certifications.section"
import {DirectionalTransition} from "@/components/view-transition"
import {contactLinks, projects, stack} from "./data"

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const stagger = {
  hidden: {},
  show: {transition: {staggerChildren: 0.07, delayChildren: 0.05}},
}

const fadeUp = {
  hidden: {opacity: 0, y: 10, filter: "blur(4px)"},
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {duration: 0.45, ease: EASE_OUT},
  },
}

export default function HomePage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
        <main className=" px-6 pb-24 pt-12 flex-1">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-16">

            <motion.section variants={fadeUp}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="group relative shrink-0 size-16 rounded-lg overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Krisna Wijaya"
                      fill
                      className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10"/>
                  </div>
                  <div>
                    <h1
                      className="text-[2.5rem] leading-none tracking-[-0.02em] text-foreground"
                      style={{fontFamily: "var(--font-caveat), cursive"}}
                    >
                      Krisna Wijaya
                    </h1>
                    <p className="mt-2 font-mono text-xs text-muted-foreground tracking-wide">
                      Software Developer · Bali, Indonesia
                    </p>
                  </div>
                </div>

                <div
                  className="flex shrink-0 items-center gap-1.5 pt-1 font-mono text-[10px] tracking-wide text-emerald-600">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-600"/>
                  Open for work
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href="https://cal.com/krisnawijaya/30min?user=krisnawijaya&overlayCalendar=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-primary bg-primary px-3 font-mono text-xs text-primary-foreground transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                >
                  <CalendarDays className="size-3.5 text-primary-foreground/70" aria-hidden="true" strokeWidth={1.8}/>
                  Book a call
                </a>
                <a
                  href="https://t.me/krisnaw2020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-transparent bg-[#0084b8]/20 px-3 font-mono text-xs text-[#0084b8] transition-all duration-150 hover:bg-[#0084b8]/25 active:scale-[0.98]"
                >
                  <Image src="/telegram.svg" alt="" width={14} height={14} aria-hidden="true"/>
                  Quick message...
                </a>
              </div>

              <div className="mt-6 space-y-3 text-sm leading-[1.8] text-foreground/75">
                <p>
                  <strong>I'm Krisna, product-minded software developer</strong>, meaning I don't just write code, I
                  have a deep interest in the product itself.
                  I enjoy understanding how people use software and being involved in the discussions that shape what
                  gets built.
                </p>

                <p>
                  I'm currently open to new opportunities as a Front-End or Full-Stack Developer.
                  While I am currently based in Bali, Indonesia, I am highly open to remote work or relocating to other
                  countries for the right role.
                </p>
              </div>
            </motion.section>

            <motion.section variants={stagger}>
              <motion.div variants={fadeUp}>
                <SectionLabel>Projects</SectionLabel>
              </motion.div>
              <div className="border-t border-border">
                {projects.map((project) => (
                  <ProjectRow key={project.id} project={project}/>
                ))}
              </div>
            </motion.section>

            <CertificationsSection />

            <motion.section variants={fadeUp}>
              <SectionLabel>Stack</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.3, delay: 0.4 + i * 0.04, ease: EASE_OUT}}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp}>
              <SectionLabel>Contact</SectionLabel>
              <div className="flex flex-wrap gap-5">
                {contactLinks.map((link) => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>
            </motion.section>

          </motion.div>
        </main>
      </DirectionalTransition>
    </SiteLayout>
  )
}

// --- Components -----------------------------------------------------------

function SectionLabel({children}: { children: ReactNode }) {
  return (
    <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  )
}

function ProjectRow({project}: { project: (typeof projects)[number] }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={project.available ? project.href : "#"}
        transitionTypes={project.available ? ["nav-forward"] : undefined}
        aria-disabled={!project.available}
        className="group flex items-start justify-between gap-6 border-b border-border py-4 transition-opacity duration-150 active:scale-[0.99]"
        style={{
          opacity: project.available ? 1 : 0.35,
          pointerEvents: project.available ? "auto" : "none",
        }}
      >
        <div className="min-w-0 space-y-2">
          <div className="flex items-center gap-2.5">
            <span
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
              {project.name}
            </span>
            {!project.available && (
              <span
                className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                soon
              </span>
            )}
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <span className="shrink-0 pt-0.5 font-mono text-[11px] text-muted-foreground">
          {project.year}
        </span>
      </Link>
    </motion.div>
  )
}

function ContactLink({label, href}: { label: string; href: string }) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-block font-mono text-sm text-link underline underline-offset-4 decoration-link/30 transition-colors duration-150 hover:decoration-link active:scale-[0.97]"
    >
      {label}
    </a>
  )
}

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { SiteLayout } from "@/components/site-layout"
import { DirectionalTransition } from "@/components/view-transition"
import { contactLinks, projects, stack } from "./data"

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: EASE_OUT },
  },
}

export default function HomePage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
      <main className="mx-auto max-w-135 px-6 pb-24 pt-12 flex-1">
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
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
                </div>
                <div>
                  <h1
                    className="text-[2.5rem] leading-none tracking-[-0.02em] text-[#0d0d0c]"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    Krisna Wijaya
                  </h1>
                  <p className="mt-2 font-mono text-xs text-[#767676] tracking-wide">
                    Software Developer · Bali, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-1.5 pt-1 font-mono text-[10px] tracking-wide text-emerald-600">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" />
                available
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm leading-[1.8] text-[#555]">
              <p>
                I create software that's intuitive and effective — I don't just write code,
                I care deeply about the product and how people interact with what we build.
              </p>
              <p>
                Currently open to Front-End or Full-Stack roles.
                Based in Bali, open to remote or relocation.
              </p>
            </div>
          </motion.section>

          <motion.section variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionLabel>Projects</SectionLabel>
            </motion.div>
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
              {projects.map((project) => (
                <ProjectRow key={project.id} project={project} />
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeUp}>
            <SectionLabel>Stack</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.04, ease: EASE_OUT }}
                  className="rounded-full border px-3 py-1 font-mono text-[11px] text-[#767676]"
                  style={{ borderColor: "rgba(0,0,0,0.12)" }}
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#767676]">
      {children}
    </h2>
  )
}

function ProjectRow({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={project.available ? project.href : "#"}
        transitionTypes={project.available ? ["nav-forward"] : undefined}
        aria-disabled={!project.available}
        className="group flex items-start justify-between gap-6 py-4 transition-opacity duration-150 active:scale-[0.99]"
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          opacity: project.available ? 1 : 0.35,
          pointerEvents: project.available ? "auto" : "none",
        }}
      >
        <div className="min-w-0 space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-medium text-[#767676] transition-colors duration-150 group-hover:text-[#0d0d0c]">
              {project.name}
            </span>
            {!project.available && (
              <span
                className="rounded px-1.5 py-0.5 font-mono text-[10px] text-[#767676]"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                soon
              </span>
            )}
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-[#767676]">
            {project.description}
          </p>
        </div>
        <span className="shrink-0 pt-0.5 font-mono text-[11px] text-[#767676]">
          {project.year}
        </span>
      </Link>
    </motion.div>
  )
}

function ContactLink({ label, href }: { label: string; href: string }) {
  const isExternal = href.startsWith("http")
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-block font-mono text-sm text-[#767676] underline underline-offset-4 transition-colors duration-150 hover:text-[#0d0d0c] active:scale-[0.97]"
      style={{ textDecorationColor: "rgba(0,0,0,0.15)" }}
    >
      {label}
    </a>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
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

const meta = [
  { label: "Role", value: "Full-Stack Developer" },
  { label: "Year", value: "2026" },
  { label: "Type", value: "Web App" },
  { label: "Status", value: "Live" },
]

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "MySQL",
]

export default function BarongMelaliPage() {
  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased">

      {/* Nav */}
      <nav className="mx-auto max-w-135 px-6 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-[#767676] transition-colors duration-150 hover:text-[#0d0d0c]"
        >
          ← back
        </Link>
      </nav>

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-135 px-6 pb-24"
      >

        {/* ── Hero ── */}
        <motion.section variants={fadeUp} className="pt-8 pb-12">
          <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#767676]">
            2026
          </p>
          <h1
            className="text-[3rem] leading-[1.05] tracking-[-0.02em] text-[#0d0d0c]"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Barong Melali
          </h1>
          <p className="mt-4 text-base text-[#767676] leading-relaxed">
            Event management and registration platform for Bali's largest road cycling community.
          </p>
        </motion.section>

        {/* ── Metadata ── */}
        <motion.section
          variants={fadeUp}
          className="grid grid-cols-2 gap-px border-y"
          style={{ borderColor: "rgba(0,0,0,0.08)" }}
        >
          {meta.map(({ label, value }) => (
            <div
              key={label}
              className="py-4 pr-6"
              style={{ borderBottom: "none" }}
            >
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#767676]">
                {label}
              </p>
              <p className="text-sm text-[#0d0d0c]">{value}</p>
            </div>
          ))}
        </motion.section>

        {/* ── Overview ── */}
        <motion.section variants={fadeUp} className="pt-12 pb-10 space-y-4 text-sm leading-[1.9] text-[#444]">
          <p>
            Barong Melali is a cycling club based in Bali with hundreds of active members. Before this platform,
            event registration was handled manually through WhatsApp messages and spreadsheets — a process that
            was slow, error-prone, and hard to scale.
          </p>
          <p>
            I designed and built a web app that handles the full lifecycle of a cycling event: creation,
            registration, participant management, and check-in. Club admins get a dashboard to manage
            events and registrations, while members get a clean interface to browse and sign up.
          </p>
        </motion.section>

        {/* ── Image placeholder ── */}
        <motion.div
          variants={fadeUp}
          className="w-full aspect-video rounded-lg bg-[#f5f5f3] border"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
        />

        {/* ── Problem / Solution ── */}
        <motion.section variants={stagger} className="pt-12 space-y-10">
          {[
            {
              heading: "Problem",
              body: "Registration was a mess — organisers had no reliable way to cap attendance, prevent duplicates, or communicate updates. Members had no single place to discover upcoming rides.",
            },
            {
              heading: "Solution",
              body: "A centralised platform where admins publish events with capacity limits, and members register with a single click. Automated confirmation emails and a live attendee list remove the manual back-and-forth entirely.",
            },
          ].map(({ heading, body }) => (
            <motion.div key={heading} variants={fadeUp}>
              <h2
                className="mb-3 text-xl tracking-[-0.01em] text-[#0d0d0c]"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                {heading}
              </h2>
              <p className="text-sm leading-[1.9] text-[#444]">{body}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* ── Second image placeholder ── */}
        <motion.div
          variants={fadeUp}
          className="mt-12 w-full aspect-video rounded-lg bg-[#f5f5f3] border"
          style={{ borderColor: "rgba(0,0,0,0.06)" }}
        />

        {/* ── Tech stack ── */}
        <motion.section variants={fadeUp} className="pt-12">
          <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#767676]">
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-3 py-1 font-mono text-[11px] text-[#767676]"
                style={{ borderColor: "rgba(0,0,0,0.12)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

      </motion.main>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: "rgba(0,0,0,0.08)" }}
      >
        <div className="mx-auto max-w-135 px-6 py-6 flex items-center justify-between">
          <p className="font-mono text-[10px] text-[#767676] tracking-wide">
            © 2026 Krisna Wijaya
          </p>
          <Link
            href="/"
            className="font-mono text-[10px] text-[#767676] tracking-wide transition-colors hover:text-[#0d0d0c]"
          >
            ← back to home
          </Link>
        </div>
      </footer>
    </div>
  )
}

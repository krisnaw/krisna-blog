"use client"

import {motion} from "framer-motion"
import {type ElementType, type FC, type ReactNode, type RefObject} from "react"
import {DirectionalTransition} from "@/components/view-transition"
import Image from "next/image";
import {BlossomCarousel as _BlossomCarousel} from "@blossom-carousel/react"

type CarouselHandle = { prev(): void; next(): void; element: HTMLElement | null }

type CarouselProps = {
  children?: ReactNode | ReactNode[]
  as?: ElementType
  repeat?: boolean
  load?: "always" | "conditional"
  className?: string
  ref?: RefObject<CarouselHandle | null>
}
const BlossomCarousel = _BlossomCarousel as unknown as FC<CarouselProps>

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

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Laravel", "MySQL", "DOKU"]

const sections = [
  {
    heading: "Problem",
    body: "Registration was a mess. Organisers had no reliable way to cap attendance, prevent duplicates, or communicate updates. Members had no single place to discover upcoming rides.",
  },
  {
    heading: "Solution",
    body: "A centralised platform where admins publish events with capacity limits, and members register with a single click. Automated confirmation emails and a live attendee list remove the manual back-and-forth entirely.",
  },
  {
    heading: "Feature",
    body: "Admins can create events with seat limits, manage registrations, and check in participants on the day. Members pay securely through DOKU — Indonesia's leading payment gateway — supporting virtual accounts, credit cards, and popular e-wallets. Once payment is confirmed, members receive an automated confirmation with their registration details.",
  },
]

export default function BarongMelaliPage() {
  return (
    <>
      <DirectionalTransition>
        <motion.main
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-2xl px-6 pb-24 flex-1"
        >
          <motion.section variants={fadeUp} className="pt-8 pb-4">
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

          <motion.section
            variants={fadeUp}
            className="grid grid-cols-2 gap-px border-y"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            {meta.map(({ label, value }) => (
              <div key={label} className="py-4 pr-6">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#767676]">
                  {label}
                </p>
                <p className="text-sm text-[#0d0d0c]">{value}</p>
              </div>
            ))}
          </motion.section>

          <motion.section variants={fadeUp} className="pt-6 pb-10 space-y-4 text-sm leading-[1.9] text-[#444]">
            <p>
              Barong Melali is a cycling club based in Bali with hundreds of active members. Before this platform,
              event registration was handled manually through WhatsApp messages and spreadsheets, a process that
              was slow, error-prone, and hard to scale.
            </p>
            <p>
              I designed and built a web app that handles the full lifecycle of a cycling event: creation,
              registration, participant management, and check-in. Club admins get a dashboard to manage
              events and registrations, while members get a clean interface to browse and sign up.
            </p>
          </motion.section>

          <motion.div
            variants={fadeUp} className="p-4 outline outline-gray-200 rounded-xl flex items-center bg-gray-100">
            <Image  className="aspect-video rounded-lg"
                    src="/barong-melali-landing.jpg" width={1000} height={450} alt="barong-melali" />
          </motion.div>

          <motion.div variants={stagger} className="pt-12 space-y-10">
            {sections.map((section) => (
              <Section key={section.heading} heading={section.heading}>
                <p className="text-sm leading-[1.9] text-[#444]">{section.body}</p>
              </Section>
            ))}
          </motion.div>


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
      </DirectionalTransition>
    </>
  )
}

// --- Components -----------------------------------------------------------

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <motion.div variants={fadeUp}>
      <h2
        className="mb-3 text-xl tracking-[-0.01em] text-[#0d0d0c]"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        {heading}
      </h2>
      {children}
    </motion.div>
  )
}

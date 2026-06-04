"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BouncingBall } from "@/components/animations/bouncing-ball"
import { ButtonSendLink } from "@/components/animations/button-send-link/button-send-link"
import ButtonToPopover from "@/components/animations/button-to-pop/button-to-popover"
import HeighAnimation from "@/components/animations/heigh-animation/height-anima"

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

const animations = [
  {
    id: "bouncing-ball",
    title: "Bouncing Ball",
    description: "CSS animation with staggered distance and duration per ball. Play/pause control.",
    category: "CSS",
    component: <BouncingBall />,
  },
  {
    id: "button-send-link",
    title: "Button State",
    description: "AnimatePresence with popLayout mode — text slides out down, new state slides in from top.",
    category: "Button",
    component: <ButtonSendLink />,
  },
  {
    id: "button-to-popover",
    title: "Button to Popover",
    description: "Shared layoutId morphs a button into a feedback form. Escape or ⌘↵ to submit.",
    category: "Layout",
    component: <ButtonToPopover />,
  },
  {
    id: "height-animation",
    title: "Height Animation",
    description: "Animated height using useMeasure — content drives the container size smoothly.",
    category: "Layout",
    component: <HeighAnimation />,
  },
]

const categoryColor: Record<string, string> = {
  CSS: "bg-violet-50 text-violet-600 border-violet-200",
  Button: "bg-blue-50 text-blue-600 border-blue-200",
  Layout: "bg-amber-50 text-amber-600 border-amber-200",
}

export default function AnimationPage() {
  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased">

      {/* Nav */}
      <nav className="mx-auto w-full max-w-135 px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#767676]"
          >
            kw
          </Link>
          <ul className="flex items-center gap-5">
            {[
              { label: "notes", href: "/notes" },
              { label: "animation", href: "/animation" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676] transition-colors hover:text-[#333]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <motion.header
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-135 px-6 pt-8 pb-12"
      >
        <motion.div variants={fadeUp}>
          <h1
            className="text-[2.25rem] leading-none tracking-[-0.02em] text-[#0d0d0c]"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Animation
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#767676] max-w-sm">
            A collection of UI animation explorations — interactions, transitions, and motion patterns.
          </p>
        </motion.div>
      </motion.header>

      {/* Grid */}
      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-135 px-6 pb-24"
      >
        <div className="flex flex-col gap-4">
          {animations.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-xl border bg-white"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              {/* Preview */}
              <div className="flex min-h-56 items-center justify-center bg-[#f7f7f5] p-6">
                {item.component}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1.5 border-t p-4" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[10px] tracking-wide ${categoryColor[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#0d0d0c]">{item.title}</p>
                <p className="text-xs leading-relaxed text-[#767676]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-135 px-6 py-6">
          <p className="font-mono text-[10px] text-[#767676] tracking-wide">
            © 2026 Krisna Wijaya
          </p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { SiteLayout } from "@/components/site-layout"
import { DirectionalTransition } from "@/components/view-transition"
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

const categoryStyles = {
  CSS: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-300",
  Button: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-300",
  Layout: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
} as const

type Category = keyof typeof categoryStyles

const animations: { id: string; title: string; description: string; category: Category; component: ReactNode }[] = [
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

export default function AnimationPage() {
  return (
    <SiteLayout>
      <DirectionalTransition>
      <motion.header
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12"
      >
        <motion.div variants={fadeUp}>
          <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
            Exploration
          </p>
          <h1
            className="text-[2.25rem] leading-none tracking-[-0.02em] text-foreground"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            Animation
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-sm">
            A collection of UI animation explorations — interactions, transitions, and motion patterns.
          </p>
        </motion.div>
      </motion.header>

      <motion.main
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-6 pb-24 flex-1"
      >
        <div className="flex flex-col gap-4">
          {animations.map((item) => (
            <AnimationCard key={item.id}>
              <AnimationCard.Preview>{item.component}</AnimationCard.Preview>
              <AnimationCard.Info
                category={item.category}
                title={item.title}
                description={item.description}
              />
            </AnimationCard>
          ))}
        </div>
      </motion.main>
      </DirectionalTransition>
    </SiteLayout>
  )
}

// --- Components -----------------------------------------------------------

function AnimationCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
    >
      {children}
    </motion.div>
  )
}

AnimationCard.Preview = function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-56 items-center justify-center bg-muted/60 p-6">
      {children}
    </div>
  )
}

AnimationCard.Info = function Info({
  category,
  title,
  description,
}: {
  category: Category
  title: string
  description: string
}) {
  return (
    <div
      className="flex flex-col gap-1.5 border-t border-border p-4"
    >
      <span
        className={`self-start rounded border px-2 py-0.5 font-mono text-[10px] tracking-wide ${categoryStyles[category]}`}
      >
        {category}
      </span>
      <p className="text-sm font-medium text-foreground">{title}</p>
      <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

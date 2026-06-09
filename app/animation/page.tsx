"use client"

import {AnimatePresence, motion} from "framer-motion"
import {Bell, Check, CreditCard, Play, Sparkles} from "lucide-react"
import type {ReactNode} from "react"
import {useState} from "react"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"

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
  Feedback: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300",
} as const

type Category = keyof typeof categoryStyles

const animations: { id: string; title: string; description: string; category: Category; component: ReactNode }[] = [
  {
    id: "state-swap-card",
    title: "State Swap Card",
    description: "Segmented controls drive icon, copy, and surface changes with blur and spring motion.",
    category: "Feedback",
    component: <StateSwapCard />,
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
          className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10 "
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <motion.div variants={fadeUp} className="max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <Sparkles className="size-3" aria-hidden="true" strokeWidth={1.8} />
                Exploration
              </div>
              <h1
                className="text-[2.75rem] leading-none tracking-[-0.02em] text-foreground text-balance"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                Animation Studies
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
                Small interaction patterns with focused motion, clean state changes, and tactile controls.
              </p>
            </motion.div>
            
          </div>
        </motion.header>

        <motion.main
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl px-6 pb-24 flex-1"
        >
          <div className="grid gap-4 sm:grid-cols-2">
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
      className="group flex min-h-92 flex-col overflow-hidden rounded-xl bg-card shadow-[0_1px_1px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.05),inset_0_0_0_1px_rgb(0_0_0/0.06)] transition-[box-shadow] duration-200 hover:shadow-[0_1px_1px_rgb(0_0_0/0.05),0_14px_34px_rgb(0_0_0/0.08),inset_0_0_0_1px_rgb(0_0_0/0.08)] dark:shadow-[0_1px_1px_rgb(0_0_0/0.25),0_12px_28px_rgb(0_0_0/0.2),inset_0_0_0_1px_rgb(255_255_255/0.08)] dark:hover:shadow-[0_1px_1px_rgb(0_0_0/0.3),0_18px_40px_rgb(0_0_0/0.28),inset_0_0_0_1px_rgb(255_255_255/0.12)]"
    >
      {children}
    </motion.div>
  )
}

AnimationCard.Preview = function Preview({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-56 flex-1 items-center justify-center bg-muted/45 p-5 shadow-[inset_0_-1px_0_rgb(0_0_0/0.05)] dark:shadow-[inset_0_-1px_0_rgb(255_255_255/0.07)]">
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
    <div className="flex min-h-32 items-start justify-between gap-4 p-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-pretty">{description}</p>
      </div>
      <button
        type="button"
        aria-label={`Run ${title}`}
        className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-[background-color,color,scale] duration-150 hover:bg-primary hover:text-primary-foreground active:scale-[0.96]"
      >
        <Play className="size-3.5 translate-x-px" aria-hidden="true" fill="currentColor" strokeWidth={1.8} />
      </button>
    </div>
  )
}

const stateSwapItems = [
  {
    id: "badge",
    label: "Badge",
    title: "Transaction processing",
    description: "Waiting for network confirmation.",
    icon: Bell,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-300",
    status: "Pending",
  },
  {
    id: "check",
    label: "Check",
    title: "Payment confirmed",
    description: "Receipt sent to your inbox.",
    icon: Check,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300",
    status: "Done",
  },
  {
    id: "card",
    label: "Card",
    title: "Card verified",
    description: "Ready for the next purchase.",
    icon: CreditCard,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-300",
    status: "Ready",
  },
] as const

type StateSwapId = (typeof stateSwapItems)[number]["id"]

function StateSwapCard() {
  const [activeId, setActiveId] = useState<StateSwapId>("badge")
  const active = stateSwapItems.find((item) => item.id === activeId) ?? stateSwapItems[0]
  const Icon = active.icon

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <div className="grid grid-cols-3 rounded-full bg-background p-1 shadow-[inset_0_0_0_1px_rgb(0_0_0/0.06)] dark:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]">
        {stateSwapItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            className="relative min-h-10 rounded-full px-3 font-mono text-[10px] text-muted-foreground transition-[color,scale] duration-150 active:scale-[0.96]"
          >
            {activeId === item.id && (
              <motion.span
                layoutId="state-swap-active-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                transition={{type: "spring", duration: 0.35, bounce: 0}}
              />
            )}
            <span className={`relative z-10 ${activeId === item.id ? "text-primary-foreground" : ""}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="relative overflow-hidden rounded-2xl bg-background p-3 shadow-[0_1px_1px_rgb(0_0_0/0.04),0_10px_28px_rgb(0_0_0/0.08),inset_0_0_0_1px_rgb(0_0_0/0.06)] dark:shadow-[0_1px_1px_rgb(0_0_0/0.25),0_14px_30px_rgb(0_0_0/0.24),inset_0_0_0_1px_rgb(255_255_255/0.08)]"
      >
        <div className="flex items-center gap-3">
          <motion.div
            layout
            className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${active.color}`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={active.id}
                initial={{opacity: 0, scale: 0.25, filter: "blur(4px)"}}
                animate={{opacity: 1, scale: 1, filter: "blur(0px)"}}
                exit={{opacity: 0, scale: 0.25, filter: "blur(4px)"}}
                transition={{type: "spring", duration: 0.3, bounce: 0}}
              >
                <Icon className="size-4" aria-hidden="true" strokeWidth={2} />
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <div className="min-w-0 flex-1">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={active.id}
                initial={{opacity: 0, y: -8, filter: "blur(4px)"}}
                animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                exit={{opacity: 0, y: 8, filter: "blur(4px)"}}
                transition={{type: "spring", duration: 0.3, bounce: 0}}
              >
                <div className="mb-1 flex items-center gap-2">
                  <p className="truncate text-sm font-medium text-foreground">
                    {active.title}
                  </p>
                  <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
                    {active.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={`${active.id}-${item}`}
              initial={{opacity: 0, scaleX: 0.4}}
              animate={{opacity: 1, scaleX: 1}}
              transition={{duration: 0.2, delay: item * 0.04, ease: EASE_OUT}}
              className="h-1 origin-left rounded-full bg-muted"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

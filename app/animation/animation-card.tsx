"use client"

import {motion} from "framer-motion"
import {Play} from "lucide-react"
import type {ReactNode} from "react"
import {fadeUp} from "./motion-variants"

export const categoryStyles = {
  CSS: "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-300",
  Button: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-300",
  Layout: "bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-amber-300",
  Feedback: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300",
} as const

export type Category = keyof typeof categoryStyles

export function AnimationCard({children}: {children: ReactNode}) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex min-h-92 flex-col overflow-hidden rounded-xl bg-card shadow-[0_1px_1px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.05),inset_0_0_0_1px_rgb(0_0_0/0.06)] transition-[box-shadow] duration-200 hover:shadow-[0_1px_1px_rgb(0_0_0/0.05),0_14px_34px_rgb(0_0_0/0.08),inset_0_0_0_1px_rgb(0_0_0/0.08)] dark:shadow-[0_1px_1px_rgb(0_0_0/0.25),0_12px_28px_rgb(0_0_0/0.2),inset_0_0_0_1px_rgb(255_255_255/0.08)] dark:hover:shadow-[0_1px_1px_rgb(0_0_0/0.3),0_18px_40px_rgb(0_0_0/0.28),inset_0_0_0_1px_rgb(255_255_255/0.12)]"
    >
      {children}
    </motion.div>
  )
}

AnimationCard.Preview = function Preview({children}: {children: ReactNode}) {
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
        <span className={`mb-2 inline-flex rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] ${categoryStyles[category]}`}>
          {category}
        </span>
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

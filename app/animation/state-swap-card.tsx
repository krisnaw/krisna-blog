"use client"

import {AnimatePresence, motion} from "framer-motion"
import {Bell, Check, CreditCard} from "lucide-react"
import {useState} from "react"
import {EASE_OUT} from "./motion-variants"

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

export function StateSwapCard() {
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
                initial={{opacity: 0, scale: 0.94, filter: "blur(2px)"}}
                animate={{opacity: 1, scale: 1, filter: "blur(0px)"}}
                exit={{opacity: 0, scale: 0.94, filter: "blur(2px)"}}
                transition={{type: "spring", duration: 0.2, bounce: 0}}
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

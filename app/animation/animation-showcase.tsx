"use client"

import {motion} from "framer-motion"
import type {ReactNode} from "react"
import {AnimationCard, type Category} from "./animation-card"
import {stagger} from "./motion-variants"
import {StateSwapCard} from "./state-swap-card"

const animations: {
  id: string
  title: string
  description: string
  category: Category
  component: ReactNode
}[] = [
  {
    id: "state-swap-card",
    title: "State Swap Card",
    description: "Segmented controls drive icon, copy, and surface changes with blur and spring motion.",
    category: "Feedback",
    component: <StateSwapCard />,
  },

]

export function AnimationShowcase() {
  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-3xl flex-1 px-6 pb-24"
    >
      <div className="grid gap-4 sm:grid-cols-1">
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
  )
}

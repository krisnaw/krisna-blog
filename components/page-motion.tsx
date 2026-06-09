"use client"

import {motion} from "framer-motion"
import type {ReactNode} from "react"

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

type MotionProps = {
  children: ReactNode
  className?: string
}

export function MotionHeader({children, className}: MotionProps) {
  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className={className}
    >
      <motion.div variants={fadeUp}>
        {children}
      </motion.div>
    </motion.header>
  )
}

export function MotionMain({children, className}: MotionProps) {
  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.main>
  )
}

export function MotionSection({
  children,
  className,
  ariaLabelledBy,
  ...props
}: MotionProps & {ariaLabelledBy?: string}) {
  return (
    <motion.section variants={fadeUp} className={className} aria-labelledby={ariaLabelledBy} {...props}>
      {children}
    </motion.section>
  )
}

export function MotionListItem({
  children,
  className,
}: MotionProps) {
  return (
    <motion.li variants={fadeUp} className={className}>
      {children}
    </motion.li>
  )
}

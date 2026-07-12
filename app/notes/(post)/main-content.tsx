"use client"

import {motion} from "framer-motion"

export function MainContent({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(8px)", filter: "blur(2px)" }}
      animate={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      className="prose prose-sm max-w-none
        prose-headings:font-normal prose-headings:tracking-[-0.02em]
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
        prose-headings:text-foreground
        prose-p:text-foreground/75 prose-p:leading-[1.9]
        prose-a:text-foreground prose-a:underline-offset-4
        prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.8em] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
        prose-img:rounded-lg
        prose-hr:border-border"
    >
      {children}
    </motion.div>
  )
}

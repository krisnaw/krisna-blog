"use client"

import {motion} from "framer-motion"

export function MainContent({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      className="prose prose-sm max-w-none
        prose-headings:font-normal prose-headings:tracking-[-0.02em]
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
        prose-p:text-[#444] prose-p:leading-[1.9]
        prose-a:text-[#0d0d0c] prose-a:underline-offset-4
        prose-code:text-[#0d0d0c] prose-code:bg-[#f5f5f3] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.8em] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-[#f5f5f3] prose-pre:border prose-pre:border-black/8 prose-pre:rounded-lg
        prose-img:rounded-lg
        prose-hr:border-black/8"
    >
      {children}
    </motion.div>
  )
}

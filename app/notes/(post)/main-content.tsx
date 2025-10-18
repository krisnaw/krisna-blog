"use client"

import {motion} from "framer-motion"

export function MainContent({children}: { children: React.ReactNode}) {
  return (
    <motion.div
      animate={{opacity: 1, x: 0, }}
      initial={{opacity: 0, x: 100}}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="prose prose-sm max-w-none">
      {children}
    </motion.div>
  )
}
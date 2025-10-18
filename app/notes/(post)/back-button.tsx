"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/notes"
      aria-label="Back to notes"
      className="inline-flex"
      id="back-button"
    >
      <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        transition={{type: "spring", stiffness: 100, damping: 20}}
        whileTap={{scale: 0.95}}
        className="
            inset-shadow-sm inset-shadow-slate-500/50 bg-white/30
            backdrop-blur-sm transition-transform duration-150
            flex h-11 w-11 items-center justify-center rounded-full
            outline-1 outline-gray-200 shadow-md
          "
      >
        <ArrowLeft/>
      </motion.div>
    </Link>
  )
}

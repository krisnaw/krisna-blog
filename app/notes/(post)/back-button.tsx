"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function BackButton() {
  return (
    <motion.button
      id="back-button"
      animate={{opacity: 1,}}
      initial={{opacity: 0,}}
      transition={{type: "spring", stiffness: 100, damping: 20}}

      className="
            inset-shadow-sm inset-shadow-slate-500/50
             bg-white/30 backdrop-blur-sm
        transition-transform duration-150 transform active:scale-95
        p-1 rounded-full outline-1 outline-gray-200 shadow-md">
      <Link href="/notes">
        <ArrowLeft/>
      </Link>
    </motion.button>
  )
}
"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function BackButton() {
  return (
    <motion.button

      animate={{opacity: 1,  }}
      initial={{opacity: 0, }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}

      className="
        transition-transform duration-150 transform active:scale-95
        p-1 rounded-full outline-1 outline-gray-200 bg-white shadow-md">
      <Link href="/notes">
        <ArrowLeft />
      </Link>
    </motion.button>
  )
}
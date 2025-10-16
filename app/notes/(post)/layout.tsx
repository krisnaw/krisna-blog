"use client"
import {motion} from "framer-motion";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {Suspense} from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative`}>
      <div className="fixed left-1/5 hidden sm:block">
        <button className="
        transition-transform duration-150 transform active:scale-95
        p-1 rounded-full outline-1 outline-gray-200 bg-white shadow-md">
          <Link href="/notes">
            <ArrowLeft />
          </Link>
        </button>

      </div>
      <Suspense fallback={<div>Loading</div>}>
        <motion.div
          animate={{opacity: 1, y: 0, }}
          initial={{opacity: 0, y: 100}}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="prose prose-sm max-w-none">
          {children}
        </motion.div>
      </Suspense>
    </div>
  )
}
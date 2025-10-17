"use client"
import {motion} from "framer-motion";
import {Suspense} from "react";
import BackButton from "@/app/notes/(post)/back-button";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative`}>
      <header className="z-30 lg:sticky lg:top-0">

        <div className="px-4 sm:px-6 lg:px-8 h-14 py-4">
          <Suspense>
            <BackButton />
          </Suspense>
        </div>

      </header>


      <div className=" pt-20 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div>Loading</div>}>
          <motion.div
            animate={{opacity: 1, x: 0, }}
            initial={{opacity: 0, x: 100}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="prose prose-sm max-w-none">
            {children}
          </motion.div>
        </Suspense>
      </div>

    </div>
  )
}
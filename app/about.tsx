"use client"

import {motion} from "framer-motion";

export default function About() {
  return (
    <section className="bg-sky-100 flex items-center justify-center h-screen w-full">

      <div className="mx-auto max-w-xl">

        <motion.div
          animate={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 50}}
          transition={{duration: 0.5, damping: 1, stiffness: 1}}
        >
          <img className="h-8 w-auto" src="/krisna.svg" alt=""/>
        </motion.div>

        <div

          className="mt-8 prose prose-sm sm:prose-lg max-w-none">
          <motion.p
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.6, damping: 1, stiffness: 1}}
          >
            I’m Krisna Wijaya, software developer based in Bali, Indonesia.
          </motion.p>
          <motion.p
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.7, damping: 1, stiffness: 1}}
          >
            I previously created Zenn, a blogging platform for engineers (acquired). Now I’m working on sizu.me, a space
            for personal essays, and Nani!?, a playful new AI translator.
          </motion.p>
          <motion.p
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 50}}
            transition={{duration: 0.8, damping: 1, stiffness: 1}}
          >
            I previously created Zenn, a blogging platform for engineers (acquired). Now I’m working on sizu.me, a space
            for personal essays, and Nani!?, a playful new AI translator.
          </motion.p>
        </div>
      </div>

    </section>
  )
}
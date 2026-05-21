"use client"
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import {motion} from "framer-motion";
import {Bricolage_Grotesque} from 'next/font/google'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
})

export default function HeroSection() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // 120ms between each child
        delayChildren: 0.1
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };

  const about = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">

      <div className="sm:flex">
        <motion.div variants={item} className="mb-4 shrink-0 sm:mr-10 sm:mb-0" initial="hidden" animate="show">
          <div className="w-28">
            <Image
              placeholder="blur"
              width={500}
              height={500}
              className="aspect-square object-cover rounded-2xl
                  outline -outline-offset-1 outline-black/5
                  grayscale transition duration-500 motion-safe:group-hover:scale-150"
              src={profile} alt="Profile"/>
          </div>
        </motion.div>

        <div>
          <h4 className="text-5xl/8 font-semibold tracking-tight text-gray-900">Krisna Wijaya</h4>
          <p className={`mt-2 text-gray-500 whitespace-nowrap font-medium leading-snug ${bricolage.className}`}>
            Product-Minded Software Developer
          </p>
          <div>
            <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
              <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500  animate-pulse">
                <circle r={3} cx={3} cy={3} />
              </svg>
              Open to work
            </span>
          </div>
        </div>
      </div>

      <motion.div variants={about} className="mt-8">
        <div className="text-base/7 space-y-4  text-zinc-600 dark:text-zinc-400 mt-2.5">
          <p>
            I am a product-minded software developer, meaning I don't just write code, I have a deep interest in the product itself.
            I want to understand why decisions are made and how people interact with what we build. I love being actively involved in making product decisions.
          </p>
          <p>
            I'm currently open to new opportunities as a Front-End or Full-Stack Developer.
            While I am currently based in Bali, Indonesia, I am highly open to remote work or relocating to other countries for the right role.
          </p>
          <p>
            For front-end development, my go-to ecosystem is React, specifically utilizing modern frameworks like Next.js and TanStack Start,
            styled with Tailwind CSS, and animated using Framer Motion.
          </p>
          <p>
            On the full-stack and backend side,
            I am equally comfortable building with robust frameworks like Laravel and Ruby on Rails, as well as developing efficient services using Go and Node.js.
          </p>
        </div>
      </motion.div>

    </motion.div>
  )
}
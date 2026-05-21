"use client"
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import {motion} from "framer-motion";
import {Bricolage_Grotesque} from 'next/font/google'
import {ProjectHeading} from "@/components/project-heading";

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

      <div className="mt-8">
        <div className="text-base/7 space-y-4  text-zinc-600 dark:text-zinc-400 mt-2.5">
          <p>
            I am a product-minded software developer, meaning I don't just write code, I have a deep interest in the product itself.
            I want to understand why decisions are made and how people interact with what we build. I love being actively involved in making product decisions.
          </p>
          <p>
            I'm currently open to new opportunities as a Front-End or Full-Stack Developer.
            While I am currently based in Bali, I am highly open to remote work or relocating to other countries for the right role
          </p>
          <p>
            I'm comfortably working in fullstack framework like
            Laravel, Next.js, TanStack Start, and occasionally  using Ruby on Rails. In addition also like working on backend with Go and Node.js
          </p>
        </div>
      </div>



      <div className="flex items-start" >


        <motion.div variants={item}>
          <div className="flex justify-between">
            <h4 className={`text-xl font-semibold text-gray-900 ${bricolage.className}`}>Krisna Wijaya</h4>
          </div>

          <div>

          </div>

        </motion.div>
      </div>

      <motion.div variants={about} className="mt-6">

        <div>
          <ProjectHeading className="text-sm text-gray-300">Present</ProjectHeading>

        </div>

        {/*<div className="mt-8">*/}
        {/*  <ProjectHeading className="text-gray-400">More about me</ProjectHeading>*/}
        {/*  <div className="text-base/7 mt-2.5 space-y-4  text-zinc-600 dark:text-zinc-400">*/}
        {/*    <p>*/}
        {/*      Joined early-stage startups has shaped me into a product-minded software developer.*/}
        {/*    </p>*/}

        {/*    <blockquote className="mt-6 border-l-2 pl-6 italic ">*/}
        {/*      &quot;Product-minded engineers are developers with lots of interest in the product itself. They want to understand why decisions are made, how people use the product, and love to be involved in making product decisions.&quot;*/}
        {/*      <span className="text-blue-500"> ~ <Link href="https://blog.pragmaticengineer.com/the-product-minded-engineer/" target="_blank">Pragmatic Engineer</Link></span>*/}
        {/*    </blockquote>*/}

        {/*    <p>*/}
        {/*      I am deeply interested in the product <span className="font-semibold underline">validation cycle</span>, often seeking input before a feature is even production-ready.*/}
        {/*      I take the initiative to share work-in-progress with my team to gather early feedback and ensure we are building the right solution.*/}
        {/*      This is also lead me to have <span className="font-semibold underline">strong product instinct</span> through repeated cycles of learning.*/}
        {/*    </p>*/}

        {/*  </div>*/}
        {/*</div>*/}
      </motion.div>

    </motion.div>
  )
}
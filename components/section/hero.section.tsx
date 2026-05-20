"use client"
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {Mailbox} from "lucide-react";
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

      <div className="flex items-start" >
        <motion.div variants={item} className="mr-4 shrink-0" initial="hidden" animate="show">

          <div className="w-32">
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

        <motion.div variants={item}>

          <h4 className={`text-lg font-semibold text-gray-900 ${bricolage.className}`}>Krisna Wijaya</h4>
          <p className={`mt-1 text-gray-500 whitespace-nowrap font-medium leading-snug ${bricolage.className}`}>
            Product-Minded Software Developer
          </p>

          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
            <svg viewBox="0 0 6 6" aria-hidden="true" className="size-1.5 fill-green-500  animate-ping">
              <circle r={3} cx={3} cy={3} />
            </svg>
            Open to work
          </span>

          <div className="mt-2.5">
            <p className={`text-sm/7 text-zinc-600 dark:text-zinc-400 ${bricolage.className}`}>
              You can reach me at
              {' '}
              <Link href="https://x.com/iKrisnaw" target="_blank" className="text-gray-900 font-semibold whitespace-nowrap underline">@iKrisnaw</Link>
              {' '}
              and via {' '}
              <Link href="mailto:krisna.w2010@gmail.com" className="text-gray-900 font-semibold whitespace-nowrap underline">
                <Mailbox size={18} className="mr-0.5 mb-0.5 inline-block size-5" />  E-Mail.</Link>
              {' '}

              {/*or see my code on*/}
              {/*{' '}*/}
              {/*<Link href="https://github.com/krisnaw" target="_blank" className="text-gray-900 font-semibold whitespace-nowrap underline">*/}
              {/*  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5 text-gray-900 mr-0.5 mb-0.5 inline-block">*/}
              {/*    <path*/}
              {/*      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
              {/*      clipRule="evenodd" fillRule="evenodd"/>*/}
              {/*  </svg>*/}
              {/*  GitHub.*/}
              {/*</Link>*/}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div variants={about} className="mt-6">

        <div>
          <ProjectHeading className="text-sm text-gray-300">Present</ProjectHeading>
          <div className="text-base/7 space-y-4  text-zinc-600 dark:text-zinc-400 mt-2.5">
            <p>
              I'm currently exploring new opportunities as FrontEnd or Fullstack Developer.
              <br/>
              I am based in Bali, Indonesia, but I am open to remote roles or relocating.
            </p>
            <p>
              My core stack includes the following languages and technologies.
            </p>
          </div>


          <div className="mt-6">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="px-4 py-5 sm:p-6">

                <div className="flex  justify-between">

                  <div>
                    <p className="text-sm/7 font-semibold text-zinc-400 dark:text-zinc-400">Frontend</p>
                  </div>

                  <div>
                    <p className="text-sm/7 font-semibold text-zinc-600 dark:text-zinc-400">Backend</p>
                  </div>

                  <div>
                    <p className="text-sm/7 font-semibold text-zinc-600 dark:text-zinc-400">Devops</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ProjectHeading className="text-gray-400">More about me</ProjectHeading>
          <div className="text-base/7 mt-2.5 space-y-4  text-zinc-600 dark:text-zinc-400">
            <p>
              Joined early-stage startups has shaped me into a product-minded software developer.
            </p>

            <blockquote className="mt-6 border-l-2 pl-6 italic ">
              &quot;Product-minded engineers are developers with lots of interest in the product itself. They want to understand why decisions are made, how people use the product, and love to be involved in making product decisions.&quot;
              <span className="text-blue-500"> ~ <Link href="https://blog.pragmaticengineer.com/the-product-minded-engineer/" target="_blank">Pragmatic Engineer</Link></span>
            </blockquote>

            <p>
              I am deeply interested in the product <span className="font-semibold underline">validation cycle</span>, often seeking input before a feature is even production-ready.
              I take the initiative to share work-in-progress with my team to gather early feedback and ensure we are building the right solution.
              This is also lead me to have <span className="font-semibold underline">strong product instinct</span> through repeated cycles of learning.
            </p>

          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}
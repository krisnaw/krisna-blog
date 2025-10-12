"use client"
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.jpg";

import {Plus_Jakarta_Sans} from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const JakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
})

export default function HeroSection() {

  return (
    <section className={` bg-pink-200 ${JakartaSans.className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">



        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 3,
          }}
          className="rounded-3xl outline-1 outline-gray-200 sm:flex p-8">

          <div className="mb-4 shrink-0 sm:mr-4 sm:mb-0">
            <Image
              className="
               inline-block size-24 rounded-full outline -outline-offset-1 outline-black/5
               object-cover grayscale transition duration-500 motion-safe:group-hover:scale-150"
              src={profile} width={350} height={500} alt="Profile"/>


            <div className="group relative overflow-hidden rounded-full bg-neutral-100 ">

              <div
                className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                {/*<p className="font-display text-sm/6 font-semibold tracking-wide text-white">Krisna Wijaya</p>*/}
                {/*<p className="text-xs text-white">Software Developer</p>*/}
              </div>
            </div>
          </div>

          <div className="prose prose-sm sm:prose-lg  text-gray-600 sm:ml-4">

            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
            >
              Hi there <span>👋</span><br/>

              I&#39;m Krisna Wijaya. <br/> Software Developer currently based in Bali, Indonesia <br/>

              Thanks for visiting. This site still in progress.
            </motion.p>
          </div>


        </motion.div>


      </div>
    </section>
  )
}
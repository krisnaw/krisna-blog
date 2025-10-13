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
    <section className={JakartaSans.className}>
      <div className="py-36">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 1,
          }}
          className="rounded-3xl outline-1 outline-gray-200 sm:flex p-4">

          <div className="mb-4 shrink-0 sm:mr-4 sm:mb-0">
            <Image
              className="z-0
               inline-block size-32 rounded-2xl outline -outline-offset-1 outline-black/5
               object-cover grayscale transition duration-500 motion-safe:group-hover:scale-150"
              src={profile} width={350} height={500} alt="Profile"/>
          </div>

          <div className="text-slate-800/58 text-base leading-6 sm:ml-4 flex flex-col gap-3">
            <p>
              Hi there <span>👋</span>...
            </p>
            <p>
              I&#39;m Krisna. Software Developer currently based in Bali, Indonesia.
            </p>
            <p>
              Open to full time and freelance work. If you&#39;re working on something cool,
              <span className="text-slate-800 ml-0.5"><a href="mailto:krisna.w2010@gmail.com">let&#39;s chat!</a></span>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
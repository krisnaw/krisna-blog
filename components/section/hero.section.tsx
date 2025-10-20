"use client"
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import profile from "@/public/profile.jpg";

export default function HeroSection() {

  return (
    <motion.div
      className="mb-16"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 1,
      }}>

      <header className="flex flex-col items-start">
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
      </header>

      <section className="pt-10 prose prose-sm sm:prose-lg sm:leading-tight max-w-none">
        <p>
          Hi there <span>👋</span>...
        </p>
        <p>
          I&#39;m Krisna, Software Developer currently based in Bali, Indonesia.
        </p>
        <p>
          Open to full time and freelance work. If you&#39;re working on something cool,
          <span className="text-slate-800 ml-1.5"><a
            href="mailto:krisna.w2010@gmail.com">let&#39;s chat!</a></span>
        </p>
      </section>

    </motion.div>
  )
}
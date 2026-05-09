"use client"
import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {Mailbox} from "lucide-react";

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

  return (
    <div>

      <motion.div variants={container} className="flex items-start" initial="hidden" animate="show">
        <motion.div variants={item} className="mr-4 shrink-0">

          <div className="w-24">
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
          <h4 className="text-lg font-bold text-gray-900">Krisna Wijaya</h4>
          <p className="mt-1 text-gray-500 whitespace-nowrap font-medium leading-snug">
            Product-Minded Software Engineer
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-6">
        <div className="text-base/7">
          <p className="text-gray-500">
            I love building product, especially for the web, from building the backend to polishing the UI.
            <br/>
            I also found talking to the user and gathering the feedback is fun.
          </p>
          <p className="mt-2 text-gray-500">
            You can reach me at
            {' '}
            <Link href="https://x.com/iKrisnaw" target="_blank" className="text-gray-900 font-semibold whitespace-nowrap underline">@iKrisnaw</Link>
            {' '}
            and via{' '}
            <Link href="mailto:krisna.w2010@gmail.com" className="text-gray-900 font-semibold whitespace-nowrap underline"><Mailbox size={18} className="mr-1 mb-0.5 inline-block size-4" />  email</Link>
            {' '}
            or see my code on
            {' '}
            <Link href="https://github.com/krisnaw" target="_blank" className="text-gray-900 font-semibold whitespace-nowrap underline">GitHub.</Link>
          </p>
        </div>
      </div>

    </div>
  )
}
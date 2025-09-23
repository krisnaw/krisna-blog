"use client"
import {motion} from "framer-motion";
import profile from "../../public/images/new_profiles.jpg"
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col space-y-10 py-24">

      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          <h1 className="text-3xl sm:text-5xl tracking-tighter text-balance uppercase">
            I’m Krisna Wijaya, <br/> a software developer.
          </h1>

          <p className="sm:text-lg font-light opacity-70 mt-10">
            I’m a software developer who emphasizes end-to-end ownership of a product, from backend logic to frontend polish.
          </p>
        </motion.div>
        <div className="mt-10">
          <button className="bg-white py-2.5 px-5.5 rounded-xl border-2 border-gray-500 cursor-pointer">
            See my work
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto">
        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
          <Image
            className="h-96 object-cover grayscale transition duration-500 motion-safe:group-hover:scale-150"
            src={profile} width={400} height={500} alt="Profile"/>
          <div
            className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">Krisna Wijaya</p><p
            className="mt-2 text-sm text-white">Software Developer</p></div>
        </div>
      </div>
    </section>
  )
}

"use client"
import {motion} from "framer-motion";

export default function AboutSection() {
  return (
    <section className="flex py-24">
      <div className="mr-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1
            className="uppercase text-3xl sm:text-7xl tracking-tighter text-balance">
            👋 I’m
            <br/> Krisna Wijaya
          </h1>

          <p className=" font-light opacity-70 mt-10">
            I’m a software developer who emphasizes end-to-end ownership of a product, from backend logic to frontend polish.
          </p>

          <p className=" font-light opacity-70 mt-3.5">
            Most of my experience as a web developer has been in full-stack development—from setting up infrastructure in AWS, to building applications with Laravel, and deploying them to production.
          </p>
          <p className=" font-light opacity-70 mt-3.5">
            With the rise of Platform-as-a-Service, over the past couple of years I’ve been transitioning more into frontend engineering. I really enjoy developing web applications with the Next.js framework and building interactive UIs with React. Beyond that, I’ve also explored motion design using Framer Motion.
          </p>

          <p className=" font-light opacity-70 mt-3.5">
            Outside of work, you’ll usually find me running, getting lost in a book, taking long road cycling trips, or exploring new places around the world.
          </p>
        </motion.div>
      </div>

      <div className="order-first sm:order-none shrink-0 self-center">
        <div>
          <div>
            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
              <img
                className="h-96 object-cover grayscale transition duration-500 motion-safe:group-hover:scale-150"
                src="/images/new_profiles.jpg" alt="Profile"/>
              <div
                className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                <p className="font-display text-base/6 font-semibold tracking-wide text-white">Krisna Wijaya</p><p
                className="mt-2 text-sm text-white">Software Developer</p></div>
            </div>
          </div>

          <div className="w-full text-center items-center justify-center flex mt-4">
            <div className="font-semibold text-muted-foreground">
              <a href="https://drive.google.com/file/d/19cqXg3IADer8tYr72VLAHcsk6NdjTKAc/view?usp=sharing" target="_blank"> View Resume to Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
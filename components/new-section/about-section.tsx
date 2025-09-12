"use client"
import {motion} from "framer-motion";

export default function AboutSection() {
  return (
    <div className="py-24">
      <section>
        <div className="flex flex-col sm:flex-row space-x-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1
                className="uppercase text-3xl sm:text-7xl tracking-tighter text-balance">
                👋 I’m
                <br/> Krisna Wijaya
              </h1>

              <p className="sm:text-lg font-light opacity-70 mt-10">
                I’m a software developer who emphasizes end-to-end ownership of a product, from backend logic to frontend polish.
              </p>

              <p className="sm:text-lg font-light opacity-70 mt-2.5">
                I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years
                old, just two weeks after my mom brought home the brand new
                Macintosh LC 550 that I taught myself to type on.
              </p>

              <p className="sm:text-lg font-light opacity-70 mt-2.5">
                Outside of work, you’ll usually find me running, getting lost in a book, taking long road cycling trips, or exploring new places around the world.
              </p>
            </motion.div>
          </div>

          <div className="order-first sm:order-none shrink-0">
            <div>
              <div style={{opacity: 1, transform: "none"}}>
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
            </div>
          </div>

        </div>
      </section>

      <section className="pt-10">
        <div>
          Tech stack
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
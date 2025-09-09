import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="pt-24">
      <div>
        <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="uppercase text-7xl tracking-tighter text-balance">about me.</h1>
            <p className="font-light opacity-70 mt-2.5">
              We&#39;ve been engaged in a variety of projects lately, crafting stories, designing websites, and developing digital experiences.
              Our recent work reflects our commitment to helping clients achieve their goals.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-10">


        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
          <Image
            className="object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
            src="/images/profiles.jpg" alt="Profile" width={500} height={500} />
          <div
            className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">Krisna Wijaya</p><p
            className="mt-2 text-sm text-white">Software Developer</p></div>
        </div>


        <div className="px-10">
          Hey, I’m Nikolai. I&#39;m a New Zealand born, Edinburgh based Webflow Professional Partner.
          You can see me in The Hobbit if you look close enough, and see my design and dev work across the web for clients based in UK, EU, US, AU, and NZ.
        </div>
      </div>
    </section>
  )
}
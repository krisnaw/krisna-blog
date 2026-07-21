import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="w-full space-y-6">

      <div>
        <AboutSection />
      </div>

      <div>
        <MenuSection />
      </div>

      <div className="mt-16">
        <ExperienceSection />
      </div>

      <div className="mt-16">
        <WritingSection />
      </div>

      <div className="mt-16">
        <ProjectSection />
      </div>
    </div>
  )
}

function SectionTitle({ number, title } : { number: string, title: string}) {
  return (
    <h2 className="inline-flex items-center text-neutral-500">
      <span className="inline-flex font-mono">
        <span className="border-y-[0.5] border-l-[0.5] border-gray-400 tabular-nums px-2.5">
        {number}
      </span>
      <span className="w-4 shrink-0 border-[0.5] border-gray-400"
            style={{
              background:
                "repeating-linear-gradient(-45deg, color-mix(in oklab, var(--muted-foreground) 55%, transparent) 0, color-mix(in oklab, var(--muted-foreground) 55%, transparent) 1px, transparent 1px, transparent 3.5px)",
            }} />
      </span>
      <span className="pl-4 uppercase font-light tracking-wide">
        {title}
      </span>
    </h2>
  )
}

function MenuSection() {
  return (
    <div className="grid grid-cols-3 divide-x divide-neutral-200 border-y border-gray-200">
      <div className="flex flex-col items-center justify-center">
        <h4>Writing</h4>
        <p>9 Posts</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4>Writing</h4>
        <p>9 Posts</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4>Writing</h4>
        <p>9 Posts</p>
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <div className="px-6">
      <SectionTitle number="01" title="experience" />
      <div className="grid grid-cols-1 mt-4">
        <ul className="divide-y divide-neutral-200">
          <li className="flex justify-between items-center py-2.5">
            <div>
              <h4 className="font-bold">Facebook</h4>
              <p className="text-neutral-500">FrontEnd Developer</p>
            </div>
            <div>
              <p className="text-neutral-500">2022 - 2022</p>
            </div>
          </li>
          <li className="flex justify-between items-center py-2.5">
            <div>
              <h4 className="font-bold">Facebook</h4>
              <p className="text-neutral-500">FrontEnd Developer</p>
            </div>
            <div>
              <p className="text-neutral-500">2022 - 2022</p>
            </div>
          </li>
          <li className="flex justify-between items-center py-2.5">
            <div>
              <h4 className="font-bold">Facebook</h4>
              <p className="text-neutral-500">FrontEnd Developer</p>
            </div>
            <div>
              <p className="text-neutral-500">2022 - 2022</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

function WritingSection() {
  return (
    <div className="px-6">
      <SectionTitle number="02" title="writing" />
    </div>
  )
}

function ProjectSection() {
  return (
    <div className="px-6">
      <SectionTitle number="03" title="Projects" />
    </div>
  )
}

function AboutSection() {
  return (
    <div className="px-6">
      <div className="flex items-start space-x-6">
        <div className="w-36 shrink-0">
          <div className="group relative size-28 rounded-lg overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Krisna Wijaya"
              fill
              sizes="128px"
              className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
            />
          </div>
        </div>

        <div>
          <div className="typeset">
            <h1>
              Krisna Wijaya
            </h1>
          </div>
          <div className="inline-flex gap-4">
            <ul>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="typeset mt-4">
        <p>
          I founded Zolplay(opens in a new tab), an AI-native design studio creating products, brands, and digital experiences.
          Being a generalist is kind of my thing. I bring curiosity, craft, and a little fun to whatever the team is making.
        </p>

        <p>
          I founded Zolplay(opens in a new tab), an AI-native design studio creating products, brands, and digital experiences.
          Being a generalist is kind of my thing. I bring curiosity, craft, and a little fun to whatever the team is making.
        </p>
      </div>
    </div>
  )
}
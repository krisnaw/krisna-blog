"use client"

import {SectionTitle} from "@/components/section/section.title";
import {motion} from "framer-motion";
import React from "react";

export function CertSection() {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 20}}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: "easeInOut",
      }}
      className="mt-16">

      <SectionTitle>
        Recent certifications and open source contributions
      </SectionTitle>

      <ul>
        {CERTS.map((cert) => (
          <li key={cert.id} className="pb-4">
            <div className="flex justify-between items-baseline pb-2 border-b border-gray-200">
              <div className="relative w-full">

                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700">
                  <span className="absolute inset-0"></span>
                  <h3 className="font-semibold">
                    {cert.title}
                  </h3>
                </a>

                <p className="font-medium text-gray-500 text-xs sm:text-base">
                  {cert.description}
                </p>

              </div>
              <div className="shrink-0">
                <p className="text-gray-500 text-sm sm:text-base">
                  {cert.date}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>


    </motion.div>
  )
}

const CERTS = [
  {
    id: 1,
    title: "The Joy of React Course",
    date: "October, 2025",
    description: "Certification of Completion",
    url: "https://courses.joshwcomeau.com/certificate/68e09dbd4c623c8e769a7e87",
  },
  {
    id: 2,
    title: "Zod v4",
    date: "April, 2025",
    description: "Contributed to the Bahasa Indonesia translation, helping improve internationalization in the upcoming major release",
    url: "https://github.com/colinhacks/zod/pull/4195",
  }
]
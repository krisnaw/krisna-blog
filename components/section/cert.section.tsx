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
              <div>
                <h3 className="font-semibold">
                  The Joy of React Course
                </h3>
                <p className="font-medium text-gray-500 text-xs sm:text-base">
                  Site of the Day | Developer Award
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm sm:text-base">
                  October 23, 2023
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
    date: "October 23, 2023",
    description: "Site of the Day | Developer Award",
    url: "hhttps://courses.joshwcomeau.com/certificate/68e09dbd4c623c8e769a7e87",
  },
  {
    id: 2,
    title: "The Joy of React Course",
    date: "October 23, 2023",
    description: "Site of the Day | Developer Award",
    url: "hhttps://courses.joshwcomeau.com/certificate/68e09dbd4c623c8e769a7e87",
  }
]
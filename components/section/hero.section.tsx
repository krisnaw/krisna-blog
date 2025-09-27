"use client"
import BlankSectionInside from "@/components/section/blank-section-inside";

import {motion} from "framer-motion";
import {resume} from "@/app/data";
import AboutContent from "@/app/components/about-content";

export default function HeroSection() {

   return (
       <main className="mx-auto max-w-5xl border-r border-l border-gray-300">

          <div className="divide-y divide-gray-300">

             {/*HERO*/}
             <div>
                <div className="py-24 w-full h-full">
                   <div className="text-left px-4 sm:px-6 lg:px-8">
                      <motion.h2 className="text-5xl"
                                 animate={ { opacity: 1, y: 0 } }
                                 initial={ { opacity: 0, y: 20 } }
                                 transition={ { duration: 1, ease: "easeInOut" } }
                      >
                         {resume.firstName} {resume.lastName}
                      </motion.h2>
                      <motion.h5
                          animate={ { opacity: 1, y: 0 } }
                          initial={ { opacity: 0, y: 20 } }
                          transition={ { duration: 1, ease: "easeInOut" } }
                          className="text-2xl font-medium">
                         Front End Engineer
                      </motion.h5>
                   </div>
                </div>

                <AboutContent />

                <div className="relative min-h-96 overflow-hidden opacity-75">

                   <svg fill="none" className="absolute inset-0 size-full stroke-gray-900/10">
                      <defs>
                         <pattern id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9" width="10" height="10" x="0"
                                  y="0" patternUnits="userSpaceOnUse">
                            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                         </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                            stroke="none">
                      </rect>
                   </svg>



                </div>
             </div>

             <BlankSectionInside />

          </div>

       </main>
   )
}
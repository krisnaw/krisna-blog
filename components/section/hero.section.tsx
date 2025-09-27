"use client"
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
             </div>


          </div>

       </main>
   )
}
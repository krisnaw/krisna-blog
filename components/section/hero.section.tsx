"use client"
import {resume} from "@/app/data";
import React from "react";
import {Contact} from "@/app/components/contact";

export default function HeroSection() {

   return (
       <main className="mx-auto max-w-4xl border-r border-l border-gray-300 h-full">

          <div className="divide-y divide-gray-300">

             {/*HERO*/}
             <div className="px-4 sm:px-6 lg:px-8">
               <div>
                 <h2 className="text-xl font-medium">
                   Hey, I`m {resume.firstName} {resume.lastName}
                 </h2>
               </div>

               <div className="mt-4 prose prose-sm sm:prose-lg mx-auto max-w-none">
                 <p>
                   I`m a design engineer & designer at OpenSea. I design and build products that feel magical, yet simple and intuitive.
                   I obsess over the smallest details and I like to make people feel something through my work.
                 </p>
               </div>

               <Contact />

             </div>
             

          </div>

       </main>
   )
}
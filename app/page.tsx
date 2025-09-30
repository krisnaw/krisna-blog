import BlankSection from "@/components/section/blank-section";
import {Contact} from "@/app/components/contact";
import {CopyIcon} from "@/components/icon/copy.icon";

export default function Page() {
   return (
       <div className="relative lg:grid lg:grid-cols-2">
         <div className="min-h-screen lg:h-screen items-center flex lg:sticky flex-col lg:top-0">

           <div className="py-24">

             <h2 className="text-2xl sm:text-4xl tracking-wider font-bold uppercase">Krisna Wijaya</h2>
             <h5 className="text-lg sm:text-2xl mb-4 sm:mb-6">
               Senior Frontend Engineer
             </h5>

             <p className="font-light max-w-sm text-gray-500 leading-relaxed mb-6">
               I create software that&#39;s intuitive and effective, allowing users to focus on what matters
             </p>

             <div className="mb-4">
               <Contact />
             </div>

             <div className="flex item-center ">
               krisna.w2010@gmail.com
               <CopyIcon className="size-6" />
             </div>


           </div>


           <ul>
             <li>
               <a href="#about">
                 About
               </a>
             </li>
             <li>
               <a href="#projects">
                 Project
               </a>
             </li>

             <li>
               <a href="#experience">
                 Experience
               </a>
             </li>
           </ul>

         </div>
         <div className="relative items-center flex flex-col bg-gray-100">
           <div className="w-full">
             <section id="about" className="bg-pink-200">
               <BlankSection />
             </section>
             <section id="projects" className="bg-green-300">
               <BlankSection />
             </section>

             <section id="experience">
               <BlankSection />
             </section>
           </div>
         </div>
       </div>
   )
}

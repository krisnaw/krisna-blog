"use client"
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="fixed z-40 bottom-14 w-full flex items-center justify-center">
      <div className="relative h-64 w-[230px]">

        {isOpen && (
          <AnimatePresence>
            <motion.div
              layout={true}
              layoutId="wrapper"
              animate={{
                borderRadius: "rounded-md",
              }}
              transition={{ type: "spring" }}
              className="absolute inset-0 bg-blue-400 z-0 rounded-md">
              <motion.button
                layout="position"
                onClick={() => setIsOpen(false)} className="absolute bottom-0 text-white border border-gray-500 w-full z-50">
                Close
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute bottom-0 left-0 w-full flex justify-center z-0">
          <motion.button
            layoutId="wrapper"
            onClick={() => setIsOpen(true)} className="bg-blue-400 text-white px-4 py-2 rounded-full">
            <motion.p layout="position">
              Foreground content
            </motion.p>
          </motion.button>
        </div>
      </div>
    </div>

  )
}

// <div className="fixed z-40 bottom-1/2 w-full flex items-center justify-center">
//   <div className="relative ">
//
//     <div
//       // layoutId="wrapper"
//       // transition={{ type: "spring", stiffness: 100, damping: 10 }}
//       className="
//           absolute z-10
//           outline-1 outline-neutral-600
//           border-t border-neutral-500
//           bg-[#3f3f3f]/10 pt-2 text-white w-[230px] min-h-40 rounded-2xl p-1.5 flex flex-col justify-between">
//
//       <div className="pt-2">
//         <ul className="px-2.5">
//
//           <li className="h-10">
//             <button className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">
//
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                    className="lucide lucide-chevron-right-icon lucide-chevron-right">
//                 <path d="m9 18 6-6-6-6"/>
//               </svg>
//
//               <span className="flex-1 text-left">
//                     About
//                   </span>
//
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                    className="lucide lucide-rss-icon lucide-rss">
//                 <path d="M4 11a9 9 0 0 1 9 9"/>
//                 <path d="M4 4a16 16 0 0 1 16 16"/>
//                 <circle cx="5" cy="19" r="1"/>
//               </svg>
//             </button>
//           </li>
//
//           <li className="h-10">
//             <Link href="/notes"
//                   className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">
//
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                    className=" invisible lucide lucide-chevron-right-icon lucide-chevron-right">
//                 <path d="m9 18 6-6-6-6"/>
//               </svg>
//
//               <span className="flex-1 text-left">
//                     Blog
//                   </span>
//
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                    className="lucide lucide-receipt-text-icon lucide-receipt-text">
//                 <path d="M13 16H8"/>
//                 <path d="M14 8H8"/>
//                 <path d="M16 12H8"/>
//                 <path
//                   d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>
//               </svg>
//             </Link>
//           </li>
//
//         </ul>
//       </div>
//
//       <button
//         className=" mt-6 w-full py-2 bg-neutral-600 text-neutral-300 flex items-center justify-center border border-neutral-500 rounded-xl"
//         onClick={() => setIsOpen(!isOpen)}>
//
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//              className="lucide lucide-chevron-down-icon lucide-chevron-down">
//           <path d="m6 9 6 6 6-6"/>
//         </svg>
//
//       </button>
//
//     </div>
//
//     <div>
//       <motion.button
//         layoutId="wrapper"
//         onClick={() => setIsOpen(true)}
//         className="absolute bottom-0 z-0 bg-[#3f3f3f] rounded-full px-3.5 py-1 text-white     outline-1 outline-neutral-600
//           border-t border-neutral-500">
//
//         <motion.span layout="position" className="inline-flex items-center gap-2">
//           Menu
//
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
//                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                className="lucide lucide-chevron-up-icon lucide-chevron-up">
//             <path d="m18 15-6-6-6 6"/>
//           </svg>
//         </motion.span>
//       </motion.button>
//     </div>
//   </div>
// </div>
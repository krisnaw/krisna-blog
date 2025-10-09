"use client"
import {useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";

export function ButtonJoin() {
  const [open, setOpen] = useState(true);

  const ref = useRef(null)

  // // @ts-ignore
  // useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="bottom-1/2 fixed flex items-center justify-end">
      <motion.button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        layoutId="wrapper"
        className="relative bottom-0 rounded-full bg-neutral-500 outline-1 outline-neutral-500 border-t border-neutral-400 text-white px-3 py-2 text-sm cursor-pointer"
      >
        <motion.span layout="position" className="flex items-center gap-2.5 px-1.5">
          menu
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
               className="lucide lucide-chevron-up-icon lucide-chevron-up">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.span>
      </motion.button>


      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            layoutId="wrapper"
            className="absolute z-40 bg-neutral-700 w-[240px] h-64 flex flex-col outline-1 outline-neutral-600 border-t border-neutral-500 rounded-2xl "
            ref={ref}
            transition={{type: "spring", stiffness: 250, damping: 20}}
          >
            <div role="dialog" className="h-full flex flex-col justify-between p-1">
              {/*Menu Content*/}
              <div>
                <ul className="px-2.5 text-white">

                  <li className="h-10">
                    <button className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="lucide lucide-chevron-right-icon lucide-chevron-right">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>

                      <span className="flex-1 text-left">
                    About
                  </span>

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="lucide lucide-rss-icon lucide-rss">
                        <path d="M4 11a9 9 0 0 1 9 9"/>
                        <path d="M4 4a16 16 0 0 1 16 16"/>
                        <circle cx="5" cy="19" r="1"/>
                      </svg>
                    </button>
                  </li>

                  <li className="h-10">
                    <Link href="/notes"
                          className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className=" invisible lucide lucide-chevron-right-icon lucide-chevron-right">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>

                      <span className="flex-1 text-left">
                    Blog
                  </span>

                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="lucide lucide-receipt-text-icon lucide-receipt-text">
                        <path d="M13 16H8"/>
                        <path d="M14 8H8"/>
                        <path d="M16 12H8"/>
                        <path
                          d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>
                      </svg>
                    </Link>
                  </li>

                </ul>
              </div>

              {/*Close button*/}
              <div>
                <button className="w-full bg-neutral-600 ring-1 ring-neutral-500 rounded-xl py-1 inline-flex item-center justify-center text-white"
                        onClick={() => setOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="size-9 lucide lucide-chevron-down-icon lucide-chevron-down">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

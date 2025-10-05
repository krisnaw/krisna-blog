"use client"
import {useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {useOnClickOutside} from "usehooks-ts";

export function ButtonJoin() {
  const [open, setOpen] = useState(false);

  const ref = useRef(null)

  // @ts-ignore
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="flex justify-center items-end w-full h-[500px]">


      <motion.button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        layoutId="wrapper"
        className="relative bottom-0 rounded-xl bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <motion.span layoutId="title">
          Join the Waitlist
        </motion.span>
      </motion.button>


      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            layoutId="wrapper"
            className="absolute z-40 flex flex-col"
            ref={ref}
          >

            <div role="dialog" className="rounded-2xl p-6 min-w-xl bg-cyan-100 shadow">
              <div className="flex justify-between items-center">
                <motion.div
                  layoutId="title"
                  className="font-bold text-base">
                  New Message
                </motion.div>
                <div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-500">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.25 6.75L6.75 17.25" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="1.5">

                      </path>
                      <path d="M6.75 6.75L17.25 17.25" stroke="currentColor" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <form className="flex flex-col gap-1">

                  <div className="flex items-center gap-3">
                    <label htmlFor="from" className="text-gray-400 text-sm w-16">From: </label>
                    <input id="from" autoFocus={true}
                           className="focus-visible:outline-0 active:ring-0 focus:ring-0 px-3 py-2.5 flex-1 caret-blue-500"
                           name="from" placeholder="your@company"/>
                  </div>

                  <div className="flex items-center gap-3">
                    <label htmlFor="to" className="text-gray-400 text-sm w-16">To: </label>
                    <input id="to" defaultValue="team@inbound.resend.app" disabled
                           className="focus-visible:outline-0 active:ring-0 focus:ring-0 px-3 py-2.5 flex-1"
                           name="to" placeholder="your@company"/>
                  </div>

                  <div className="flex items-center gap-3">
                    <label htmlFor="Subject" className="text-gray-400 text-sm w-16">Subject: </label>
                    <input id="Subject" defaultValue="Add me to the Inbound waitlist" disabled
                           className="focus-visible:outline-0 active:ring-0 focus:ring-0 px-3 py-2.5 flex-1"
                           name="Subject" placeholder="your@company"/>
                  </div>
                </form>
              </div>
              <div className="mt-6 flex justify-end">
                <motion.button
                  initial={{opacity: 0, y: 8}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 8}}
                  transition={{duration: 0.35, ease: "easeOut"}}
                  className="bg-gray-950 disabled:bg-slate-700 px-3.5 py-2.5 text-white text-base font-semibold rounded-xl flex items-center gap-2"
                  onClick={() => alert("clicked")}
                >
                  Send
                  <div className="flex gap-1">
                    <kbd
                      className="font-normal inline-flex h-5 min-w-5 px-1 select-none items-center justify-center rounded-md text-base bg-gray-500 text-gray-9 uppercase">⌘</kbd>

                    <kbd
                      className="font-normal inline-flex h-5 min-w-5 px-1 select-none items-center justify-center rounded-md text-base bg-gray-500 text-gray-9 uppercase">↩</kbd>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

"use client"

import React, {useState} from "react";
import {useClickAway} from "@uidotdev/usehooks";
import {AnimatePresence, motion} from "framer-motion";

export function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (
    <div className="flex items-center justify-center">
      <div className="fixed bottom-20 bg-sky-50">

        <div className="flex items-end justify-center">

          <AnimatePresence>
            {isOpen && (
              <motion.div
                exit={{
                  opacity: 0,
                  filter: "blur(5px)",
                  transition: { ease: "easeIn", duration: 0.5 }
                }}

                animate={{
                  opacity: 1,
                  filter: "blur(5px)",
                  transition: { type: "spring", duration: 0.2 }
                }}

                

                layoutId="wrapper"

                className="h-28 w-[250px] border border-gray-200 absolute text-center bg-sky-50">
                <div className="flex flex-col gap-2 p-2">
                  This is container
                  <button onClick={() => setIsOpen(false)}
                  >Close</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            layoutId="wrapper"
            key="button"
            type="button"
            onClick={() => setIsOpen(true)}
            transition={{type: "spring", stiffness: 300, damping: 40}}
            className=" py-2 px-2 bg-pink-200/10 ">
            <motion.span layoutId="open-button">
              Hey this is button
            </motion.span>
          </motion.button>
        </div>

      </div>
    </div>

  )
}
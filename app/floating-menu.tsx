"use client"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="fixed bottom-14 w-full bg-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="wrapper"
            transition={{
              type: "spring",
              duration: 0.4,
              bounce: 0
            }}
            className="mx-auto max-w-[240px] absolute inset-x-0 bottom-0 z-30">
            <div
              className="h-60 bg-gray-950  rounded-xl text-white">
              <ul>
                <li>Container menu</li>
                <li>Container menu</li>
              </ul>
              <button onClick={() => setIsOpen(false)}
                      className="bg-gray-600 w-full text-center">
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-[100px] absolute inset-x-0 bottom-0">
        <motion.button
          layoutId="wrapper"
          key="button"
          onClick={() => setIsOpen(true)}
          className="w-full bg-gray-950/50 hover:bg-gray-950 rounded-xl px-4 py-2.5 text-white text-center cursor-pointer">
          <motion.div layout="position">
            Menu
          </motion.div>
        </motion.button>
      </div>
    </div>

  )
}

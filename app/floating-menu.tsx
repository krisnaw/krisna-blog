"use client"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {ChevronDownIcon} from "lucide-react";

const OPTIONS = [
  {
    url: "/",
    label: "home"
  },
  {
    url: "/notes",
    label: "notes"
  },
  {
    url: "/contact",
    label: "contact"
  }
]

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="fixed bottom-6 w-full bg-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="wrapper"
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="mx-auto max-w-[240px] absolute inset-x-0 bottom-0 z-30">
            <div className="min-h-[100px] bg-gray-950  rounded-lg text-white">

              <div className="p-1.5">
                <motion.ul
                  role="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-1"
                >
                  {OPTIONS.map((option) => (
                    <li key={option.label}
                        className="py-3 px-2.5">
                      <Link href={option.url} className="text-lg/6 font-semibold capitalize">
                        {option.label}
                      </Link>
                    </li>
                  ))}

                </motion.ul>

                <div className="mt-4">
                  <button onClick={() => setIsOpen(false)}
                          className="
                          bg-neutral-700/70
                          outline-neutral-500 outline-1
                          w-full rounded-lg py-2.5 flex items-center justify-center">
                    <ChevronDownIcon />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-[100px] absolute inset-x-0 bottom-0">
        <motion.button
          layoutId="wrapper"
          key="button"
          onClick={() => setIsOpen(true)}
          className="w-full bg-gray-950/50 hover:bg-gray-950 rounded-lg px-4 py-2.5 text-white text-center cursor-pointer">
          <motion.div layout="position">
            Menu
          </motion.div>
        </motion.button>
      </div>
    </motion.div>

  )
}

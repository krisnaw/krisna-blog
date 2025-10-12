"use client"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {ChevronDownIcon} from "lucide-react";
import {useClickAway} from "@uidotdev/usehooks";

const OPTIONS = [
  {
    url: "/",
    label: "home",
    duration: 0.8
  },
  {
    url: "/notes",
    label: "notes",
    duration: 0.10
  },
  {
    url: "/contact",
    label: "contact",
    duration: 0.15
  }
]

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (

    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className="fixed bottom-1/6 w-full bg-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            layoutId="wrapper"
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="mx-auto max-w-[240px] absolute inset-x-0 bottom-0 z-30">
            <div className="min-h-[100px] bg-white outline-1 outline-gray-300 rounded-3xl ">

              <div className="p-1.5">
                <ul className="pt-2 px-1">
                  {OPTIONS.map((option) => (
                    <li key={option.label} className=" text-gray-800 h-10 flex items-center">
                      <Link href={option.url} className="text-lg/6 font-semibold capitalize px-2.5 w-full">
                        {option.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <button onClick={() => setIsOpen(false)}
                          className="
                          bg-white
                          outline-neutral-300 outline-1
                         text-gray-800 w-full rounded-3xl py-2.5 flex items-center justify-center">
                    <ChevronDownIcon/>
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
          className="w-full bg-white  outline-1 outline-gray-300 rounded-3xl px-4 py-2.5  text-center cursor-pointer">
          <motion.div layout="position">
            Menu
          </motion.div>
        </motion.button>
      </div>
    </motion.div>

  )
}

"use client"
import {useState} from "react";
import {AnimatePresence, motion, type Variants} from "framer-motion";
import Link from "next/link";
import {useClickAway} from "@uidotdev/usehooks";
import {HomeIcon} from "@/components/icons/home.icon";
import {ChevronDownIcon} from "lucide-react";
import {NoteIcon} from "@/components/icons/note.icon";
import {PersonIcon} from "@/components/icons/person.icon";

const OPTIONS = [
  {
    url: "/",
    label: "home",
    duration: 0.8,
    icon: HomeIcon

  },
  {
    url: "/notes",
    label: "notes",
    duration: 0.10,
    icon: NoteIcon
  },
  {
    url: "/animation",
    label: "Animation",
    duration: 0.15,
    icon: PersonIcon
  }
]

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: 20,
    scale: 0.94,
    filter: "blur(10px)",
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.16,
      ease: [0.4, 0, 1, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (

    <div className="fixed bottom-18 sm:bottom-28 w-full">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            ref={ref}
            key="floating-menu-panel"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mx-auto max-w-50 rounded-3xl  bg-white/20 backdrop-blur-sm absolute inset-x-0 bottom-0 z-30">
            <div className="min-h-25 rounded-3xl inset-shadow-sm inset-shadow-slate-500/50 outline-1 outline-gray-300">

              <div className="p-1.5">
                <motion.ul
                  initial={false}
                  variants={menuVariants}
                  className="pt-2 px-1"
                >
                  {OPTIONS.map((option) => (
                    <motion.li
                      key={option.label}
                      variants={itemVariants}
                      className=" text-gray-600 h-10 flex items-center"
                    >
                      <Link onClick={() => setIsOpen(false)} prefetch={true}
                            href={option.url}
                            className="text-lg/6 font-semibold capitalize px-2.5 w-full flex justify-between">
                        {option.label}
                        <option.icon className="size-4"/>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div className="mt-4" variants={itemVariants}>
                  <button onClick={() => setIsOpen(false)}
                          className="
                          bg-white
                           inset-shadow-sm inset-shadow-slate-500/50
                          outline-neutral-300 outline-1
                         text-gray-800 w-full rounded-3xl py-2.5 flex items-center justify-center">
                    <ChevronDownIcon/>
                  </button>
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-25 absolute inset-x-0 bottom-0">
        <motion.button
          key="floating-menu-trigger"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          whileTap={{scale: 0.95}}
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? 10 : 0,
            scale: isOpen ? 0.96 : 1,
          }}
          transition={{duration: 0.22, ease: [0.22, 1, 0.36, 1]}}
          style={{pointerEvents: isOpen ? "none" : "auto"}}
          className=" w-full
            bg-white/30 backdrop-blur-sm
          inset-shadow-sm inset-shadow-slate-500/50
          outline-1 outline-gray-300
          rounded-3xl px-4 py-2.5  cursor-pointer">
          <motion.div animate={{y: isOpen ? -2 : 0}} transition={{duration: 0.2}}>
            Menu
          </motion.div>
        </motion.button>
      </div>
    </div>

  )
}

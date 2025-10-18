"use client"
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
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
    url: "/contact",
    label: "contact",
    duration: 0.15,
    icon: PersonIcon
  }
]

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  return (

    <div className="fixed bottom-18 sm:bottom-28 w-full ">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            layoutId="wrapper"
            transition={{
              type: "spring",
              duration: 0.4,
            }}
            className="mx-auto max-w-[200px]  bg-white/20 backdrop-blur-sm absolute inset-x-0 bottom-0 z-30">
            <div className="min-h-[100px]

             inset-shadow-sm inset-shadow-slate-500/50
            outline-1 outline-gray-300
            rounded-3xl ">

              <div className="p-1.5">
                <ul className="pt-2 px-1">
                  {OPTIONS.map((option) => (
                    <li key={option.label} className=" text-gray-600 h-10 flex items-center">
                      <Link onClick={() => setIsOpen(false)} prefetch={true}
                            href={option.url}
                            className="text-lg/6 font-semibold capitalize px-2.5 w-full flex justify-between">
                        {option.label}
                        <option.icon className="size-4"/>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <button onClick={() => setIsOpen(false)}
                          className="
                          bg-white
                           inset-shadow-sm inset-shadow-slate-500/50
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
          type="button"
          onClick={() => setIsOpen(true)}
          whileTap={{scale: 0.95}}
          transition={{type: "spring", stiffness: 300, damping: 40}}
          className=" w-full
            bg-white/30 backdrop-blur-sm
          inset-shadow-sm inset-shadow-slate-500/50
          outline-1 outline-gray-300
          rounded-3xl px-4 py-2.5  cursor-pointer">
          <motion.div layout="position">
            Menu
          </motion.div>
        </motion.button>
      </div>
    </div>

  )
}

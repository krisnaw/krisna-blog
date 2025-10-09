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
    <div className="flex justify-center items-end w-full h-[500px] bottom-14 fixed">


      <motion.button
        onClick={() => {
          setOpen(true);
        }}
        type="button"
        layoutId="wrapper"
        className="relative bottom-0 rounded-xl bg-neutral-700 text-white px-3 py-2 text-sm font-semibold  shadow-xs hover:bg-cyan-500 cursor-pointer"
      >
        <motion.span layout="position">
          Menu
        </motion.span>
      </motion.button>


      <AnimatePresence mode="sync">
        {open && (
          <motion.div
            layoutId="wrapper"
            className="absolute z-40 flex flex-col "
            ref={ref}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <div role="dialog" className="rounded-2xl p-6 w-[240px] bg-neutral-700 text-white shadow h-64 ">
              {/*Menu Content*/}
              <div className="mt-6">
                <ul>
                  <li>menu</li>
                </ul>
              </div>

              {/*Close button*/}
              <div className="mt-6">
                <button
                  className="w-full border-gray-500 border rounded-xl"
                  onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  )
}

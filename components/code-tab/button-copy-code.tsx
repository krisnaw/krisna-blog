"use client"

import {CheckIcon, Copy} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {toast} from "sonner";
import {useEffect, useState} from "react";

const SIZE = 14;

export default function ButtonCopyCode({code} : {code: string}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [copied])


  const onClickHandler = () => {
    toast.success("Copied to clipboard")
    setCopied(true);
    navigator.clipboard.writeText(code);
  }
  return (
    <motion.button

      initial={{ scale: 1 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}

      className="
      cursor-pointer
      size-8 flex items-center justify-center
      outline outline-gray-300 rounded-lg
      hover:bg-outline-200
      text-gray-500
      transition-colors duration-200 ease-out will-change-transform"
      onClick={onClickHandler} >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={copied ? "copied" : "copy"}
          initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
        >
          {copied ? <CheckIcon size={SIZE} /> :  <Copy size={SIZE} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
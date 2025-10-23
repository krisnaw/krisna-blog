"use client"

import {CheckIcon, Copy} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import {toast} from "sonner";
import {useEffect, useState} from "react";

const SIZE = 16;

export default function ButtonCopyCode({code} : {code: string}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [copied])
  
  const onClickHandler = () => {
    setCopied(true);
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard")
  }
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      className="
      cursor-pointer
      shrink-0
      p-1.5
      inline-flex items-center justify-center rounded-md
      border bg-background shadow-xs
      text-gray-500"
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
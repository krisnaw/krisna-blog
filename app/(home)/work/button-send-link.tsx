"use client"
import styles from './button-send-link.module.css'
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {Loader2} from "lucide-react";

const buttonCopy = {
  idle: "Send me a login link",
  loading: <Loader2 className="animate-spin" />,
  success: "Login link sent!",
};


export function ButtonSendLink() {
  const [buttonState, setButtonState] = useState<string>("idle");
  const onClickHandler = () => {

    setButtonState("loading")

    setTimeout(() => {
      setButtonState("success");
    }, 1750);

    setTimeout(() => {
      setButtonState("idle");
    }, 3500);
  };

  return (
    <div className={styles.outerWrapper}>
      <button className={styles.blueButton} onClick={onClickHandler}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span

            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            key={buttonState}
          >
            {buttonCopy[buttonState as keyof typeof buttonCopy]}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  )
}
"use client"
import {useState} from "react";
import styles from './height-anima.module.css'
import useMeasure from "react-use-measure";
import {motion} from "framer-motion";
import {
  Ban,
  BookKey,
  CircleAlert,
  ExternalLink,
  LockIcon,
  ScanEye,
  ShieldCheck,
  TableIcon,
  TrashIcon,
  X
} from "lucide-react";
import {Button} from "@headlessui/react";

export default function HeighAnimation() {
  const [elementRef, bounds] = useMeasure();

  const [contentType, setContentType] = useState<string>("idle")

  const onClickHandler = (type: string) => {
    if (type === contentType) {
      return setContentType("idle")
    }

    if (type !== contentType) {
      setContentType("idle")
      setContentType(type)
    }

  }

  return (
    <div className="shadow-lg rounded-xl">
      <motion.div animate={{ height: bounds.height  }} transition={{ ease: "easeInOut" }} className={styles.element}>
        <div ref={elementRef} className={styles.inner}>

          {contentType === "private-key" &&  (
            <div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">
                  <BookKey size={24} className="text-neutral-500" />
                </div>
                <div className="font-semibold text-neutral-500">
                  <Button  onClick={() => setContentType("idle")}>
                    <X />
                  </Button>
                </div>
              </div>

              <div className="my-10">
                <h5 className="text-lg font-semibold text-neutral-500">Private key</h5>
                <p>
                  Your Secret Recovery Phrase is the key used to backup your wallet.
                  Keep it secret at times.
                </p>

                <hr className="my-4 border-gray-200" />

                <ul className="text-neutral-500 space-y-3.5">
                  <li className="flex gap-2">
                    <ShieldCheck /> Keep your secret phrase safe.
                  </li>
                  <li className="flex gap-2">
                    <ExternalLink /> Don&#39;t share with anyone.
                  </li>
                  <li className="flex gap-2">
                    <Ban /> If you lose it, you can&#39;t recover it.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-6">
                <Button className="rounded-full"  onClick={() => setContentType("idle")}>Cancel</Button>
                <Button className="rounded-full"  onClick={() => setContentType("idle")}>Continue</Button>
              </div>
            </div>
          )}

          {contentType === "recovery-phrase" &&  (
            <div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">
                  <ScanEye size={24} className="text-neutral-500" />
                </div>
                <div className="font-semibold text-neutral-500">
                  <Button  onClick={() => setContentType("idle")}>
                    <X />
                  </Button>
                </div>
              </div>

              <div className="my-10">
                <h5 className="text-lg font-semibold text-neutral-500">Secret recovery phrase</h5>
                <p className="mt-2.5">
                  You haven&#39;t backed up your wallet yet. If you remove it, you could lose access forever.
                  We suggest tapping and backing up your wallet first with a valid recovery method.
                </p>

                <hr className="my-4 border-gray-200" />

                <ul className="text-neutral-500 space-y-3.5">
                  <li className="flex gap-2">
                    <ShieldCheck /> Keep your secret phrase safe.
                  </li>
                  <li className="flex gap-2">
                    <ExternalLink /> Don&#39;t share with anyone.
                  </li>
                  <li className="flex gap-2">
                    <Ban /> If you lose it, you can&#39;t recover it.
                  </li>
                </ul>

              </div>

              <div className="grid grid-cols-2 gap-2 mt-6">
                <Button className="rounded-full"  onClick={() => setContentType("idle")}>Cancel</Button>
                <Button className="rounded-full"  onClick={() => setContentType("idle")}>Continue</Button>
              </div>
            </div>
          )}

          {contentType === "remove-wallet" &&  (
            <div>

              <div className="flex justify-between items-center">
                <div className="font-semibold">
                  <CircleAlert size={24} className="text-red-500" />
                </div>
                <div className="font-semibold text-neutral-500">
                  <Button  onClick={() => setContentType("idle")}>
                    <X />
                  </Button>
                </div>
              </div>


              <div className="my-10">
                <h5 className="text-lg font-semibold text-neutral-500">Are you sure?</h5>
                <p>
                  You haven&#39;t backed up your wallet yet. If you remove it, you could lose access forever.
                  We suggest tapping and backing up your wallet first with a valid recovery method.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-2 mt-6">
                <Button className="rounded-full"  onClick={() => setContentType("idle")}>Cancel</Button>
                <Button className="rounded-full" onClick={() => setContentType("idle")}>Continue</Button>
              </div>
            </div>
          )}

          {contentType === "idle" &&  (
            <div className="pb-12">
              <div className="font-semibold">
                Options
              </div>
            </div>
          )}

          {contentType === "idle" &&  (
            <ul className="space-y-4">
              <li>
                <Button  className="capitalize w-full justify-start cursor-pointer rounded-full"
                        onClick={() => onClickHandler("private-key")}>
                  <LockIcon className="text-neutral-500" />
                  View private key
                </Button>
              </li>

              <li>
                <Button  className="capitalize w-full justify-start cursor-pointer rounded-full"
                        onClick={() => onClickHandler("recovery-phrase")}>
                  <TableIcon className="text-neutral-500" />
                  View recovery phrase
                </Button>
              </li>

              <li>
                <Button  className="capitalize w-full justify-start cursor-pointer rounded-full"
                        onClick={() => onClickHandler("remove-wallet")}>
                  <TrashIcon />
                  Remove wallet
                </Button>
              </li>
            </ul>
          )}

        </div>
      </motion.div>
    </div>
  )
}

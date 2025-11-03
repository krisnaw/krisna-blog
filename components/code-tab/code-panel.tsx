import {BundledLanguage, BundledTheme, codeToHtml} from "shiki";
import {transformerNotationHighlight} from "@shikijs/transformers";
import {useEffect, useState} from "react";
import {toast} from "sonner";
import {AnimatePresence, motion} from "framer-motion";
import {CheckIcon, Copy} from "lucide-react";

const SIZE = 16;

type Props = {
  code: string;
  filename?: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
}

async function CodePanel({code, filename, lang = "jsx", theme = "github-light"}: Props) {
  if (!code) return null

  const html = await codeToHtml(code, {
    lang: lang,
    theme: theme,
    transformers: [transformerNotationHighlight()]
  })

  return (
    <div
      data-slot="code-panel"
      className="not-prose rounded-md outline outline-gray-300 min-w-xl">

      <div className="p-4">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>

  )
}

function CodeProvider() {
  return (
    <div>sdf</div>
  )
}

function CodeHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="code-header"
      className="p-2 bg-gray-100/70 border-b border-gray-200 rounded-t-md"{...props}
    />
  )
}

function CodeDisplay() {
  return (
    <div>sdf</div>
  )
}

function CodeCopy({code} : {code: string}) {
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
      hover:bg-gray-100
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

export {
  CodePanel,
  CodeHeader,
}
import {BundledLanguage, BundledTheme, codeToHtml} from "shiki";
import {transformerNotationHighlight} from "@shikijs/transformers";
import ButtonCopyCode from "@/components/code-tab/button-copy-code"; // Import the types from Shiki

type Props = {
  code: string;
  filename?: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
}

export default async function CodePanel({code, filename, lang = "jsx", theme = "github-light"}: Props) {
  if (!code) return null

  const html = await codeToHtml(code, {
    lang: lang,
    theme: theme,
    transformers: [transformerNotationHighlight()]
  })

  return (
    <div className="not-prose rounded-md outline outline-gray-300 min-w-xl">

      <div className="px-4 py-2 bg-gray-100/70 border-b border-gray-200 rounded-t-md">
        <div className="flex justify-between items-center w-full">
          <div className="capitalize">
            {filename && filename}
          </div>
          <div>
            <ButtonCopyCode code={code} />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>

  )
}
import {ProjectHeading} from "./project-heading";
import Image from "next/image";
import {ProjectSubheading} from "@/components/project-subheading";

export function Building() {
  return (
    <div>
      <div className="mb-5">
        <ProjectHeading>Building</ProjectHeading>
        <ProjectSubheading>
          Learn how to grow your business with our expert advice.
        </ProjectSubheading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <div className="group rounded-2xl outline outline-gray-200 p-2">
          <div className="bg-white rounded-lg outline outline-gray-200">
            <div className="flex justify-center items-center w-full">
              <Image src="/GolangLogo.webp" width={200} height={200} alt="golang" />
            </div>
          </div>
          <div className="p-2 mt-2">
            <h3 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">BetterInvoice</h3>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">The schematics for the first rocket I designed that successfully made it to orbit.</p>
          </div>
        </div>


      </div>
    </div>
  )
}

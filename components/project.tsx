import {SectionHeading} from "@/components/section-heading";
import Image from "next/image";

export function Projects() {
  return (
    <div>
      <div className="mb-5">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="group rounded-xl outline outline-gray-200 flex items-center">
          <div className="">
            <Image src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png" width={200} height={200} alt="golang" />
          </div>
        </div>
      </div>
    </div>
  )
}

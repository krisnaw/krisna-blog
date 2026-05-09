import {SectionHeading} from "@/components/section-heading";
import Image from "next/image";

export function Projects() {
  return (
    <div>
      <div className="mb-5">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="group rounded-2xl outline outline-gray-200 p-2">
          <div className="bg-white rounded-lg outline outline-gray-200">
            <div className="flex justify-center items-center w-full">
              <Image src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_LightBlue.png" width={200} height={200} alt="golang" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

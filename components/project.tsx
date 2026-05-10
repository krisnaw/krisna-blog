import {ProjectHeading} from "./project-heading";
import Image from "next/image";
import {ProjectSubheading} from "@/components/project-subheading";

export function Projects() {
  return (
    <div>
      <div className="mb-5">
        <ProjectHeading>Projects</ProjectHeading>
        <ProjectSubheading>
          Learn how to grow your business with our expert advice.
        </ProjectSubheading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="group rounded-2xl outline outline-gray-200 p-2">
          <div className="bg-white rounded-lg outline outline-gray-200">
            <div className="flex justify-center items-center w-full">
              <Image src="/GolangLogo.webp" width={200} height={200} alt="golang" />
            </div>
          </div>
        </div>

        <div className="group rounded-2xl outline outline-gray-200 p-2">
          <div className="bg-white rounded-lg outline outline-gray-200">
            <div className="flex justify-center items-center w-full">
              <Image src="/GolangLogo.webp" width={200} height={200} alt="golang" />
            </div>
          </div>
        </div>

        <div className="group rounded-2xl outline outline-gray-200 p-2">
          <div className="bg-white rounded-lg outline outline-gray-200">
            <div className="flex justify-center items-center w-full">
              <Image src="/GolangLogo.webp" width={200} height={200} alt="golang" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

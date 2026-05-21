import {ProjectHeading} from "./project-heading";
import Image from "next/image";
import {ProjectSubheading} from "@/components/project-subheading";
import {Project} from "@/lib/types";
import Link from "next/link";

export function Projects() {
  return (
    <div>
      <div className="mb-5">
        <ProjectHeading>Latest Projects</ProjectHeading>
        <ProjectSubheading>
          Learn how to grow your business with our expert advice.
        </ProjectSubheading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">

        {projects.map((project: Project) => (
          <div className="group rounded-lg outline outline-gray-200 pt-2.5 bg-stone-100" key={project.id}>
            <div className="h-14 px-4 ">
              <h3 className="text-base font-semibold text-gray-900">
                <Link href={project.link}>{project.name}</Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
              </p>
            </div>
            <div className="bg-white outline outline-gray-200 rounded-lg">
              <div className="flex justify-center items-center w-full">
                <Image src="/GolangLogo.webp" width={400} height={400} alt="golang" />
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}


const projects : Project[] = [
  {
    id: 1,
    name: "Barong Melali",
    description: "",
    image: "",
    link: "/project/barong-melali",
  },
  {
    id: 2,
    name: "BetterInvoice",
    description: "",
    image: "",
    link: "",
  },
]
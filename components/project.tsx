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
          A glimpse into my recent product that I've build. 
        </ProjectSubheading>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">

        {projects.map((project: Project) => (
          <div className="group rounded-lg outline outline-gray-200 pt-2.5 bg-stone-100" key={project.id}>
            <div className="min-h-14 px-4 pb-2.5">
              <div className="flex justify-between">
                <h3 className="text-base font-semibold text-gray-600">
                  <Link href={project.link}>{project.name}</Link>
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.year}
                </p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {project.description}
              </p>
            </div>
            <div className="bg-white outline outline-gray-200 rounded-lg">
              <div className="flex justify-center items-center w-full">
                <Image src="/GolangLogo.webp" width={350} height={350} alt="golang" />
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
    description: "An event management and registration web app built for Barong Cycling Team, the largest road cycling group in Bali",
    image: "",
    link: "/project/barong-melali",
    year: '2026'
  },
  {
    id: 2,
    name: "BetterInvoice",
    description: "An Invoice management app build for Freelancer in Indonesia.",
    image: "",
    link: "",
    year: '2026'
  },
]
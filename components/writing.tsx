import {ProjectHeading} from "./project-heading";
import {FileTextIcon} from "@/components/icons/file-text-icon";
import Link from "next/link";

export function Writing() {
  return (
    <div>
      <div className="mb-5">
        <ProjectHeading>Writing</ProjectHeading>
      </div>
      <div>
        <ul>
          <li className="rounded-2xl p-2 hover:bg-gray-100 hover:inset-ring hover:inset-ring-gray-500/10 hover:cursor-pointer">
            <div className="flex items-center">
              <div className="mr-4 shrink-0 inset-ring inset-ring-gray-500/10 rounded-lg bg-gray-50 py-1">
                <FileTextIcon className="text-gray-600" size={42}/>
              </div>
              <div className="relative">
                <h4 className="w-full truncate font-medium text-gray-800">
                  <Link href="/notes" prefetch={true}>
                    <span className="absolute inset-0" />
                    Details that make interfaces feel better
                  </Link>
                </h4>
                <p className="mt-1 text-gray-500">
                  {new Date().toLocaleDateString("id-ID")}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

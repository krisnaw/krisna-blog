import Link from "next/link";
import {CornerUpLeft, LinkIcon} from "lucide-react";

export const PageHeader = () => {
  return (
    <div className="flex justify-between pb-12 pt-24">
      <Link href="/" className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-200 transition-[scale,background-color] duration-200 ease-out hover-hover:hover:bg-gray-400 active:scale-[0.97] will-change-transform">
        <CornerUpLeft className="mr-0.5 size-4.5 text-neutral-400 transition-colors duration-200 ease-out group-hover:text-neutral-800" />
      </Link>
      <div className="group flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-neutral-200 transition-[scale,background-color] duration-200 ease-out hover-hover:hover:bg-gray-400 active:scale-[0.97] will-change-transform">
        <LinkIcon className="mr-0.5 size-4.5 text-neutral-400 transition-colors duration-200 ease-out group-hover:text-neutral-800" />
      </div>
    </div>

  )
}
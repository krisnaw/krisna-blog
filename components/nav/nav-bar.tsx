'use client'

import {HomeIcon} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {NavMenu} from "@/components/nav/nav-menu";

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full flex justify-center border-b border-gray-300 bg-[#f9f6f1]">
      <nav aria-label="Global" className="py-4.5 px-4 max-w-7xl w-full border-r border-l border-gray-300">
        <ul className="flex items-center justify-between">
          <li>
            <div className="flex lg:flex-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Home</span>
                  <HomeIcon className="h-[1.2rem] w-[1.2rem]"/>
                </Link>
              </Button>
            </div>
          </li>

          <li>
            <div>
              <ul className="flex items-center space-x-6">
                <NavMenu />
                <li>
                  <Button className="rounded-full text-white bg-[#2090FF] cursor-pointer"  size="lg">
                    Get in Touch
                  </Button>
                </li>

                <li>
                  <Button size="lg" variant="ghost" className="cursor-pointer px-0">
                    <img src="https://cdn.prod.website-files.com/5e8545568347402d733f53f2/67a9f8a9a0a97f8ca755cbe3_LinkedIn%20-%20Negative.svg" alt=""/>
                  </Button>
                </li>

              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

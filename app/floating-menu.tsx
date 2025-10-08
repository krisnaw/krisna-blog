"use client"
import {useState} from "react";

const MENU = [
  {
    id: 1,
    label: "Menu",
    icon: "menu",
  },
]

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-40 bottom-14 w-full flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div
          className="
          outline-1 outline-neutral-600
          border-t border-neutral-500
          bg-[#3f3f3f] pt-2 text-white w-[230px] min-h-40 rounded-2xl p-1.5 relative flex flex-col justify-between">

          <div className="pt-2">
            <ul className="px-2.5">

              <li className="h-10">
                <button className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-chevron-right-icon lucide-chevron-right">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>

                  <span className="flex-1 text-left">
                    About
                  </span>

    

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-rss-icon lucide-rss">
                    <path d="M4 11a9 9 0 0 1 9 9"/>
                    <path d="M4 4a16 16 0 0 1 16 16"/>
                    <circle cx="5" cy="19" r="1"/>
                  </svg>
                </button>
              </li>

              <li className="h-10">
                <a href="/notes" className="font-semibold text-lg cursor-pointer flex items-center justify-between w-full">

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                       className=" invisible lucide lucide-chevron-right-icon lucide-chevron-right">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>

                  <span className="flex-1 text-left">
                    Blog
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                       className="lucide lucide-receipt-text-icon lucide-receipt-text">
                    <path d="M13 16H8"/>
                    <path d="M14 8H8"/>
                    <path d="M16 12H8"/>
                    <path
                      d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"/>
                  </svg>
                </a>
              </li>

            </ul>
          </div>

          <button
            className="mt-6 w-full py-2 bg-neutral-600 text-neutral-300 flex items-center justify-center border border-neutral-500 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}>


            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-chevron-down-icon lucide-chevron-down">
              <path d="m6 9 6 6 6-6"/>
            </svg>

          </button>

        </div>

        <div className="mt-4">
          <button

            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 bg-neutral-500 rounded-full px-3.5 py-1 text-white outline-1 outline-amber-300">
            Menu

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"
                 className="lucide lucide-chevron-up-icon lucide-chevron-up">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  )
}
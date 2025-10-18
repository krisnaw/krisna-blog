import React from "react";

export function LinearMenu() {
  return (
    <div>
      <div className="outline p-4 mb-24 outline-zinc-200 bg-gradient-to-b from-zinc-100/10 to-zinc-200/30  rounded-xl text-xs">
        <div className="bg-zinc-200/20 w-full h-full rounded-sm outline outline-zinc-200 relative">

          <div className="grid grid-cols-[1fr_2fr] divide-x divide-zinc-200">

            <div className="p-4">
              <div className="font-medium text-gray-500 px-2 capitalize">
                Core features
              </div>
              <ul className="mt-4">
                <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                  <a href="">
                    <div className="flex flex-col gap-y-1.5">
                      <span className="text-gray-800 font-medium">Plan</span>
                      <span className="text-gray-500">
                            Set the product direction with projects and initiatives
                          </span>
                    </div>
                  </a>
                </li>
                <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                  <a href="">
                    <div className="flex flex-col gap-y-1.5">
                      <span className="text-gray-800 font-medium">Build</span>
                      <span className="text-gray-500">
                            Make progress with issue tracking and cycle planning
                          </span>
                    </div>
                  </a>
                </li>

              </ul>
            </div>

            <div className="p-4">
              <div className="font-medium text-gray-500 px-2 capitalize">
                More
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <ul className="">
                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Customer requests</span>
                        <span className="text-gray-500">
                              Manage user feedback
                          </span>
                      </div>
                    </a>
                  </li>
                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Insight</span>
                        <span className="text-gray-500">
                              Realtime analytics
                          </span>
                      </div>
                    </a>
                  </li>

                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Linear Asks</span>
                        <span className="text-gray-500">
                              Workplaces requests
                          </span>
                      </div>
                    </a>
                  </li>

                </ul>
                <ul className="">
                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Integrations</span>
                        <span className="text-gray-500">
                            Collaborate across tools
                          </span>
                      </div>
                    </a>
                  </li>
                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Mobile app</span>
                        <span className="text-gray-500">
                            Linear in your pocket
                          </span>
                      </div>
                    </a>
                  </li>

                  <li className="hover:bg-zinc-200/30 rounded-lg p-2">
                    <a href="">
                      <div className="flex flex-col gap-y-1.5">
                        <span className="text-gray-800 font-medium">Artificial intelligence</span>
                        <span className="text-gray-500">
                            AI-powered workflows
                          </span>
                      </div>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>



    </div>
  )
}
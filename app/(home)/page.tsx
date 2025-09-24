import BlankSection from "@/components/section/blank-section";

export default function Page() {
   return (
       <div>

          {/*HEADER*/}
          <header className="border-b border-gray-300">
             <div className="mx-auto max-w-5xl p-4 border-r border-l border-gray-300">
                <nav className="">
                   <ul>
                      <li>Home</li>
                   </ul>
                </nav>
             </div>
          </header>


          <main className="mx-auto max-w-5xl border-r border-l border-gray-300">

             <div className="divide-y divide-gray-300">

                {/*HERO*/}
                <div>
                   <div className="py-24 w-full h-full">
                      <div className="text-center">
                         <h2 className="text-5xl">
                            Next Generation Tooling
                         </h2>
                      </div>
                   </div>

                   <div className="relative min-h-96 overflow-hidden opacity-75">

                      <svg fill="none" className="absolute inset-0 size-full stroke-gray-900/10">
                         <defs>
                            <pattern id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9" width="10" height="10" x="0"
                                     y="0" patternUnits="userSpaceOnUse">
                               <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                            </pattern>
                         </defs>
                         <rect width="100%" height="100%" fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                               stroke="none">
                         </rect>
                      </svg>



                   </div>
                </div>

                <BlankSection />

             </div>

          </main>

          <div className=" border-t border-gray-300">
             <div className="mx-auto max-w-5xl border-r border-l border-gray-300">
                <div className="px-4 sm:px-6 lg:px-8">

                   <div className="pt-24 flex ">
                      <div className="flex flex-col items-start gap-4 max-w-2xl">
                         <h2 className="text-4xl font-medium">The Mission</h2>
                         <p className="leading-relaxed text-gray-600">
                            We are building a unified high-performance toolchain for JavaScript: including parser, transformer, resolver, linter, formatter, minifier, bundler, test runner, and meta framework support. Our mission is to make the next generation of JavaScript developers more productive than ever before.
                         </p>
                      </div>
                      <div>
                         Animate
                      </div>
                   </div>

                   <div className="py-24">
                      <div
                          className="relative h-96 overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">

                         <svg fill="none" className="absolute inset-0 size-full stroke-gray-900/10">
                            <defs>
                               <pattern id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9" width="10" height="10" x="0"
                                        y="0" patternUnits="userSpaceOnUse">
                                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                               </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
                                  stroke="none"></rect>
                         </svg>

                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/*Footer*/}
          <footer className="border-t border-gray-300 bg-white">
             <div className="mx-auto max-w-5xl border-r border-l border-gray-500">
                <div className="grid grid-cols-1 sm:grid-cols-3">
                   <div>
                      Logo
                   </div>

                   <div className="text-center">
                      Copyright © 2024-2025 VoidZero Inc.
                   </div>

                   <div className="flex justify-end">
                      <ul className="grid grid-cols-3 gap-5 divide-x divide-gray-200 ">

                         <li className="flex justify-center item-center">
                            <div>
                               <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-8 ">
                                  <path
                                      d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                               </svg>
                            </div>
                         </li>

                         <li className="flex justify-center item-center">
                            <div>
                               <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-8 ">
                                  <path
                                      d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                               </svg>
                            </div>
                         </li>

                         <li className="flex justify-center item-center">
                            <div>
                               <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="size-8 ">
                                  <path
                                      d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                               </svg>
                            </div>
                         </li>

                      </ul>
                   </div>

                </div>
             </div>
          </footer>


       </div>
   )
}

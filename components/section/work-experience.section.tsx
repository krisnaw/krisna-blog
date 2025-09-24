export default function WorkExperienceSection() {
   return (
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
   )
}
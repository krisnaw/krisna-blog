import Link from "next/link";

export default function SiteHeader() {
   return (
      <header className="border-b border-gray-300">
         <div className="mx-auto max-w-5xl p-4 border-r border-l border-gray-300">
            <div className="flex justify-between">
               <div>
                  <Link href="/">Home</Link>
               </div>
               {/*<nav>*/}
               {/*   <ul className="inline-flex items-center space-x-2">*/}
               {/*      <li>Home</li>*/}
               {/*      <li>Blog</li>*/}
               {/*      <li>Team</li>*/}
               {/*   </ul>*/}
               {/*</nav>*/}
            </div>

         </div>
      </header>
   );
}

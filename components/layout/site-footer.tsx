import {GithubIcon} from "@/components/icon/github.icon";
import {XIcon} from "@/components/icon/x.icon";
import {LinkedinIcon} from "@/components/icon/linkedin.icon";
import {GmailIcon} from "@/components/icon/gmail.icon";

const socials = [
   {
      url: "mail:to",
      icon: GmailIcon,
   },
   {
      url: "https://github.com",
      icon: GithubIcon,
   },
   {
      url: "https://twitter.com",
      icon: XIcon,
   },
   {
      url: "linkedin.com",
      icon: LinkedinIcon,
   }
]

export default function SiteFooter() {
   return (
      <footer className="border-t border-gray-300 bg-white">
         <div className="mx-auto max-w-5xl border-r border-l border-gray-300">
            <div className="grid grid-cols-1 sm:grid-cols-3">
               <div>Logo</div>
               <div className="text-center">Copyright © 2024-2025 VoidZero Inc.</div>

               <div className="flex justify-end">
                  <ul className={`grid grid-cols-${socials.length}`}>

                     {socials.map((social) => (
                         <li key={social.url} className="py-2.5 px-4 flex justify-center item-center hover:bg-gray-600">
                            <a>
                               <social.icon className="w-10 h-10 text-gray-600" />
                            </a>
                         </li>
                     ))}

                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}

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
    <footer className="border-t border-gray-300 bg-white fixed bottom-0 w-full">
      <div className="mx-auto max-w-5xl border-r border-l border-gray-300">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 ">
          <div className="text-center">Contact</div>

          <div>
            <ul className={`grid grid-cols-4 gap-x-4`}>
              {socials.map((social) => (
                <li key={social.url} className="flex justify-center item-center hover:bg-gray-600 py-4 px-2.5">
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

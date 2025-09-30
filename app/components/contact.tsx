import {MailIcon} from "@/components/icon/mail.icon";
import React from "react";

const socials = [
  {
    name: "Mail",
    url: "https://www.facebook.com/sharer/sharer",
    icon: MailIcon,
  },
  {
    name: "X",
    url: "https://www.instagram.com/sharer/sharer",
    icon: MailIcon,
  }
]

export function Contact() {
  return (
    <div className="flex space-x-2">
      {socials.map((social) => (
        <a href={social.url} key={social.url}
           className="transition active:scale-[0.9]
                    cursor-pointer h-9 gap-1.5 inline-flex items-center rounded-full bg-gray-200 hover:bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600">
          <social.icon className="size-5 text-gray-600"/>
          {social.name}
        </a>
      ))}
    </div>
  )
}
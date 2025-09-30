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
           inset-ring inset-ring-gray-300
                    cursor-pointer h-9 inline-flex items-center rounded-lg bg-gray-200 hover:bg-gray-100 py-1 px-2.5 text-sm font-medium text-gray-600">
          <social.icon className="size-5 text-gray-600"/>
        </a>
      ))}
    </div>
  )
}
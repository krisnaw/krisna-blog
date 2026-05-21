import Link, {LinkProps} from "next/link";
import React from "react";

export function BlueLink({ children, href } : { children: React.ReactNode, href: LinkProps['href']}) {
  return (
    <Link className="text-blue-600 hover:text-blue-800 hover:underline font-semibold" href={href}>{children}</Link>
  )
}
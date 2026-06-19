import Link, {LinkProps} from "next/link";
import React from "react";

export function BlueLink({ children, href } : { children: React.ReactNode, href: LinkProps['href']}) {
  return (
    <Link className="text-link font-medium underline underline-offset-4 decoration-link/30 transition-colors duration-150 hover:decoration-link" href={href}>{children}</Link>
  )
}
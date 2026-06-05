import React from "react";
import Link from "next/link";
import {SiteFooter} from "@/components/site-layout";

export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased flex flex-col">
      <nav className="mx-auto w-full max-w-2xl px-6 py-5" style={{ viewTransitionName: "site-nav" }}>
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-[#767676] transition-colors duration-150 hover:text-[#0d0d0c]"
        >
          ← back
        </Link>
      </nav>
      {children}
      <SiteFooter />
    </div>
  )
}
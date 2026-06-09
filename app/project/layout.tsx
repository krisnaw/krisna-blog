import React from "react";
import Link from "next/link";
import {SiteFooter} from "@/components/site-layout";
import {ThemeToggle} from "@/components/theme-toggle";

export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-5" style={{ viewTransitionName: "site-nav" }}>
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          ← back
        </Link>
        <ThemeToggle />
      </nav>
      {children}
      <SiteFooter />
    </div>
  )
}

import Link from "next/link"
import type {ReactNode} from "react"
import {ThemeToggle} from "@/components/theme-toggle"

const navLinks = [
  { label: "notes", href: "/notes" },
  { label: "animation", href: "/animation" },
  { label: "frontend prep", href: "/frontend-prep" },
]

export function SiteNav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
      style={{ viewTransitionName: "site-nav" }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Krisna Wijaya – Home"
          className="font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
        >
          kw
        </Link>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-5">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground transition-colors duration-150 hover:text-foreground active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-6">
        <p className="font-mono text-[10px] text-muted-foreground tracking-wide">
          © 2026 Krisna Wijaya
        </p>
      </div>
    </footer>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
      <SiteNav />
      <div className="mx-auto w-full max-w-3xl flex-1 flex flex-col">
        {children}
      </div>
      <SiteFooter />
    </div>
  )
}

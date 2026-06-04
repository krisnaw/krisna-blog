import Link from "next/link"
import type { ReactNode } from "react"

const navLinks = [
  { label: "notes", href: "/notes" },
  { label: "animation", href: "/animation" },
]

export function SiteNav() {
  return (
    <nav style={{ viewTransitionName: "site-nav" }}>
      <div className="mx-auto flex max-w-135 items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-xs tracking-[0.18em] uppercase text-[#767676]"
        >
          kw
        </Link>
        <ul className="flex items-center gap-5">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676] transition-colors duration-150 hover:text-[#333] active:scale-[0.97]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="mx-auto max-w-135 px-6 py-6">
        <p className="font-mono text-[10px] text-[#767676] tracking-wide">
          © 2026 Krisna Wijaya
        </p>
      </div>
    </footer>
  )
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased flex flex-col font-features-['ss01']">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  )
}

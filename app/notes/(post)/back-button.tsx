"use client"

import Link from "next/link"

export default function BackButton() {
  return (
    <Link
      href="/notes"
      transitionTypes={["nav-back"]}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-150 hover:text-foreground"
    >
      ← back
    </Link>
  )
}

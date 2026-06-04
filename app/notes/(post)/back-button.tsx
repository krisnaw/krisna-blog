"use client"

import Link from "next/link"

export default function BackButton() {
  return (
    <Link
      href="/notes"
      transitionTypes={["nav-back"]}
      className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide text-[#767676] transition-colors duration-150 hover:text-[#0d0d0c]"
    >
      ← back
    </Link>
  )
}

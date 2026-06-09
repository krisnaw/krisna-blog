"use client"

import {Moon, Sun} from "lucide-react"
import {useTheme} from "next-themes"
import {useEffect, useState} from "react"

export function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex size-10 items-center justify-center rounded-full bg-background text-muted-foreground shadow-sm transition-[background-color,color,scale] duration-150 hover:bg-accent hover:text-foreground active:scale-[0.96] disabled:pointer-events-none disabled:opacity-60"
    >
      <Sun
        className={`absolute size-4 transition-[opacity,scale,filter] duration-200 ${mounted && !isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-sm"}`}
        aria-hidden="true"
        strokeWidth={1.8}
      />
      <Moon
        className={`absolute size-4 transition-[opacity,scale,filter] duration-200 ${mounted && isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-sm"}`}
        aria-hidden="true"
        strokeWidth={1.8}
      />
    </button>
  )
}

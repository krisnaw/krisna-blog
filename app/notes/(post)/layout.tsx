import {Suspense} from "react"
import Link from "next/link"
import {SiteFooter} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"
import BackButton from "@/app/notes/(post)/back-button"
import {MainContent} from "@/app/notes/(post)/main-content"
import {getPosts} from "@/app/notes/getPosts"
import {Header} from "@/app/notes/(post)/header"
import {ThemeToggle} from "@/components/theme-toggle"

export default async function MdxLayout({children}: {children: React.ReactNode}) {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md" style={{ viewTransitionName: "site-nav" }}>
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/" aria-label="Krisna Wijaya – Home" className="font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors duration-150 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-sm">
            kw
          </Link>
          <div className="flex items-center gap-3">
            <Suspense>
              <BackButton />
            </Suspense>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <DirectionalTransition>
        <div className="mx-auto w-full max-w-3xl px-6 pt-8 pb-24 flex-1">
          <Header posts={posts} />
          <Suspense fallback={null}>
            <MainContent>{children}</MainContent>
          </Suspense>
        </div>
      </DirectionalTransition>

      <SiteFooter />
    </div>
  )
}

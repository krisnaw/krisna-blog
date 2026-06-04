import {Suspense} from "react"
import Link from "next/link"
import {SiteFooter} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"
import BackButton from "@/app/notes/(post)/back-button"
import {MainContent} from "@/app/notes/(post)/main-content"
import {getPosts} from "@/app/notes/getPosts"
import {Header} from "@/app/notes/(post)/header"

export default async function MdxLayout({children}: {children: React.ReactNode}) {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased flex flex-col">
      <nav className="mx-auto w-full max-w-135 px-6 py-5" style={{ viewTransitionName: "site-nav" }}>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-mono text-xs tracking-[0.18em] uppercase text-[#767676]">
            kw
          </Link>
          <Suspense>
            <BackButton />
          </Suspense>
        </div>
      </nav>

      <DirectionalTransition>
        <div className="mx-auto w-full max-w-135 px-6 pt-8 pb-24 flex-1">
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

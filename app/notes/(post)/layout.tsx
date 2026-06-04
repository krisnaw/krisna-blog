import {Suspense} from "react"
import BackButton from "@/app/notes/(post)/back-button"
import {MainContent} from "@/app/notes/(post)/main-content"
import {getPosts} from "@/app/notes/getPosts"
import {Header} from "@/app/notes/(post)/header"
import Link from "next/link"

export default async function MdxLayout({ children }: { children: React.ReactNode }) {
  const posts = getPosts()
  return (
    <div className="min-h-screen bg-white text-[#0d0d0c] antialiased flex flex-col">

      {/* Nav */}
      <nav className="mx-auto w-full max-w-135 px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#767676]"
          >
            kw
          </Link>
          <Suspense>
            <BackButton />
          </Suspense>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto w-full max-w-135 px-6 pt-8 pb-24 flex-1">
        <Header posts={posts} />
        <Suspense fallback={null}>
          <MainContent>{children}</MainContent>
        </Suspense>
      </div>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
        <div className="mx-auto max-w-135 px-6 py-6">
          <p className="font-mono text-[10px] text-[#767676] tracking-wide">
            © 2026 Krisna Wijaya
          </p>
        </div>
      </footer>

    </div>
  )
}

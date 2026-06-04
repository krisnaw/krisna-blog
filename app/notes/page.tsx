import {getPosts} from "@/app/notes/getPosts"
import Image from "next/image"
import Link from "next/link"

export default function NotesPage() {
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
          <ul className="flex items-center gap-5">
            {[
              { label: "notes", href: "/notes" },
              { label: "animation", href: "/animation" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#767676] transition-colors hover:text-[#333]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="mx-auto w-full max-w-135 px-6 pt-8 pb-12">
        <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#767676]">
          Writing
        </p>
        <h1
          className="text-[2.25rem] leading-none tracking-[-0.02em] text-[#0d0d0c]"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          Notes
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#767676]">
          A tight collection of complete ideas, thoughts, and writings.
        </p>
      </header>

      {/* Posts */}
      <main className="mx-auto max-w-135 px-6 pb-24 flex-1 w-full">
        <ul
          className="divide-y"
          style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.08)" }}
          role="list"
        >
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/notes/${post.id}`}
                className="group flex items-start justify-between gap-6 py-5"
              >
                {/* Text */}
                <div className="min-w-0 space-y-1.5">
                  <p className="font-mono text-[10px] tracking-wide text-[#767676]">
                    {post.date}
                  </p>
                  <h2
                    className="text-2xl leading-snug tracking-[-0.01em] text-[#0d0d0c] transition-colors group-hover:text-[#444]"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-[#767676]">
                    {post.excerpt}
                  </p>
                </div>

                {/* Thumbnail */}
                <div className="relative shrink-0 overflow-hidden rounded-md"
                  style={{ width: 80, height: 60 }}>
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/8" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

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

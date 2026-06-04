import {getPosts} from "@/app/notes/getPosts"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"
import Image from "next/image"
import Link from "next/link"
import {ViewTransition} from "react"

export default function NotesPage() {
  const posts = getPosts()

  return (
    <SiteLayout>
      <DirectionalTransition>
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

        <main className="mx-auto max-w-135 px-6 pb-24 flex-1 w-full">
          <ul
            className="divide-y"
            style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderColor: "rgba(0,0,0,0.08)" }}
            role="list"
          >
            {posts.map((post) => (
              <ViewTransition key={post.id}>
                <li>
                  <Link
                    href={`/notes/${post.id}`}
                    transitionTypes={["nav-forward"]}
                    className="group flex items-start justify-between gap-6 py-5"
                  >
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

                    <ViewTransition name={`post-image-${post.id}`} share="morph" default="none">
                      <div className="relative shrink-0 overflow-hidden rounded-md" style={{ width: 80, height: 60 }}>
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/8" />
                      </div>
                    </ViewTransition>
                  </Link>
                </li>
              </ViewTransition>
            ))}
          </ul>
        </main>
      </DirectionalTransition>
    </SiteLayout>
  )
}

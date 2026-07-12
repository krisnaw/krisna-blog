import {getPosts} from "@/app/notes/getPosts"
import {SiteLayout} from "@/components/site-layout"
import {DirectionalTransition} from "@/components/view-transition"
import {MotionHeader, MotionListItem, MotionMain} from "@/components/page-motion"
import Image from "next/image"
import Link from "next/link"
import {ViewTransition} from "react"
import {Sparkles} from "lucide-react"

export default function NotesPage() {
  const posts = getPosts()

  return (
    <SiteLayout>
      <DirectionalTransition>
        <MotionHeader>
          <header className="mx-auto w-full max-w-3xl px-6 pt-8 pb-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <div
                  className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles className="size-3" aria-hidden="true" strokeWidth={1.8}/>
                  Writing
                </div>
                <h1
                  className="text-[2.75rem] leading-none tracking-[-0.02em] text-foreground text-balance"
                  style={{fontFamily: "var(--font-instrument-serif)"}}
                >
                  Notes
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground text-pretty">
                  A tight collection of complete ideas, thoughts, and writings.
                </p>
              </div>
            </div>
          </header>
        </MotionHeader>
        <MotionMain>
          <div className="mx-auto w-full max-w-3xl px-6 pb-10">
            <ul className="divide-y divide-border border-t border-border" role="list">
              {posts.map((post) => (
                <ViewTransition key={post.id}>
                  <MotionListItem>
                    <Link
                      href={`/notes/${post.id}`}
                      transitionTypes={["nav-forward"]}
                      className="group flex items-start justify-between gap-6 py-5"
                    >
                      <div className="min-w-0 space-y-1.5">
                        <p className="font-mono text-[10px] tracking-wide text-muted-foreground">
                          {post.date}
                        </p>
                        <h2
                          className="text-2xl leading-snug tracking-[-0.01em] text-foreground transition-colors group-hover:text-foreground/75"
                          style={{fontFamily: "var(--font-instrument-serif)"}}
                        >
                          {post.title}
                        </h2>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      </div>

                      <ViewTransition name={`post-image-${post.id}`} share="morph" default="none">
                        <div className="relative shrink-0 overflow-hidden rounded-md" style={{width: 80, height: 60}}>
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0 rounded-md ring-1 ring-inset ring-black/10 dark:ring-white/10"/>
                        </div>
                      </ViewTransition>
                    </Link>
                  </MotionListItem>
                </ViewTransition>
              ))}
            </ul>
          </div>
        </MotionMain>
      </DirectionalTransition>
    </SiteLayout>
  )
}

"use client"

import {PostType} from "@/app/notes/getPosts"
import {useSelectedLayoutSegments} from "next/navigation"
import Image from "next/image"

export function Header({posts}: {posts: PostType[]}) {
  const segments = useSelectedLayoutSegments()
  const post = posts.find(p => p.id === segments[segments.length - 1])

  if (!post) return null

  return (
    <div className="pb-10">
      <p className="mb-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[#767676]">
        {post.date}
      </p>
      <h1
        className="text-[2rem] leading-[1.1] tracking-[-0.02em] text-[#0d0d0c]"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        {post.title}
      </h1>

      {post.featuredImage && (
        <div className="relative mt-8 w-full overflow-hidden rounded-lg aspect-video">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/8" />
        </div>
      )}
    </div>
  )
}

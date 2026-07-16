"use client"

import {PostType} from "@/app/notes/getPosts"
import {useSelectedLayoutSegments} from "next/navigation"
import Image from "next/image"

export function Header({posts}: {posts: PostType[]}) {
  const segments = useSelectedLayoutSegments()
  const post = posts.find(p => p.id === segments[segments.length - 1])

  if (!post) return null

  return (
    <div>
      <div>
        <h1>
          {post.title}
        </h1>
        <span className="font-mono text-sm text-zinc-500">
          {post.date}
        </span>
      </div>
      {post.featuredImage && (
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) calc(100vw - 48px), 768px"
            quality={100}
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}

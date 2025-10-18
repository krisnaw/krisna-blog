"use client"

import {PostType} from "@/app/notes/getPosts";

export function Post({post}: { post: PostType }) {
  return (
    <li className="rounded-3xl p-2.5 bg-white outline outline-slate-100 hover:inset-shadow-sm hover:inset-shadow-slate-100">
      <div className="sm:flex">

        <div className="mr-4 shrink-0 self-center">
          <figure className="relative w-64">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="object-cover aspect-video  sm:aspect-2/1 lg:aspect-3/2 rounded-2xl shadow-sm"
                 src="https://blossom-carousel.com/images/flower/flower02.jpg" alt=""/>
          </figure>
        </div>

        <div className="py-4 relative pr-2">
          <h3 className="text-lg font-medium text-gray-900">
            <a href={`/notes/${post.id}`} className="hover:underline">
              <span className="absolute inset-0"></span>
              {post.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {post.excerpt}
          </p>
        </div>

      </div>

    </li>
  )
}
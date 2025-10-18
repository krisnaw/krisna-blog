"use client"

import {PostType} from "@/app/notes/getPosts";
import Image from "next/image";

export function Post({post}: { post: PostType }) {
  return (
    <li className="rounded-3xl p-2.5 bg-neutral-50 outline outline-slate-100 hover:inset-shadow-sm hover:inset-shadow-slate-100">

      <div className="sm:flex">
        <div className="mb-4 shrink-0 sm:mr-4 sm:mb-0">
          <div className="w-full sm:w-64">
            <Image
              // placeholder="blur"
              className="aspect-video  object-cover rounded-2xl"
              src={post.featuredImage} width={500} height={500} alt="Hello World"/>
          </div>
        </div>
        <div className="group relative grow p-4">
          <h4 className="text-lg font-bold text-gray-900">
            <a href={`/notes/${post.id}`} className="hover:underline">
              <span className="absolute inset-0 "></span>
              {post.title}
            </a>
          </h4>
          <p className="mt-1 text-gray-500">
            {post.excerpt}
          </p>
        </div>
      </div>

    </li>
  )
}
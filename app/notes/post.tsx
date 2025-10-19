"use client"

import {PostType} from "@/app/notes/getPosts";
import Image from "next/image";

export function Post({post}: { post: PostType }) {
  return (
    <li>

      <div className="flex flex-col items-start justify-between">

        <div className="flex items-center justify-center w-full">

          {/*<Image*/}
          {/*  // placeholder="blur"*/}
          {/*  className="h-64 w-full object-cover rounded-lg grayscale"*/}
          {/*  src={post.featuredImage} width={500} height={500} alt="Hello World" />*/}

          <Image
            className="h-64 w-full object-cover rounded-lg grayscale"
            src={post.featuredImage} width={600} height={400} alt="Hello World" />
        </div>

        <div className="flex flex-col pt-4 relative w-full min-h-32">
          <div className="text-xs text-gray-500">{post.date}</div>
          <h4 className="text-xl font-medium text-gray-950">
            <a href={`/notes/${post.id}`} className="hover:underline">
              <span className="absolute inset-0"></span>
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
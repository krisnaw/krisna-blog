"use client"

import {PostType} from "@/app/notes/getPosts";
import {useSelectedLayoutSegments} from "next/navigation";

export function Header({posts} : {posts: PostType[]}) {
  const segments = useSelectedLayoutSegments()
  const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-1 font-bold">{initialPost?.title}</h1>
      <div className="text-gray-600">
        {initialPost?.date}
      </div>
    </div>
  )
}

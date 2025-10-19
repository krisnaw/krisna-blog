"use client"

import {PostType} from "@/app/notes/getPosts";
import {useSelectedLayoutSegments} from "next/navigation";
import Image from "next/image";

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
      <div className="pt-4">

        { initialPost?.featuredImage && (
          <Image
            quality={100}
            className="h-96 w-full object-cover rounded-lg grayscale outline-1 outline-gray-300"
            src={initialPost?.featuredImage} width={800} height={400} alt="Hello World" />
        )}


      </div>
    </div>
  )
}

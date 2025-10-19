"use client"

import {PostType} from "@/app/notes/getPosts";
import {useSelectedLayoutSegments} from "next/navigation";
import Image from "next/image";
import {motion} from "framer-motion";

export function Header({posts} : {posts: PostType[]}) {
  const segments = useSelectedLayoutSegments()
  const initialPost = posts.find(
    post => post.id === segments[segments.length - 1]
  );

  return (
    <div className="text-center">
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <h1 className="text-3xl mb-1 font-bold">{initialPost?.title}</h1>
        <div className="text-gray-600">
          {initialPost?.date}
        </div>
      </motion.div>
      <div className="pt-6">
        { initialPost?.featuredImage && (
          <Image
            quality={100}
            className="h-44 sm:h-96 w-full object-cover  grayscale outline-1 outline-gray-300"
            src={initialPost?.featuredImage} width={800} height={400} alt="Hello World" />
        )}
      </div>
    </div>
  )
}

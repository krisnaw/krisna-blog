import {BlogPosts} from "@/app/notes/posts";

export default function Page() {
  return (

    <div className="py-20">
      <div className="mx-auto max-w-xl py-12">
        <div>
          <div className="text-3xl font-semibold">
            Notes
          </div>
          <div className="mt-10">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>


  )
}
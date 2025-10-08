import {BlogPosts} from "@/app/notes/posts";

export default function Page() {
  return (
    <div>
      <div className="text-3xl font-semibold">
        Notes
      </div>
      <div className="mt-10">
        <BlogPosts />
      </div>
    </div>
  )
}
import {getPosts} from "@/app/notes/getPosts";
import {Post} from "@/app/notes/post";

export default async function Page() {
  const posts = getPosts();
  return (
    <div className="py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8r">
        <div>
          <h1 className="text-3xl font-semibold text-left w-full">
            Notes
          </h1>
          <p className="mt-4 text-gray-500">
            A tight collection of complete ideas, thoughts, articles, and writings.
          </p>
        </div>
        <div className="mt-16">
          <ul role="list" className="divide-y divide-gray-200 space-y-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
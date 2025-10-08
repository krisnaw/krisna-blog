import {formatDate, getBlogPosts} from "./utils"

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  const notes = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1
      }
      return 1
    });

  return (
    <div className="not-prose">
      <ul className="divide-y divide-gray-300">
        {notes.map((post) => (
          <li key={post.slug}>
            <a
              className="inline-flex py-4"
              href={`/notes/${post.slug}`}>
              <div className="mr-4 w-16 h-16 shadow shrink-0 bg-white rounded-xl px-4 py-2.5 flex items-center justify-center">
                <span className="text-4xl">
                   {post.metadata.emoji}
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {post.metadata.title}
                </h4>
                <p className="mt-1 text-gray-500">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
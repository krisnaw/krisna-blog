import Link from 'next/link'
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
    <div>


      <ul className="divide-y divide-gray-300">
        {notes.map((post) => (
          <li key={post.slug}>
            <a
              className="flex py-4"
              href={`/notes/${post.slug}`}>
              <div className="mr-4 shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="size-16 border border-gray-300 bg-white text-gray-300"
                >
                  <path d="M0 0l200 200M0 200L200 0" strokeWidth={1} vectorEffect="non-scaling-stroke"/>
                </svg>
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


      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/notes/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
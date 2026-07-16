import {getPosts} from "@/app/notes/getPosts"
import Link from "next/link";
import {Header} from "@/app/notes/(post)/header";

export default async function MdxLayout({children}: {children: React.ReactNode}) {
  const posts = getPosts()

  return (
    <div className="min-h-screen bg-zinc-50 pb-20 pt-28 dark:bg-zinc-950">

      <div className="mx-auto max-w-3xl">

        <div>
          <Link href="/notes" className="text-sm text-zinc-600 dark:text-zinc-400">
            ← Notes
          </Link>
        </div>

        <div className="mt-4 rounded-xl border border-zinc-100 bg-white px-20 py-10 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mx-auto">
            <div className="typeset typeset-docs">
              <Header posts={posts} />

              <article className="text-zinc-600 dark:text-zinc-400">
                {children}
              </article>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

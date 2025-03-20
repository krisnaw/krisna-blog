'use client'

import Link from "next/link";
import {Post} from "@/lib/type";
import {format} from "date-fns";


export default function PostsListView({ posts }: { posts: Post[] }) {
    return (
        <ul className="space-y-8">
            {posts.map((post) => {

                return (
                    <li key={post.title} className="font-[family-name:var(--font-geist-mono)]">
                        <Link href={`/post/${post.slug}`} passHref={true}>
                            <p className="w-full inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                                {format(new Date(post.created_at), 'yyyy-MM-dd')}
                            </p>

                            <h2 className="text-md/6 text-center sm:text-left grow dark:text-gray-100">
                                {post.title}
                            </h2>

                            <p className="text-xs/6 text-center sm:text-left mt-1.5 dark:text-gray-100">
                                {post.excerpt}
                            </p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
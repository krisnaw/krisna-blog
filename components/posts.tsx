'use client'

import Link from "next/link";
import {Post} from "@/app/get-posts";
import {useMemo} from "react";


export default function Posts({ posts }: { posts: Post[] }) {

    const sorted = useMemo(() => {
        return [...posts].sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
    }, [posts])

    return (
        <ul className="space-y-8">
            {sorted.map((post) => {

                return (
                    <li key={post.title} className="font-[family-name:var(--font-geist-mono)]">
                        <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`} passHref={true}>

                            <p className="w-full inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                                {post.date}
                            </p>

                            <h2 className="text-md/6 text-center sm:text-left grow dark:text-gray-100">
                                {post.title}
                            </h2>

                            <p className="text-xs/6 text-center sm:text-left mt-1.5 dark:text-gray-100">
                                {post.summary}
                            </p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
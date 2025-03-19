import {getBlogPosts} from "@/lib/post-indexer";
import Link from "next/link";

export default async function BlogList() {
    const allBlogs =  getBlogPosts();
    console.log(allBlogs)
    return (
        <ul className="space-y-8">
            {allBlogs.map((post) => (
                <li key={post.metadata.title} className="font-[family-name:var(--font-geist-mono)]">
                    <Link href={`/blog/${post.slug}`} passHref={true}>

                        <p className="w-full inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                            {post.metadata.publishedAt}
                        </p>

                        <h2 className="text-md/6 text-center sm:text-left grow dark:text-gray-100">
                            {post.metadata.title}
                        </h2>

                        <p className="text-sm/6 text-center sm:text-left mt-1.5 dark:text-gray-100">
                            {post.metadata.summary}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
import Link from "next/link";

export default function Posts({ posts }: { posts: any[] }) {
    console.log(posts)
    return (
        <ul className="space-y-8">
            {posts.map((post) => (
                <li key={post.title} className="font-[family-name:var(--font-geist-mono)]">
                    <Link href={`/${new Date(post.date).getFullYear()}/${post.id}`} passHref={true}>

                        <p className="w-full inline-block self-start shrink-0 text-gray-500 dark:text-gray-500">
                            {post.date}
                        </p>

                        <h2 className="text-md/6 text-center sm:text-left grow dark:text-gray-100">
                            {post.title}
                        </h2>

                        <p className="text-sm/6 text-center sm:text-left mt-1.5 dark:text-gray-100">
                            {post.title}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
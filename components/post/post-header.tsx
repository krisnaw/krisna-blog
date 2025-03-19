import {Post} from "@/lib/type";
import {format} from "date-fns";

export function PostHeader({ post } : { post: Post }) {
    return (
        <div className="border-b pb-2 mb-4">
            <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
                {post.title}
            </h1>

            <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500">
                <span className="flex-grow">
                    <span>
                        <span>
                            <a href="https://x.com/iKrisnaw"
                               className="hover:text-gray-800 dark:hover:text-gray-400"
                               target="_blank">
                                @iKrisnaw
                            </a>
                        </span>
                        <span className="mx-2">|</span>
                    </span>
                    <span>
                        {format(post.created_at, 'yyyy-MM-dd')}
                    </span>
                </span>
            </p>
        </div>
    )
}
import {PostsTableView} from "@/components/post/posts-table-view";
import {Suspense} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getPosts} from "@/app/actions/post-action";
import {PlusIcon} from "lucide-react";
import {Post} from "@/lib/type";
import {NoPostState} from "@/components/post/no-post-state";

export default async function Page() {
    const posts: Post[] = await getPosts(true);

    if (posts.length === 0) {
        return (
            <div className="flex items-center justify-center">
                <NoPostState />
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <Button asChild>
                    <Link href="/post/create">
                        <PlusIcon /> New Post
                    </Link>
                </Button>
            </div>
            <div className="mt-5">
                <Suspense fallback={<div>Loading...</div>}>
                    <PostsTableView posts={posts}/>
                </Suspense>
            </div>
        </div>
    )
}
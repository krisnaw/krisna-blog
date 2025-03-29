import {PostsTableView} from "@/components/post/posts-table-view";
import {Suspense} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getPosts} from "@/app/actions/post-action";
import {PlusIcon} from "lucide-react";
import {Post} from "@/lib/type";
import {InputSearchPost} from "@/components/post/input-search-post";
import {parseSearchParams} from "@/lib/url-state";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

export default async function Page(  props: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {

    // search query
    const searchParams = await props.searchParams;
    const parsedSearchParams = parseSearchParams(searchParams);

    const posts: Post[] = await getPosts(true, parsedSearchParams.search);

    // if (posts.length === 0) {
    //     return (
    //         <div className="flex items-center justify-center">
    //             <NoPostState />
    //         </div>
    //     )
    // }

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <Button asChild>
                    <Link href="/posts/create">
                        <PlusIcon /> New Post
                    </Link>
                </Button>
            </div>
            <div className="mt-5">

                <div>
                    <InputSearchPost />
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <PostsTableView posts={posts}/>
                </Suspense>
            </div>
        </div>
    )
}
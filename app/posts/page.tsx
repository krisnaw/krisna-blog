import {PostTable} from "@/components/post-table";
import {Suspense} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getPosts} from "@/app/actions/post-action";
import {PlusIcon} from "lucide-react";

export default async function Page() {
    const posts = await getPosts(true);

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
                    <PostTable posts={posts}/>
                </Suspense>
            </div>
        </div>
    )
}
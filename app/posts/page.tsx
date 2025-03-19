import {createClient} from "@/utils/supabase/server";
import {PostTable} from "@/components/post-table";
import {Suspense} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function Page() {
    const supabase = await createClient();

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-end">
                <Button asChild>
                    <Link href="/post/create">Create</Link>
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
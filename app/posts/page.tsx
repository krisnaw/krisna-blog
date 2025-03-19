import {createClient} from "@/utils/supabase/server";
import {PostTable} from "@/components/post-table";
import {Suspense} from "react";

export default async function Page() {
    const supabase = await createClient();

    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PostTable posts={posts}/>
            </Suspense>
        </div>
    )
}
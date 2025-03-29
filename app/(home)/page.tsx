import PostsListView from "@/components/post/posts-list-view";
import type {Metadata} from 'next'
import {unstable_cache} from "next/cache";
import {createClient} from "@/utils/supabase/client";

export const metadata: Metadata = {
    title: 'Krisna Wijaya',
    description: 'An overview of my career, writing and example projects',
}

const getPostsList = unstable_cache(
    async () => {
        const supabase = await createClient();
        const { data: posts } = await  supabase.from('posts')
            .select('*')

            .order('created_at', { ascending: false })

        return posts;
    },
    ['posts'],
    { revalidate: 3600, tags: ['posts'] }
)


export default async function Home() {

    const posts = await getPostsList();

    return (
        <div>
            {posts && <PostsListView posts={posts}/>}
        </div>
    )
}

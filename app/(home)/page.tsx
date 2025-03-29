import PostsListView from "@/components/post/posts-list-view";
import {getPosts} from "@/app/actions/post-action";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Krisna Wijaya',
    description: 'An overview of my career, writing and example projects',
}

export default async function Home() {

    const posts = await getPosts();

    return (
        <div>
            {posts && <PostsListView posts={posts}/>}
        </div>
    )
}

import PostsListView from "@/components/post/posts-list-view";
import {getPosts} from "@/app/actions/post-action";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Krisna Wijaya',
    description: 'An overview of my career, writing and example projects',
    openGraph: {
        title: 'Krisna Wijaya',
        description: 'An overview of my career, writing and example projects',
        images: [{ url: '/about/opengraph-image' }]
    }
}


export default async function Home() {

    const posts = await getPosts();

    return (
        <div>
            <div>
                { posts && <PostsListView posts={posts} />}
            </div>
        </div>
    )
}

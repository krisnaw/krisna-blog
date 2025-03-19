import PostsListView from "@/components/post/posts-list-view";
import {getPosts} from "@/app/actions/post-action";

export default async function Home() {

    const posts = await getPosts();

    return (
        <div>
            { posts && <PostsListView posts={posts} />}
        </div>
    )
}

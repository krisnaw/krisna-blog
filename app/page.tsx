import Posts from "@/components/posts";
import {getPosts} from "@/app/actions/post-action";

export default async function Home() {

    const posts = await getPosts();

    return (
        <div>
            { posts && <Posts posts={posts} />}
        </div>
    )
}

import {getPosts} from "@/app/get-posts";
import Posts from "@/components/posts";

export default async function Home() {
    const posts = await getPosts();
    return (
        <div>
            <Posts posts={posts} />
        </div>
    )
}

import PostsListView from "@/components/post/posts-list-view";
import {getPosts} from "@/app/actions/post-action";
import {BlurFade} from "@/components/ui/blur-fade";

export default async function Home() {

    const posts = await getPosts();

    return (
        <div>
            <div className="mb-5">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Hello World 👋
                    </h2>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
                        Nice to meet you
                    </span>
                </BlurFade>
            </div>
            <div>
                { posts && <PostsListView posts={posts} />}
            </div>
        </div>
    )
}

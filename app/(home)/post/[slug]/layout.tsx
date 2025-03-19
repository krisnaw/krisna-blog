import {getPostBySlug} from "@/app/actions/post-action";
import {PostHeader} from "@/components/post/post-header";

export default async function DashboardLayout(
    {children, params} : { children: React.ReactNode, params: Promise<{ slug: string }> }
) {

    const { slug } = await params;

    const post = await getPostBySlug(slug)

    return (
        <div>
            <PostHeader post={post} />

            {children}
        </div>
    )
}
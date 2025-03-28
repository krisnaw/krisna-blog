import {getPostBySlug} from "@/app/actions/post-action";

export default async function DashboardLayout(
    {children, params} : { children: React.ReactNode, params: Promise<{ slug: string }> }
) {

    const { slug } = await params;

    const post = await getPostBySlug(slug).catch((error) => {
        console.error('Failed to fetch post:', error);
        return null;
    });

    if (!post) {
        // Handle the error case appropriately here
        return <div>Failed to load post.</div>;
    }

    return (
        <div>
            {children}
        </div>
    )
}
import {createClient} from "@/utils/supabase/client";
import markdownHtml from 'zenn-markdown-html';
import {PostHeader} from "@/components/post/post-header";

export default async function Page({
                                       params,
                                   }: {
    params: Promise<{ slug: string }>
}) {
    const supabase = await createClient();
    const { slug } = await params;

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        return <div>Error: {error.message}</div>
    }

    const html = markdownHtml(post.content, {});

    return (
        <div className="relative">
            <PostHeader post={post} />

            <div
                className="prose prose-sm focus:outline-none max-w-none dark:prose-invert"

                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />

        </div>
    )
}
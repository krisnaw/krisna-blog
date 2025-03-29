import {createClient} from "@/utils/supabase/client";
import markdownHtml from 'zenn-markdown-html';
import {PostHeader} from "@/components/post/post-header";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60


// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
    const supabase = await createClient();
    const { data: posts } = await supabase.from('posts').select('slug')

    return posts?.map(({ slug }) => ({
        slug,
    }))
}

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
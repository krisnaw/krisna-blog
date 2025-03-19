import {createClient} from "@/utils/supabase/server";

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

    return (
        <div>
            <div>
                {post.title}
            </div>
            <div>
                <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none max-w-none"
                    dangerouslySetInnerHTML={{__html: post.content}}/>
            </div>
        </div>
    )
}
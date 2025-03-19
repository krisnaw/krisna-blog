import {createClient} from "@/utils/supabase/server";
import EditPostForm from "@/components/edit-post-form";

export default async function EditPage({
                                           params,
                                       }: {
    params: Promise<{ slug: string }>
}) {
    const supabase = await createClient();
    const {slug} = await params;

    const {data: post, error} = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return <EditPostForm post={post} />
}
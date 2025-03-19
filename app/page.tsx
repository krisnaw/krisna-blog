import Posts from "@/components/posts";
import {createClient} from "@/utils/supabase/server";

export default async function Home() {
    const supabase = await createClient();

    const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .not('published_at', 'is', 'null')

    return (
        <div>
            { posts && <Posts posts={posts} />}
        </div>
    )
}

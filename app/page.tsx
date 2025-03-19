import Posts from "@/components/posts";
import {createClient} from "@/utils/supabase/server";

export default async function Home() {
    const supabase = await createClient();

    const { data: posts } = await supabase
        .from('posts')
        .select('*')

    return (
        <div>
            { posts && <Posts posts={posts} />}
        </div>
    )
}

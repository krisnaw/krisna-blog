import CreatePostForm from "@/components/post/create-post-form";
import {redirect} from "next/navigation";
import {createClient} from "@/utils/supabase/server";

export default async function Page() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
        redirect('/login')
    }
    return <CreatePostForm />
}
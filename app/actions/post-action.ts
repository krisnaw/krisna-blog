'use server'

import {createClient} from "@/utils/supabase/server";
import {ActionResponse} from "@/lib/type";
import {revalidatePath} from "next/cache";

export async function getPosts() {
    const supabase = await createClient();

    let { data: posts, error } = await supabase
        .from('posts')
        .select('*')

    return posts
}

const slugify = (value: string) => {
    return value
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, '-')
        .replace(/^[-]+|[-]+$/g, '');
};

export async function storePost(formData: FormData): Promise<ActionResponse> {
    const supabase = await createClient();

    const slug = slugify(formData.get('title') as string)

    const {data, error} = await supabase
        .from('posts')
        .insert([
            {
                title: formData.get('title'),
                slug: slug,
                content: formData.get('content'),
            },
        ])
        .select()
        .single()


    if (error) {
        console.log(error)
        return {
            success: false,
            message: 'Something went wrong',
            error: error.message,
        }
    }

    console.log(data)

    return {
        success: true,
        message: data
    }
}

export async function updatePost(formData: FormData): Promise<ActionResponse> {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from('posts')
        .update(
            {
                title: formData.get('title'),
                content: formData.get('content'),
            }
        )
        .eq('slug', formData.get('slug') as string)
        .select()
        .single()

    if (error) {
        console.log(error)
        return {
            success: false,
            message: 'Something went wrong',
            error: error.message,
        }
    }

    revalidatePath('/', 'layout')
    return {
        success: true,
        message: data
    }
}

export async function deletePost(id: string): Promise<ActionResponse> {
    const supabase = await createClient();


    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id)

    if (error) {
        return {
            success: false,
            message: 'Failed to delete the post.',
            error: error.message,
        };
    }

    revalidatePath('/');
    return {
        success: true,
        message: 'Post deleted successfully.',
    };
}


export async function publishPost(id: string): Promise<ActionResponse> {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from('posts')
        .update({
            published_at: new Date().toISOString(),
        })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.log(error);
        return {
            success: false,
            message: 'Failed to publish the post.',
            error: error.message,
        };
    }

    revalidatePath('/');
    return {
        success: true,
        message: data,
    };
}
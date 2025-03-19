'use server'

import {createClient} from "@/utils/supabase/server";
import {ActionResponse} from "@/lib/type";
import {revalidatePath} from "next/cache";

export async function storePost(formData: FormData): Promise<ActionResponse> {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from('posts')
        .insert([
            {
                title: formData.get('title'),
                slug: formData.get('slug'),
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
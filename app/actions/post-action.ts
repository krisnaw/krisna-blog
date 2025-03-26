'use server'

import {createClient} from "@/utils/supabase/server";
import {ActionResponse} from "@/lib/type";
import {revalidatePath} from "next/cache";
import {z} from "zod";
import {slugify} from "@/app/actions/action-utils";

// Define validation schema
const postFormSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(10, "Title must be at least 10 characters long"),
    slug: z.string()
        .transform((val) => slugify(val))
        .pipe(
            z.string()
                .min(3, "Slug must be at least 3 characters long")
                .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers and hyphens")
        )
    ,
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters long").max(140, "Excerpt must not exceed 140 characters"),
    content: z.string().min(20, "Content must be at least 20 characters long")
});

export type postFormData = z.infer<typeof postFormSchema>

export async function storePost(dataForm: postFormData): Promise<ActionResponse> {

    const validationResult = postFormSchema.safeParse(dataForm)

    if (!validationResult.success) {
        console.log(validationResult.error)
        return {
            success: false,
            message: 'Validation failed',
            errors: validationResult.error.flatten().fieldErrors,
        }
    }

    const supabase = await createClient();

    const validatedData = validationResult.data

    const {data, error} = await supabase
        .from('posts')
        .insert([
            {
                title: validatedData.title,
                slug: validatedData.slug,
                excerpt: validatedData.excerpt,
                content: validatedData.content,
            },
        ])
        .select()
        .single()

    if (error) {
        return {
            success: false,
            message: 'Something went wrong',
            error: error.message,
        }
    }
    return {
        success: true,
        message: data
    }
}

export async function updatePost(dataForm: postFormData): Promise<ActionResponse> {
    const supabase = await createClient();

    const validationResult = postFormSchema.safeParse(dataForm)

    if (!validationResult.success) {
        return {
            success: false,
            message: 'Validation failed',
            errors: validationResult.error.flatten().fieldErrors,
        }
    }
    const validatedData = validationResult.data

    const {data, error} = await supabase
        .from('posts')
        .update(
            {
                title: validatedData.title,
                slug: validatedData.slug,
                excerpt: validatedData.excerpt,
                content: validatedData.content,
            }
        )
        .eq('id', dataForm.id)
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

    revalidatePath('/', 'layout');

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

    revalidatePath('/', 'layout');
    return {
        success: true,
        message: data,
    };
}


export async function setPostToDraft(id: string): Promise<ActionResponse> {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from('posts')
        .update({
            published_at: null,
        })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.log(error);
        return {
            success: false,
            message: 'Failed to set the post to draft.',
            error: error.message,
        };
    }

    revalidatePath('/', 'layout');
    return {
        success: true,
        message: data,
    };
}

export async function getPosts(published = false, search?: string) {
    const supabase = await createClient();

    let query = supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })

    if (!published)  { query = query.not('published_at', 'is', 'null')}
    if (search) { query = query.textSearch('title_content', `%${search}%`)}

    const { data: posts, error } = await query

    if (error) {
        throw new Error(error.message)
    }

    return posts
}

export async function getPostBySlug(slug: string) {
    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle()

    if (error) {
        throw new Error(error.message)
    }

    return post
}
'use server'


import { createClient } from '@/utils/supabase/server'
import {revalidatePath} from "next/cache";

export type ActionResponse = {
    success: boolean
    message: string
    errors?: Record<string, string[]>
    error?: string
}

export async function login(formData: FormData): Promise<ActionResponse> {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const dataForm = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(dataForm)


    if (error) {
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: error.message,
        }
    }

    revalidatePath('/', 'layout')

    return {
        success: true,
        message: 'Something went wrong. Please try again later.',
    }
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            error: error.message,
        }
    }

    revalidatePath('/', 'layout')

    return {
        success: true,
        message: 'Something went wrong. Please try again later.',
    }
}
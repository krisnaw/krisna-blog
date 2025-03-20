export type ActionResponse = {
    success: boolean
    message: string
    errors?: Record<string, string[]>
    error?: string
}

export type Post = {
    id: string;
    published_at: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    created_at: string;
};

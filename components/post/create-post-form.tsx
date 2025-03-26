'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useActionState, useState} from "react";
import {ActionResponse} from "@/lib/type";
import {storePost} from "@/app/actions/post-action";
import {useRouter} from "next/navigation";
import {SaveIcon} from "lucide-react";
import {ButtonCancelPost} from "@/components/post/button-cancel-post";
import {Textarea} from "@/components/ui/textarea";

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
}

export default function CreatePostForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");

    const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
        async (prevState: ActionResponse, formData: FormData) => {

            const data = {
                title : formData.get('title') as string,
                slug : formData.get('slug') as string,
                excerpt : formData.get('excerpt') as string,
                content : formData.get('content') as string,
            }

            try {
                const res = await storePost(data);
                if (res.success) {
                    router.push('/post')
                }
                return res;
            } catch (err) {
                console.log(err)
                return {
                    success: false,
                    message: 'Error',
                    errors: undefined,
                    error: 'Error'
                }
            }
            
    }, initialState);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create New Post</CardTitle>
                <CardDescription>{state?.message}</CardDescription>
            </CardHeader>
            <form action={formAction}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            aria-invalid={!!state?.errors?.title}
                            id="title"
                            value={title}
                            name={"title"}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title"
                            required
                        />
                        {state?.errors?.title && (
                            <p className="text-red-500 text-sm">{state.errors.title}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            aria-invalid={!!state?.errors?.slug}
                            id="slug"
                            value={slug}
                            name={"slug"}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="Enter slug"
                            required
                        />
                        {state?.errors?.slug && (
                            <p className="text-red-500 text-sm">{state.errors.slug}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="excerpt">excerpt</Label>
                        <Input
                            aria-invalid={!!state?.errors?.excerpt}
                            id="excerpt"
                            value={excerpt}
                            name={"excerpt"}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Enter excerpt"
                            required
                        />
                        
                        {state?.errors?.excerpt && (
                            <p className="text-red-500 text-sm">{state.errors.excerpt}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <Textarea value={content} name="content" onChange={(e) => setContent(e.target.value)} />
                        {state?.errors?.content && (
                            <p className="text-red-500 text-sm">{state.errors.content}</p>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-5 pt-5">
                    <ButtonCancelPost />
                    <Button type="submit" disabled={isPending}>
                        <SaveIcon />
                        {isPending ? "Saving..." : "Save"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
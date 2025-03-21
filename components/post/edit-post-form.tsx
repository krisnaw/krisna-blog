'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TipTapEditor} from "@/components/tiptap/tip-tap-editor";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useActionState, useState} from "react";
import {ActionResponse, Post} from "@/lib/type";
import {updatePost} from "@/app/actions/post-action";
import {useRouter} from "next/navigation";
import {SaveIcon} from "lucide-react";
import {ButtonCancelPost} from "@/components/post/button-cancel-post";

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
}

export default function EditPostForm({ post }: { post: Post}) {
    const router = useRouter();
    const [title, setTitle] = useState(post.title);
    const [slug, setSlug] = useState(post.slug);
    const [excerpt, setExcerpt] = useState(post.excerpt);
    const [content, setContent] = useState(post.content);

    const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
        async (prevState: ActionResponse, formData: FormData) => {

            try {
                const res = await updatePost(formData);

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
                <CardTitle>Edit New Post</CardTitle>
                <CardDescription>{state?.message}</CardDescription>
            </CardHeader>
            <form action={formAction}>
                <input type="hidden" name="id" value={post.id}/>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            value={title}
                            name={"title"}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            id="slug"
                            value={slug}
                            name={"slug"}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="Enter slug"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="excerpt">excerpt</Label>
                        <Input
                            id="excerpt"
                            value={excerpt}
                            name={"excerpt"}
                            onChange={(e) => setExcerpt(e.target.value)}
                            placeholder="Enter excerpt"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content</Label>
                        <input type="hidden" value={content} name="content"/>
                        <div className="border border-input rounded-md">
                            <TipTapEditor content={content} setContent={setContent}/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-5 pt-5">
                    <ButtonCancelPost />
                    <Button type="submit" disabled={isPending}>
                        <SaveIcon />
                        {isPending ? "Saving..." : "Save changes"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
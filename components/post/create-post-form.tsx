'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {TipTapEditor} from "@/components/tiptap/tip-tap-editor";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useActionState, useState} from "react";
import {ActionResponse} from "@/lib/type";
import {storePost} from "@/app/actions/post-action";
import {useRouter} from "next/navigation";
import {SaveIcon} from "lucide-react";
import Link from "next/link";

const initialState: ActionResponse = {
    success: false,
    message: '',
    errors: undefined,
}

export default function CreatePostForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [content, setContent] = useState("");

    const [state, formAction, isPending] = useActionState<ActionResponse, FormData>(
        async (prevState: ActionResponse, formData: FormData) => {

            try {
                const res = await storePost(formData);

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
                        <Label htmlFor="content">Content</Label>
                        <input type="hidden" value={content} name="content"/>
                        <div className="border border-input rounded-md p-4">
                            <TipTapEditor content={content} setContent={setContent}/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-5 pt-5">
                    <Button asChild variant="secondary">
                        <Link href="/posts">
                            Cancel
                        </Link>
                    </Button>
                    <Button type="submit" disabled={isPending}>
                        <SaveIcon />
                        {isPending ? "Saving..." : "Save"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
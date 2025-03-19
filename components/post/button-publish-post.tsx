'use client'

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useTransition} from "react";
import {toast} from "sonner";
import {publishPost} from "@/app/actions/post-action";
import {SendIcon} from "lucide-react";

export default function ButtonPublishPost({ id } : { id: string }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition()

    const handleDelete = async () => {
        startTransition(async () => {
            try {
                const result = await publishPost(id)

                if (!result.success) {
                    throw new Error(result.error || 'Failed to delete issue')
                }

                toast('Issue deleted')
                router.push('/posts')
                router.refresh()
            } catch (error) {
                console.error('Error deleting issue:', error)
                toast('Failed to delete issue')
            }
        })
    }

    return (
        <Button variant="outline" onClick={handleDelete} disabled={isPending}>
            <SendIcon /> Publish
        </Button>
    )
}
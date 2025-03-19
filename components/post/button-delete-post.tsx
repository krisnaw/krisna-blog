'use client'

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {useTransition} from "react";
import {toast} from "sonner";
import {deletePost} from "@/app/actions/post-action";
import {TrashIcon} from "lucide-react";

export default function ButtonDeletePost({ id } : { id: string }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition()

    const handleDelete = async () => {
        startTransition(async () => {
            try {
                const result = await deletePost(id)

                if (!result.success) {
                    throw new Error(result.error || 'Failed to delete issue')
                }

                toast('Issue deleted')
                router.push('/post')
                router.refresh()
            } catch (error) {
                console.error('Error deleting issue:', error)
                toast('Failed to delete issue')
            }
        })
    }

    return (
        <Button size="icon" variant="destructive" onClick={handleDelete} disabled={isPending}>
            <TrashIcon />
        </Button>
    )
}
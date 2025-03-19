'use client'
import {EmptyState} from "@/components/ui/empty-state";
import {Files, FileText, PlusIcon} from "lucide-react";
import {useRouter} from "next/navigation";

export function NoPostState() {
    const router = useRouter();
    return (
        <EmptyState
            title="No Post Created"
            description="You can create a new post template to use on your pages."
            icons={[FileText, PlusIcon, Files]}
            action={{
                label: "New Post",
                onClick: () => router.push("/post/create")
            }}
        />
    )
}
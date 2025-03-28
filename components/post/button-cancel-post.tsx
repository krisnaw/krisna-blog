import {Button} from "@/components/ui/button";
import Link from "next/link";

export function ButtonCancelPost() {
    return (
        <Button asChild variant="secondary">
            <Link href="/posts">
                Cancel
            </Link>
        </Button>
    )
}
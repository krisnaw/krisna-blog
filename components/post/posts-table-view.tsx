import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Post} from "@/lib/type";
import {format} from "date-fns";
import Link from "next/link";
import ButtonPublishPost from "@/components/post/button-publish-post";
import {Button} from "@/components/ui/button";
import ButtonSetDraft from "@/components/post/button-set-draft";
import ButtonDeletePost from "@/components/post/button-delete-post";
import {PencilIcon} from "lucide-react";

export function PostsTableView({ posts } : { posts: Post[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.slug}>
                        <TableCell className="font-medium" colSpan={4}>
                            {post.title}
                        </TableCell>
                        <TableCell>
                            {post.published_at ? format(post.published_at, 'PPP') : 'Draft'}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                            {post.published_at ? <ButtonSetDraft id={post.id} /> : <ButtonPublishPost id={post.id} />}
                            <Button asChild size="icon">
                                <Link href={`/post/${post.slug}/edit`}>
                                    <PencilIcon />
                                </Link>
                            </Button>
                            <ButtonDeletePost id={post.id} />
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>

    )
}

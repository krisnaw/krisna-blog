import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Post} from "@/lib/type";
import {format} from "date-fns";
import Link from "next/link";
import ButtonPublishPost from "@/components/post/button-publish-post";
import {Button} from "@/components/ui/button";

export function PostTable({ posts } : { posts: Post[] }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post) => (
                    <TableRow key={post.slug}>
                        <TableCell className="font-medium">
                            {post.title}
                        </TableCell>
                        <TableCell>
                            {post.published_at ? format(post.published_at, 'PPP') : 'Draft'}
                        </TableCell>
                        <TableCell className="text-right space-x-2">
                            <ButtonPublishPost />
                            <Button asChild size="sm">
                                <Link href={`/post/${post.slug}/edit`}>
                                    Edit
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>

    )
}

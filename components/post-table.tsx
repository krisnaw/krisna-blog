import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Post} from "@/lib/type";
import {format} from "date-fns";
import Link from "next/link";

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
                        <TableCell className="text-right">
                            <Link href={`/post/${post.slug}/edit`}>
                                Edit
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>

    )
}

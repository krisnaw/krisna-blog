export default async function Page({params,}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`@/app/notes/posts/${slug}.mdx`)
  console.log(Post)

  return <Post />
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false
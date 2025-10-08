import {notFound} from 'next/navigation'
import type {Metadata} from 'next'

import {formatDate, getBlogPosts} from '@/app/notes/utils'
import {baseUrl} from '@/app/sitemap'
import {CustomMDX} from '@/app/notes/mdx'

type BlogParams = {
  slug: string
}

export async function generateStaticParams(): Promise<BlogParams[]> {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({
  params,
}: {
  params: BlogParams
}): Metadata | undefined {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug)
  if (!post) {
    return undefined
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

type BlogPageProps = {
  params: BlogParams
}

export default function Blog({params}: BlogPageProps) {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (

    <div className="w-full">
      {/*HEADER*/}
      <header className="mx-auto max-w-3xl">
        <div className="pt-20 pb-12">
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <p className="font-medium text-lg text-gray-700 mt-4">
            Published on {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-32">
        <div className="bg-white text-neutral-600  rounded-xl shadow-2xl ">
          <div className="py-12">
            <section className="mx-auto max-w-3xl">
              <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: post.metadata.title,
                    datePublished: post.metadata.publishedAt,
                    dateModified: post.metadata.publishedAt,
                    description: post.metadata.summary,
                    image: post.metadata.image
                      ? `${baseUrl}${post.metadata.image}`
                      : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                    url: `${baseUrl}/blog/${post.slug}`,
                    author: {
                      '@type': 'Person',
                      name: 'My Portfolio',
                    },
                  }),
                }}
              />
              <article className="prose prose-sm sm:prose-lg max-w-none pb-20">
                <CustomMDX source={post.content} />
              </article>
            </section>
          </div>
        </div>
      </div>


    </div>

  )
}

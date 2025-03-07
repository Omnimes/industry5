import "@/styles/mdx.css"

import { Metadata } from "next"
import Link from "next/link"
import { LucideChevronLeft } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { OstDocument } from "outstatic"
import { getDocumentSlugs, load } from "outstatic/server"

import MDXServer from "@/lib/mdx-server"
import { absoluteUrl, cn, ogUrl } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import DocHero from "@/components/doc-hero"
import MDXComponent from "@/components/mdx/mdx-component"

export async function generateStaticParams() {
  const posts = getDocumentSlugs("posts")
  return posts.map((slug) => ({ slug }))
}

async function getData({ params }: { params: { slug: string; locale: string } }) {
  const db = await load()
  const post = await db
    .find<OstDocument>({ collection: "posts", slug: params.slug, lang: params.locale }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
    ])
    .first()

  if (!post) {
    return undefined
  }
  const content = await MDXServer(post.content)

  return {
    ...post,
    content,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getData({ params: resolvedParams })
  const locale = resolvedParams.locale
  const t = await getTranslations({ locale, namespace: "Metadata" })
  if (!post) {
    return {
      title: t("postNotFound"),
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/posts/${post.slug}`),
      images: [
        {
          url: ogUrl(post?.coverImage || `/api/og?title=${post.title}`),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ogUrl(post?.coverImage || `/api/og?title=${post.title}`),
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const resolvedParams = await params
  setRequestLocale(resolvedParams.locale)
  const t = await getTranslations("PostLayout")
  const taria = await getTranslations("AriaLabel")
  const post = await getData({ params: resolvedParams })

  if (!post) {
    return (
      <article className="mx-auto mt-32 max-w-screen-lg px-4 text-center md:px-0">
        <h1 className="font-heading my-2 inline-block text-4xl leading-tight lg:text-5xl">
          {t("postNotFound")}
        </h1>
        <p>{t("postNotFoundDesc")}</p>
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            aria-label={taria("allPostAria")}
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <LucideChevronLeft className="mr-2 size-4" />
            {t("allPost")}
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="mb-32">
      <DocHero {...post} />
      <div className="mx-auto max-w-screen-xl px-4 xl:px-0">
        <div className="prose-outstatic prose text-muted-foreground dark:prose-invert max-w-none">
          <MDXComponent content={post.content} />
        </div>
      </div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blog"
          aria-label={taria("allPostAria")}
          rel="noreferrer noopener"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <LucideChevronLeft className="mr-2 size-4" />
          {t("allPost")}
        </Link>
      </div>
    </article>
  )
}

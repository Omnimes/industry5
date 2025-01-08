import { LayoutPosts } from "@/layouts/LayoutPosts"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getDocuments, load } from "outstatic/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { genPageMetadata } from "@/app/seo"

const POSTS_PER_PAGE = 10

export const generateStaticParams = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const posts = getDocuments("posts", ["lang"])
  if (!posts || posts.length == 0 || posts === undefined) {
    return []
  }
  const localePosts = posts.filter((post) => post.lang == locale)
  const totalPages = Math.ceil(localePosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const t = await getTranslations({ locale, namespace: "Blog" })
  const title = t("blog_title")
  const description = t("blog_desc")
  const keywords = t("blog_keywords")
  const localeShort = getLocalePrimaryDialects(locale)
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  return genPageMetadata(obj)
}

async function getData(locale: string, page: string) {
  const db = await load()
  const allPosts = await db
    .find({ collection: "posts", status: "published", lang: locale }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
      "author",
    ])
    .sort({ publishedAt: -1 })
    .skip((Number(page) - 1) * POSTS_PER_PAGE)
    .limit(POSTS_PER_PAGE)
    .toArray()

  const postsLength = getDocuments("posts").length

  return {
    allPosts,
    postsLength,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ page: string; locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const page = resolvedParams.page
  setRequestLocale(locale)
  const t = await getTranslations("Blog")
  const { allPosts, postsLength } = await getData(locale, page)

  if (!allPosts || allPosts.length == 0 || allPosts === undefined) {
    return (
      <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Blog</h1>
            <p className="text-xl text-muted-foreground">{t("desc")}</p>
          </div>
        </div>
        <hr className="my-8" />
        <p>{t("NotFound")}</p>
      </div>
    )
  }

  const pageNumber = parseInt(page as string)

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(postsLength / POSTS_PER_PAGE),
  }

  return (
    <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">{t("desc")}</p>
        </div>
      </div>
      <hr className="my-8" />
      <LayoutPosts posts={allPosts} pagination={pagination} />
    </div>
  )
}

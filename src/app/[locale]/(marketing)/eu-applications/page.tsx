import { LayoutEuApp } from "@/layouts/LayoutEuApp"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { OstDocument } from "outstatic"
import { load } from "outstatic/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { genPageMetadata } from "@/app/seo"

export const revalidate = 3600
const POSTS_PER_PAGE = 20
export type ExtendedOstDocument = OstDocument & { dateFrom: string; dateTo: string }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const t = await getTranslations({ locale, namespace: "EuApplicationsPage" })
  const title = t("title")
  const description = t("desc")
  const keywords = t("keywords")
  const localeShort = getLocalePrimaryDialects(locale)
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  const meta = genPageMetadata(obj)
  return meta
}

async function getData(locale: string) {
  const db = await load()
  const allPosts = await db
    .find<ExtendedOstDocument>(
      { collection: "euapplications", status: "published", lang: locale },
      ["title", "publishedAt", "slug", "coverImage", "description", "dateFrom", "dateTo"]
    )
    .sort({ publishedAt: -1 })
    .limit(POSTS_PER_PAGE)
    .toArray()

  const allPostsLength = await db
    .find<ExtendedOstDocument>({ collection: "euapplications", status: "published", lang: locale })
    .toArray()

  const length = allPostsLength.length

  return {
    allPosts,
    length,
  }
}

export default async function EuApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  setRequestLocale(locale)
  const t = await getTranslations("EuApplicationsPage")
  const { allPosts, length } = await getData(locale)

  const pageNumber = 1
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(length / POSTS_PER_PAGE),
  }

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-24">
      <TextRevealCard text={t("title")} desc={t("desc")} />
      <LayoutEuApp posts={allPosts} pagination={pagination} />
    </main>
  )
}

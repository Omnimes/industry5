import { getTranslations, setRequestLocale } from "next-intl/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "FuturesMeta" })
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
  return genPageMetadata(obj)
}
export default async function FuturePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Future")
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-24">
      <TextRevealCard text={t("title")} />
      <article className="mb-6 px-0 text-muted-foreground lg:text-lg"></article>
    </main>
  )
}

import { getTranslations, setRequestLocale } from "next-intl/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { BenefitsOfImplementingIndustry } from "@/components/BenefitsOfImplementingIndustry"
import { DiscoverPotential } from "@/components/DiscoverPotential"
import { EvolutionOrRevolution } from "@/components/EvolutionOrRevolution"
import { Hero } from "@/components/Hero"
import { HistoryIndustryHome } from "@/components/HistoryIndustryHome"
import { TransformationOfIndustry } from "@/components/TransformationOfIndustry"
import { WhyIndustry } from "@/components/WhyIndustry"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "HomeMeta" })
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

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <section className="overflow-hidden">
      <Hero />
      <EvolutionOrRevolution />
      <WhyIndustry />
      <HistoryIndustryHome />
      <DiscoverPotential />
      <TransformationOfIndustry />
      <BenefitsOfImplementingIndustry />
    </section>
  )
}

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { EvolutionOrRevolution } from '@/components/EvolutionOrRevolution';
import { WhyIndustry } from '@/components/WhyIndustry';
import { HistoryIndustryHome } from '@/components/HistoryIndustryHome';
import { BenefitsOfImplementingIndustry } from '@/components/BenefitsOfImplementingIndustry';
import { DiscoverPotential } from '@/components/DiscoverPotential';
import { TransformationOfIndustry } from '@/components/TransformationOfIndustry';
import { getLocalePrimaryDialects } from '@/lib/locales';
import { genPageMetadata } from '@/app/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "HomeMeta" });
  const title = t('title');
  const description = t('desc');
  const keywords = t('keywords');
  const localeShort = getLocalePrimaryDialects(locale);
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  return genPageMetadata(obj)
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <main className="overflow-hidden">
      <Hero />
      <EvolutionOrRevolution />
      <WhyIndustry />
      <HistoryIndustryHome />
      <DiscoverPotential />
      <TransformationOfIndustry />
      <BenefitsOfImplementingIndustry />
    </main>
  )
}
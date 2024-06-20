import { genPageMetadata } from "@/app/seo";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "EuropeanUnionMeta" });
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
export default function EuropeanUnionPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('EuropeanUnion');
  return (
    <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
      <TextRevealCard
        text={t('title')}
        desc={t('desc')}
      />
      <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
    </div>
  );
}
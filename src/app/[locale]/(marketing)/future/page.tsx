import { getTranslations, setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { genPageMetadata } from "@/app/seo";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "FuturesMeta" });
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
export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('Future');
  return (
    <div className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
    <TextRevealCard
        text={t('title')}
      />
          <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
      </div>
  )
}

import { genPageMetadata } from "@/app/seo";
import { ArticleHeadingTitle } from "@/components/ui/link-anchor";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }>}) {
  const { locale } = await params;
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
export default async function EuropeanUnionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('EuropeanUnion');
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-24">
      <TextRevealCard
        text={t('title')}
        desc={t('desc')}
      />
      <article className="text-muted-foreground mb-6 px-0 lg:text-lg">
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p1")}</p>
        <hr className="pb-4" />
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p2")}</p>
        <ArticleHeadingTitle text={t("h1")} />
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p3")}</p>
        <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0">
          <li><strong>{t("l1strong")}</strong> {t("l1")}</li>
          <li><strong>{t("l2strong")}</strong> {t("l2")}</li>
          <li><strong>{t("l3strong")}</strong> {t("l3")}</li>
        </ul>
        <ArticleHeadingTitle text={t("h2")} />
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p4")}</p>

        <h3 className="font-heading text-1xl lg:text-1xl mt-6 tracking-normal text-gray-900 sm:text-2xl md:leading-none md:tracking-tight lg:flex lg:flex-col dark:text-white">{t("h3")}</h3>
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p5")}</p>

        <h3 className="font-heading text-1xl lg:text-1xl mt-6 tracking-normal text-gray-900 sm:text-2xl md:leading-none md:tracking-tight lg:flex lg:flex-col dark:text-white">{t("h4")}</h3>
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p6")}</p>

        <h3 className="font-heading text-1xl lg:text-1xl mt-6 tracking-normal text-gray-900 sm:text-2xl md:leading-none md:tracking-tight lg:flex lg:flex-col dark:text-white">{t("h5")}</h3>
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p7")}</p>
        <ArticleHeadingTitle text={t("h6")} />
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p8")}</p>
        <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0">
          <li><strong>{t("l4strong")}</strong> {t("l4")}</li>
          <li><strong>{t("l5strong")}</strong> {t("l5")}</li>
          <li><strong>{t("l6strong")}</strong> {t("l6")}</li>
          <li><strong>{t("l7strong")}</strong> {t("l7")}</li>
        </ul>
        <ArticleHeadingTitle text={t("h7")} />
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p9")}</p>
        <p className="mb-6 mt-2 space-y-1 px-0">{t("p10")}</p>
      </article>
    </main>
  );
}
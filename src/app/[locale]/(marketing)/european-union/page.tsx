import { genPageMetadata } from "@/app/seo";
import { BentoGridEuropenUnion } from "@/components/BentoFeature";
import { BentoBox1 } from "@/components/ui/bento-grid-e";
import BlurFade from "@/components/ui/blur-fade";
import { ArticleHeadingTitle } from "@/components/ui/link-anchor";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { getBase64 } from "@/lib/base64";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { cn } from "@/lib/utils";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LuGlobe, LuLeaf, LuCpu } from "react-icons/lu";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
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

  const images = [
    "/images/eu/displaying-technology-growth.webp",
    "/images/eu/panels-surrounded-by-lush-greenery.webp",
    "/images/eu/global-market-trends.webp",
    "/images/eu/advanced-manufacturing-technologies.webp",
  ]
  const bluredImages = await Promise.all(images.map((image) => getBase64(image)))

  const feature = [
    {
      heading: t('h3'),
      paragrapgh: t('p5'),
      icon: <LuGlobe />,
    },
    {
      heading: t('h4'),
      paragrapgh: t('p6'),
      icon: <LuLeaf />,
    },
    {
      heading: t('h5'),
      paragrapgh: t('p7'),
      icon: <LuCpu />,
    },
  ]
  return (
    <section id="industry" className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl">
        <TextRevealCard
          text={t('title')}
          desc={t('desc')}
        />
      </BlurFade>
      <article className="text-muted-foreground mb-6 px-0 lg:text-lg">
        <BlurFade delay={0.3} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl">
          <p className="mb-6 mt-2 space-y-1 px-0">{t("p1")}</p>
          <hr className="pb-4" />
          <p className="mb-6 mt-2 space-y-1 px-0">{t("p2")}</p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl">
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("h1")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">{t("h1span")}</span>
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p3")}</p>
          <BentoBox1 />
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl">
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("h2")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">{t("h2span")}</span>
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p4")}</p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 mt-12 grid w-full grid-cols-1 gap-12 text-left text-lg md:mb-20 md:grid-cols-2 md:text-center md:text-xl lg:grid-cols-3">
          {feature.map((item, i) => (
            <div key={i} className={cn(i == 2 && "md:col-span-2 lg:col-span-1")}>
              <div className="text-card-foreground bg-background rounded-lg border border-none shadow-none">
                <div className="space-y-4">
                  <div className="bg-primary/10 flex size-12 items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-left text-xl font-semibold">{item.heading}</h3>
                  <p className="text-muted-foreground text-balance text-left">{item.paragrapgh}</p>
                </div>
              </div>
            </div>
          ))}
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl">
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("h6")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">{t("h6span")}</span>
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p8")}</p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl">
          <BentoGridEuropenUnion images={images} bluredImages={bluredImages} />
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl">
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("h7")}&nbsp;
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p9")}</p>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p10")}</p>
        </BlurFade>
      </article>
    </section>
  );
}
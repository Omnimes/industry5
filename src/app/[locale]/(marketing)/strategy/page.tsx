import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { getBase64 } from "@/lib/base64"
import { getLocalePrimaryDialects } from "@/lib/locales"
import BlurFade from "@/components/ui/blur-fade"
import { DynamicSquareBackground } from "@/components/ui/dynamic-square"
import { FeaturesStrategy } from "@/components/ui/features-a"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import ZoomParallax from "@/components/ui/zoom-parallax"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "StrategyMeta" })
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

export default async function StrategyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Strategy")

  const images = [
    "/images/strategia/skoncentrowanie_na_czlowieku.webp",
    "/images/strategia/odpornosc.webp",
    "/images/strategia/zrownowazony_rozwoj.webp",
  ]
  const bluredImages = await Promise.all(images.map((image) => getBase64(image)))

  return (
    <section id="industry" className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
      >
        <TextRevealCard text={t("title")} />
      </BlurFade>
      <article className="mb-6 px-0 lg:text-lg">
        <BlurFade
          delay={0.3}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
        >
          <div className="grid h-full border sm:grid-cols-2 lg:grid-cols-3">
            <div className="h-full overflow-hidden border-b p-0 sm:border-r lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-between gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b lg:h-[440px]">
                  <Image
                    src={images[0]}
                    alt={"Skoncentrowanie na człowieku"}
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    className="size-full object-cover"
                    blurDataURL={bluredImages[0]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("h2_men")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("p_desc_men")}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full overflow-hidden border-b p-0 lg:border-b-0 lg:border-r">
              <div className="flex size-full flex-col items-center justify-between gap-y-5">
                <div className="flex size-full items-center justify-center rounded-t-xl border-b lg:h-[440px]">
                  <Image
                    src={images[1]}
                    alt={"Odporność"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[1]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("h2_odpo")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("p_desc_odpo")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0 lg:border-r-0">
              <div className="flex size-full flex-col items-center justify-between gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b lg:h-[440px]">
                  <Image
                    src={images[2]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[2]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("h2_roz")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("p_desc_roz")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("h2_pod")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              {t("h2span_pod")}
            </span>
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p_desc_pod")}
          </p>
        </BlurFade>
        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full md:mb-20">
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-center md:text-xl">
            {t("p4")}
          </p>
          <FeaturesStrategy />
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-center md:text-xl">
            {t("p5")}
          </p>
        </BlurFade>

        <div className="pointer-events-none relative z-[-2] mx-auto my-[-18.8rem] h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] before:absolute before:inset-0 before:size-full before:bg-[radial-gradient(circle_at_bottom_center,#9e7aff,transparent_70%)] before:text-[#9e7aff] before:opacity-20 before:content-[''] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-[hsl(var(--border))] after:bg-background after:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)]" />

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("text2")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p6")}</p>
          <p className="mt-10 text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p7")}
          </p>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 mt-12 grid w-full grid-cols-1 gap-12 text-left text-lg md:mb-20 md:grid-cols-2 md:text-xl lg:grid-cols-3"
        >
          <DynamicSquareBackground title={t("ol_li_title1")} description={t("ol_li_res1")} />
          <DynamicSquareBackground title={t("ol_li_title2")} description={t("ol_li_res2")} />
          <DynamicSquareBackground title={t("ol_li_title3")} description={t("ol_li_res3")} />
          <DynamicSquareBackground title={t("ol_li_title4")} description={t("ol_li_res4")} />
          <DynamicSquareBackground title={t("ol_li_title5")} description={t("ol_li_res5")} />
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <p className="mt-10 px-0 text-lg text-muted-foreground md:text-xl">{t("p12")}</p>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("text3")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p8")}</p>
        </BlurFade>
        <ZoomParallax />
        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 mt-20 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <p className="mt-10 text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p9")}
          </p>
          <p className="mt-10 text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p10")}
          </p>
          <p className="mt-10 text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p11")}
          </p>
        </BlurFade>
      </article>
    </section>
  )
  {
    /* 
        <Image
          src={"/images/orient_people.png"}
          alt={t("alt_orient")}
          width={2084}
          height={1000}
          className="my-3 rounded-lg shadow-lg"
        />
        <Image
          src={"/images/odpornosc.png"}
          alt={t("alt_odpornosc")}
          width={1260}
          height={536}
          className="my-3 rounded-lg shadow-lg"
        />
        <Image
          src={"/images/eco.png"}
          alt={t("alt_eco")}
          width={1260}
          height={536}
          className="rounded-lg shadow-lg"
        />
  )*/
  }
}

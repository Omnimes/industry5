import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { getBase64 } from "@/lib/base64"
import { getLocalePrimaryDialects } from "@/lib/locales"
import BlurFade from "@/components/ui/blur-fade"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { FeaturesHistory } from "@/components/ui/features-a"
import { MyLink } from "@/components/ui/link"
import { TextRevealCardDouble } from "@/components/ui/text-reveal-card"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "HistoryMeta" })
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
export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("History")
  const taria = await getTranslations("AriaLabel")

  const images = [
    "/images/history/before-industry.jpg",

    "/images/history/industry1-mechanic.jpg",
    "/images/history/industry1-strong.jpg",
    "/images/history/industry1-sys-in.jpg",
    "/images/history/industry1-comunity.jpg",

    "/images/history/industry2-energy.jpg",
    "/images/history/industry2-communication.jpg",
    "/images/history/industry2-engine.jpg",
    "/images/history/industry2-line.jpg",

    "/images/history/industry3-informatyzacja.jpg",
    "/images/history/industry3-automatyzacja.jpg",
    "/images/history/industry3-elektronika.jpg",
    "/images/history/industry3-plc.jpg",
  ]

  const bluredImages = await Promise.all(images.map((image) => getBase64(image)))

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
      >
        <TextRevealCardDouble text={t("titlePart1")} textPart={t("titlePart2")} desc={t("p1")} />
      </BlurFade>
      <article className="mb-6 px-0 text-muted-foreground lg:text-lg">
        <BlurFade
          delay={0.2}
          inView
          className="mx-auto w-full text-left text-lg md:text-center md:text-xl"
        >
          <p className="mb-12 space-y-1 px-0">{t("p2")}</p>
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("head1")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p3")}</p>
        </BlurFade>

        <ContainerScroll>
          <Image
            src={images[4]}
            alt="Before the industry"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <p className="mb-12 space-y-1 px-0">{t("p2")}</p>
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("head2")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p4")}</p>
        </BlurFade>

        <BlurFade
          delay={0.3}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
        >
          <div className="grid h-full border sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-full overflow-hidden border-b p-0 sm:border-r lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
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
                    {t("strong1")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list1")}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full overflow-hidden border-b p-0 lg:border-b-0 lg:border-r">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
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
                    {t("strong2")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
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
                    {t("strong3")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list3")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0 lg:border-r-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[3]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[3]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong4")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list4")}
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
            {t("head3")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p5")}</p>
        </BlurFade>

        <BlurFade
          delay={0.3}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
        >
          <div className="grid h-full border sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-full overflow-hidden border-b p-0 sm:border-r lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[5]}
                    alt={"Skoncentrowanie na człowieku"}
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    className="size-full object-cover"
                    blurDataURL={bluredImages[5]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong13")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list13")}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full overflow-hidden border-b p-0 lg:border-b-0 lg:border-r">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[6]}
                    alt={"Odporność"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[6]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong14")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list14")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[7]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[7]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong15")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list15")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0 lg:border-r-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[8]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[8]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong16")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list16")}
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
            {t("head4")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p6")}</p>
        </BlurFade>

        <BlurFade
          delay={0.3}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
        >
          <div className="grid h-full border sm:grid-cols-2 lg:grid-cols-4">
            <div className="h-full overflow-hidden border-b p-0 sm:border-r lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[9]}
                    alt={"Skoncentrowanie na człowieku"}
                    width={1024}
                    height={1024}
                    placeholder="blur"
                    className="size-full object-cover"
                    blurDataURL={bluredImages[9]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong17")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list17")}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full overflow-hidden border-b p-0 lg:border-b-0 lg:border-r">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[10]}
                    alt={"Odporność"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[10]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong18")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list18")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[11]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[11]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong19")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list19")}
                  </p>
                </div>
              </div>
            </div>
            <div className="-z-0 min-h-[500px] overflow-hidden border-b p-0 sm:border-r lg:min-h-fit lg:border-b-0 lg:border-r-0">
              <div className="flex size-full flex-col items-center justify-start gap-y-5">
                <div className="flex aspect-square size-full items-center justify-center rounded-t-xl border-b sm:h-[350px] lg:h-[440px]">
                  <Image
                    src={images[12]}
                    alt={"Zrównoważony rozwój"}
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                    placeholder="blur"
                    blurDataURL={bluredImages[12]}
                    priority
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-y-1 px-5 pb-4">
                  <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {t("strong20")}
                  </h2>
                  <p className="text-balance text-base text-muted-foreground lg:text-lg">
                    {t("list20")}
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
            {t("head5")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p7")}</p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full md:mb-20">
          <FeaturesHistory />
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
            {t("head6")}
          </h2>
          <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p8")}</p>
          <p className="mb-8 text-balance px-0 text-lg text-muted-foreground md:text-xl">
            {t("p9")}
          </p>
          <MyLink href="/industry" aria-label={taria("footerAria") + t("link")} text={t("link")} />
        </BlurFade>
      </article>
    </section>
  )
}

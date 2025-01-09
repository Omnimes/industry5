import Image from "next/image"
import { ScanFace, Settings, ShieldCheck, User } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { cn } from "@/lib/utils"
import BlurFade from "@/components/ui/blur-fade"
import { EvervaultCard, Icon } from "@/components/ui/evervault-card"
import { FeaturesIndustry } from "@/components/ui/features-a"
import { Features } from "@/components/ui/features-e"
import { GridPattern } from "@/components/ui/grid-pattern"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "IndustryMeta" })
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

export default async function IndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Industry")

  const data = [
    {
      id: 1,
      title: t("strong1"),
      content: t("list1"),
      image: "/images/industry/f4.png",
      icon: <User className="text-primary size-6" />,
    },
    {
      id: 2,
      title: t("strong2"),
      content: t("list2"),
      image: "/images/industry/f3.png",
      icon: <Settings className="text-primary size-6" />,
    },
    {
      id: 3,
      title: t("strong3"),
      content: t("list3"),
      image: "/images/industry/f2.png",
      icon: <ScanFace className="text-primary size-6" />,
    },
    {
      id: 4,
      title: t("strong4"),
      content: t("list4"),
      image: "/images/industry/f1.png",
      icon: <ShieldCheck className="text-primary size-6" />,
    },
  ]

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
      >
        <TextRevealCard text={t("title")} desc={t("p1")} />
      </BlurFade>
      <article className="text-muted-foreground mb-6 px-0 lg:text-lg">
        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("head1")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              {t("headspan")}
            </span>
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p2")}</p>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <div className="relative grid gap-6 py-12 md:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mt-6 sm:mt-0">
              <div className="tls-shadow-md rounded-card relative overflow-hidden shadow-gray-950/[0.03]">
                <Image
                  className="relative rounded-md"
                  src="/images/industry/industry5-feature.webp"
                  alt="Zdjęcie przedstawiające koncepcję Przemysłu 5.0"
                  width={1920}
                  height={1080}
                  quality={100}
                />
              </div>
            </div>
            <div className="relative z-10 space-y-4">
              <p className="text-muted-foreground text-balance px-0 text-left text-lg md:text-xl">
                {t("p3")}
              </p>
            </div>
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              strokeDasharray={"4 2"}
              className={cn(
                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
              )}
            />
          </div>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("head2")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              {t("headspan")}
            </span>
          </h2>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl lg:text-center"
        >
          <Features data={data} />
          <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0 lg:hidden">
            {data.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>: {item.content}
              </li>
            ))}
          </ul>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("head3")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              {t("headspan")}
            </span>
            &nbsp;{t("headspanex")}
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p4")}</p>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("head4")}&nbsp;
            <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
              {t("headspan1")}
            </span>
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p5")}</p>
        </BlurFade>

        <BlurFade delay={0.2} inView className="mx-auto mb-16 w-full md:mb-20">
          <FeaturesIndustry />
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-center md:text-xl"
        >
          <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
            {t("head5")}
          </h2>
          <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p6")}</p>
        </BlurFade>

        <BlurFade
          delay={0.2}
          inView
          className="mx-auto mb-16 w-full text-left text-lg md:mb-20 md:text-xl"
        >
          <div className="relative grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {[
              {
                heading: t("strong14"),
                text: t("list14"),
                image: "/images/industry/1.png",
              },
              {
                heading: t("strong15"),
                text: t("list15"),
                image: "/images/industry/2.png",
              },
              {
                heading: t("strong16"),
                text: t("list16"),
                image: "/images/industry/3.png",
              },
              {
                heading: t("strong17"),
                text: t("list17"),
                image: "/images/industry/4.png",
              },
              {
                heading: t("strong18"),
                text: t("list18"),
                image: "/images/industry/5.png",
              },
              {
                heading: t("strong19"),
                text: t("list19"),
                image: "/images/industry/6.png",
              },
            ].map((item, i) => {
              return (
                <div
                  key={i}
                  className="relative mx-auto flex min-h-[30rem] w-full max-w-sm flex-col items-start justify-between gap-4 border border-black/[0.2] p-4 dark:border-white/[0.2]"
                >
                  <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                  <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                  <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                  <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />
                  <EvervaultCard text="" image={item.image} />
                  <div className="mt-auto">
                    <h2 className="mt-4 text-black dark:text-white">{item.heading}</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-base">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="text-muted-foreground mt-20 text-balance px-0 text-lg md:text-center md:text-xl">
            {t("p7")}
          </p>
        </BlurFade>
      </article>
    </section>
  )
}

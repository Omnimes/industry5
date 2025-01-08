import Image from "next/image"
import { useTranslations } from "next-intl"

import BlurFade from "./ui/blur-fade"
import { BorderBeam } from "./ui/border-beam"
import { MyLink } from "./ui/link"

export const EvolutionOrRevolution = () => {
  const t = useTranslations("AfterHero")
  const taria = useTranslations("AriaLabel")
  return (
    <section id="industry" className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left md:mb-20 md:text-center"
      >
        <h2 className="mb-6 font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
          {t("title")}
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            {t("title2")}
          </span>
        </h2>
        <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p1")}</p>
      </BlurFade>
      <BlurFade
        delay={0.2}
        inView
        className="relative mx-auto mt-12 overflow-hidden rounded-md lg:flex lg:justify-center lg:rounded-xl"
      >
        <BorderBeam size={500} duration={12} delay={9} className="hidden md:block" />
        <div className="grid h-full items-center gap-10 lg:grid-cols-2">
          <Image
            src={"/images/2.png"}
            alt={t("altImg")}
            width={1260}
            height={1260}
            className="h-64 object-cover lg:h-full"
          />
          <div className="mx-auto w-full px-0 py-8 text-left md:px-6 md:text-center lg:text-left">
            <h3 className="mb-3 font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left">
              {t("h3")}
            </h3>
            <p className="mb-3 px-0 text-muted-foreground md:text-lg">{t("p2")}</p>
            <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
              <MyLink
                href="/industry"
                aria-label={taria("footerAria") + t("link")}
                text={t("link")}
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}

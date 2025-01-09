import Image from "next/image"
import { useTranslations } from "next-intl"

import BlurFade from "./ui/blur-fade"

export const BenefitsOfImplementingIndustry = () => {
  const t = useTranslations("Content2")
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left md:mb-20 md:text-center"
      >
        <h2 className="font-heading mb-6 flex flex-wrap text-2xl tracking-normal text-gray-900 sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
          {t("head1")}&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            {t("head1span")}
          </span>
        </h2>
        <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">{t("p1")}</p>
      </BlurFade>

      <BlurFade delay={0.2} inView className="grid gap-8 sm:mx-auto lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <Image
            src={"/images/4.png"}
            alt={t("alt1")}
            width={1260}
            height={750}
            className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
          />
          <Image
            src={"/images/5.png"}
            alt={t("alt2")}
            width={1260}
            height={750}
            className="h-48 w-full rounded object-cover shadow-lg"
          />
          <Image
            src={"/images/6.png"}
            alt={t("alt3")}
            width={1260}
            height={750}
            className="h-48 w-full rounded object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-4 border-b pb-4">
            <h3 className="mb-2 font-semibold leading-5">{t("head2")}</h3>
            <p className="text-muted-foreground text-sm">{t("p2")}</p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h3 className="mb-2 font-semibold leading-5">{t("head3")}</h3>
            <p className="text-muted-foreground text-sm">{t("p3")}</p>
          </div>
          <div className="mb-4 border-b pb-4">
            <h3 className="mb-2 font-semibold leading-5">{t("head4")}</h3>
            <p className="text-muted-foreground text-sm">{t("p4")}</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold leading-5">{t("head5")}</h3>
            <p className="text-muted-foreground text-sm">{t("p5")}</p>
          </div>
        </div>
      </BlurFade>
    </section>
  )
}

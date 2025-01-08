import Image from "next/image"
import { useTranslations } from "next-intl"

import BlurFade from "./ui/blur-fade"
import { BorderBeam } from "./ui/border-beam"
import { Icons } from "./ui/icons"
import { MyLink } from "./ui/link"

export const DiscoverPotential = () => {
  const t = useTranslations("Content3")
  const taria = useTranslations("AriaLabel")
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
      <BlurFade
        delay={0.2}
        inView
        className="mx-auto mb-16 w-full text-left md:mb-20 md:text-center"
      >
        <h2 className="mb-6 flex flex-wrap font-heading text-2xl tracking-normal text-gray-900 dark:text-white sm:text-3xl md:justify-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl">
          {t("head1")}&nbsp;
          <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">
            {t("head1span")}
          </span>
        </h2>
        <p className="text-balance px-0 text-lg text-muted-foreground md:text-xl">{t("p1")}</p>
      </BlurFade>

      <BlurFade
        delay={0.2}
        inView
        className="relative mx-auto overflow-hidden rounded-md lg:flex lg:justify-center lg:rounded-xl"
      >
        <BorderBeam size={500} duration={12} delay={9} className="hidden md:block" />
        <div className="grid h-full items-center gap-10 sm:mx-auto lg:grid-cols-2">
          <div className="mx-auto flex w-full flex-col justify-start text-left md:px-6 md:text-center lg:text-left">
            <p className="mb-6 block w-full px-0 text-lg text-muted-foreground md:text-center md:text-xl lg:text-left">
              {t("p2")}
            </p>
            <div className="grid space-y-3 font-bold text-muted-foreground sm:grid-cols-2 sm:gap-2 sm:space-y-0">
              <ul className="space-y-3">
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list1")}
                </li>
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list2")}
                </li>
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list3")}
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list4")}
                </li>
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list5")}
                </li>
                <li className="flex">
                  <Icons.volt className="mr-1 mt-px size-5 text-yellow-500" />
                  {t("list6")}
                </li>
              </ul>
            </div>
            <div className="my-6 flex w-full items-center justify-start md:justify-center lg:justify-start">
              <MyLink
                href="/strategy"
                aria-label={taria("footerAria") + t("link")}
                text={t("link")}
              />
            </div>
          </div>
          <Image
            className="h-56 w-full rounded object-cover shadow-lg sm:h-96"
            src={"/images/future.png"}
            alt={t("alt")}
            width={1260}
            height={750}
          />
        </div>
      </BlurFade>
    </section>
  )
}

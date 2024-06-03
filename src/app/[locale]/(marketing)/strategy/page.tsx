import Image from "next/image"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { ArticleHeadingTitle } from "@/components/ui/link-anchor"
import CustomLink from "@/components/mdx/custom-link"

import eco from "../../../../../public/images/eco.png"
import odpornosc from "../../../../../public/images/odpornosc.png"
import orient_people from "../../../../../public/images/orient_people.png"
import { HeadingOneTitlePage } from "@/components/ui/heading"
import { ContainerPage } from "@/components/layout/ContainerPage"

export default function StrategyPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  const t = useTranslations("Strategy")

  return (
    <ContainerPage>
        <HeadingOneTitlePage text={t("title")} />
        <article className="text-muted-foreground mb-6 px-0 lg:text-lg">
          <Image
            src={orient_people.src}
            alt={t("alt_orient")}
            width={2084}
            height={1000}
            className="my-3 rounded-lg shadow-lg"
          />

          <ArticleHeadingTitle text={t("text1")} />

          <p className="mb-6 space-y-1 px-0">
            {t("p1")}
            &nbsp;
            <CustomLink
              href={"https://www.iso.org/standard/64239.html"}
              openNewTab={true}
              className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline"
            >
              ISO 27500:2016
            </CustomLink>
            &nbsp;{t("p2")}
            &nbsp;
            <CustomLink
              href={"https://www.iso.org/standard/64241.html"}
              openNewTab={true}
              className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline"
            >
              ISO 27501:2019
            </CustomLink>
            &nbsp;{t("p3")}
          </p>
          <ul className="mb-6 list-inside list-disc space-y-1 px-0 ">
            {t("p4")}
            <li className="pl-4 pt-4">{t("list1")}</li>
            <li className="pl-4">{t("list2")}</li>
            <li className="pl-4">{t("list3")}</li>
            <li className="pl-4">{t("list4")}</li>
            <li className="pl-4">{t("list5")}</li>
            <li className="pl-4">{t("list6")}</li>
            <li className="pl-4">{t("list7")}</li>
          </ul>
          <p className="mb-6 space-y-1 px-0">
            {t("p5")}
          </p>

          <Image
            src={odpornosc.src}
            alt={t("alt_odpornosc")}
            width={1260}
            height={536}
            className="my-3 rounded-lg shadow-lg"
          />
          <ArticleHeadingTitle text={t("text2")} />

          <p className="mb-6 space-y-1 px-0">
            {t("p6")}
          </p>
          <p className="mb-6 space-y-1 px-0">
            {t("p7")}
          </p>
          <ol className="list-inside list-decimal space-y-4">
            <li>
              {t("ol_li_title1")}
              <ul>
                <li className="pl-6">{t("ol_li_res1")}</li>
              </ul>
            </li>
            <li>
              {t("ol_li_title2")}
              <ul>
                <li className="pl-6">{t("ol_li_res2")}</li>
              </ul>
            </li>
            <li>
              {t("ol_li_title3")}
              <ul>
                <li className="pl-6">{t("ol_li_res3")}</li>
              </ul>
            </li>
            <li>
              {t("ol_li_title4")}
              <ul>
                <li className="pl-6">{t("ol_li_res4")}</li>
              </ul>
            </li>
            <li>
              {t("ol_li_title5")}
              <ul>
                <li className="pl-6">{t("ol_li_res5")}</li>
              </ul>
            </li>
          </ol>

          <p className="mb-12 mt-4 space-y-1 px-0">
            {t("p12")}
          </p>

          <Image
            src={eco.src}
            alt={t("alt_eco")}
            width={1260}
            height={536}
            className="rounded-lg shadow-lg"
          />
          <ArticleHeadingTitle text={t("text3")} />

          <p className="mb-6 space-y-1 px-0">
            {t("p8")}
          </p>
          <p className="mb-6 space-y-1 px-0">
            {t("p9")}
          </p>
          <p className="mb-6 space-y-1 px-0">
            {t("p10")}
          </p>
          <p className="mb-6 space-y-1 px-0">
            {t("p11")}
          </p>
        </article>
      </ContainerPage>
  )
}

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { OstDocument } from "outstatic"

import { getFormattedDate } from "@/lib/utils"

export default function DocHero(doc: OstDocument) {
  const locale = useLocale()
  const t = useTranslations("PostLayout")
  return (
    <>
      <div className="relative mb-2 h-52 w-full sm:mx-0 md:mb-4 md:h-96">
        <Image
          alt={doc.title}
          src={doc.coverImage || `/api/og?title=${doc.title}`}
          fill
          className="rounded-md border object-cover object-center"
          priority
        />
      </div>
      <header className="mx-auto max-w-screen-lg px-4 text-center md:px-0">
        <time dateTime={doc.publishedAt} className="text-muted-foreground block text-sm">
          {t("publish")}&nbsp;
          {getFormattedDate(doc.publishedAt, locale)}&nbsp;
          {doc?.author?.name && (
            <>
              {t("by")} {doc.author.name}
            </>
          )}
          .
        </time>
        <h1 className="font-heading mt-4 inline-block text-4xl leading-tight lg:text-5xl">
          {doc.title}
        </h1>
      </header>
      <hr className="my-6 border" />
    </>
  )
}

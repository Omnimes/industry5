import { unstable_setRequestLocale } from "next-intl/server"

import { HeadingOneTitlePage } from "@/components/ui/heading"
import { ContainerPage } from "@/components/layout/ContainerPage"

export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  return (
    <ContainerPage>
        <HeadingOneTitlePage text="Przyszłość Przemysłu" />
        <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
    </ContainerPage>
  )
}

import { unstable_setRequestLocale } from "next-intl/server"

import { HeadingOneTitlePage } from "@/components/ui/heading"
import { ContainerPage } from "@/components/layout/ContainerPage"
import { useTranslations } from "next-intl";

export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('Future');
  
  return (
    <ContainerPage>
        <HeadingOneTitlePage text={t("title")} />
        <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
    </ContainerPage>
  )
}

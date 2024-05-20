import { unstable_setRequestLocale } from "next-intl/server"

import { HeadingOneTitlePage } from "@/components/ui/heading"

export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale)
  return (
    <main className="mx-auto max-w-5xl px-4 py-24">
      <section className="mx-auto w-full text-left">
        <HeadingOneTitlePage text="Przyszłość Przemysłu" />
      </section>
      <article className="text-muted-foreground mb-6 px-0 text-lg"></article>
    </main>
  )
}

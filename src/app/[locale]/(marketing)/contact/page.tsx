import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { getLocalePrimaryDialects } from "@/lib/locales"
import { TextRevealCard } from "@/components/ui/text-reveal-card"
import { ContactForm } from "@/components/Form"
import { genPageMetadata } from "@/app/seo"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  const locale = resolvedParams.locale
  const t = await getTranslations({ locale, namespace: "ContactMeta" })
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

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  setRequestLocale(resolvedParams.locale)
  const t = await getTranslations("ContactMeta")
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-12 md:py-24">
      <TextRevealCard text={t("contact")} />
      <section className="mx-auto grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <ContactForm />
        <section className="order-1 mx-auto max-w-[500px] px-4 py-2 sm:order-2 md:px-0">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              className="mx-auto mb-4 size-36 rounded-full"
              src="/images/ceo.jfif"
              alt={t("ggPhoto")}
              width={144}
              height={144}
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              dr inż. Grzegorz Góral
            </h3>
            <p>ggoral@multiprojekt.pl</p>
          </div>
        </section>
      </section>
    </main>
  )
}

import { genPageMetadata } from "@/app/seo";
import { ContactForm } from "@/components/Form";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "ContactMeta" });
  const title = t('title');
  const description = t('desc');
  const keywords = t('keywords');
  const localeShort = getLocalePrimaryDialects(locale);
  const obj = {
    title,
    description,
    keywords,
    localeShort,
  }
  return genPageMetadata(obj)
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("ContactMeta")
  return (
    <main className="container max-w-screen-lg px-4 py-6 lg:px-0 lg:py-10">
      <TextRevealCard
        text={t("contact")}
      />
      <section className="mx-auto flex w-full max-w-5xl flex-wrap-reverse">
        <section className="mx-auto w-full max-w-[500px] py-2 md:px-0">
          <ContactForm />
        </section>
        <section className="mx-auto max-w-[500px] px-4 py-2 md:px-0">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image className="mx-auto mb-4 size-36 rounded-full" src="/images/ceo.jfif" alt={t('ggPhoto')} width={144} height={144} />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">dr inż. Grzegorz Góral</a>
            </h3>
            <p>ggoral@multiprojekt.pl</p>
          </div>
        </section>
      </section>
    </main>
  );
}
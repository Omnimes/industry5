import { ContainerPage } from "@/components/layout/ContainerPage";
import { HeadingOneTitlePage } from "@/components/ui/heading";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const t = await getTranslations('EuropeanUnion');

    return (
        <ContainerPage>
        <HeadingOneTitlePage text={t("title")} />
        <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
    </ContainerPage>
    );
}
import { ContainerPage } from "@/components/layout/ContainerPage";
import { HeadingOneTitlePage } from "@/components/ui/heading";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function EuApplicationsPage({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const t = await getTranslations('EuApplicationsPage');
    return (
        <ContainerPage>
        <HeadingOneTitlePage text={t('title')} />
            <article className="text-muted-foreground mb-6 px-0 lg:text-lg"></article>
        </ContainerPage>
    );
}
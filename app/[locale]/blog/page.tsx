import { genPageMetadata } from "@/app/seo";
import { getLocalePrimaryDialects } from "@/lib/locales";
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 900;
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "Metadata" });
    const title = t('blog_title');
    const description = t('blog_desc');
    const keywords = t('blog_keywords');
    const localeShort = getLocalePrimaryDialects(locale);
    const obj = {
        title,
        description,
        keywords,
        localeShort,
    }
    const meta = genPageMetadata(obj)

    return meta
}

export default async function BlogPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    //   const t = await getTranslations('Blog');

    return (
        <main>
            BLOG
        </main>
    );
}
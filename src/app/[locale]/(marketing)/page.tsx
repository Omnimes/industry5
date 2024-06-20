import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { AfterHero } from '@/components/AfterHero';
import { Content } from '@/components/Content';
import { Content2 } from '@/components/Content2';
import { Content3 } from '@/components/Content3';
import { Content4 } from '@/components/Content4';
import { Content5 } from '@/components/Content5';
import { getLocalePrimaryDialects } from '@/lib/locales';
import { genPageMetadata } from '@/app/seo';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale, namespace: "HomeMeta" });
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
  
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <main className="overflow-hidden">
            <Hero />
            <AfterHero />
            <Content />
            <Content5 />
            <Content3 />
            <Content4 />
            <Content2 />
        </main>
    )
}
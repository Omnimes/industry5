import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { AfterHero } from '@/components/AfterHero';
import { Content } from '@/components/Content';
import { Content2 } from '@/components/Content2';
import { Content3 } from '@/components/Content3';
import { Content4 } from '@/components/Content4';
import { Content5 } from '@/components/Content5';
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    return (
        <main>
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
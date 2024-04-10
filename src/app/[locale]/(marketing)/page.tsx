import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { AfterHero } from '@/components/AfterHero';
import { Content } from '@/components/Content';
import { Content2 } from '@/components/Content2';
import { Content3 } from '@/components/Content3';
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <AfterHero />
            <Content />
            <Content2 />
            {/* <Content3 /> */}
            <TailwindIndicator />
        </main>
    )
}
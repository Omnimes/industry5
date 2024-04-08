import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { AfterHero } from '@/components/AfterHero';
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <main>
            <Hero />
            <AfterHero />
            <TailwindIndicator />
        </main>
    )
}
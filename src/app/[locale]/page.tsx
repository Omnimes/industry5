import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
import { Navbar } from '@/components/navbar/navbar';
import { TailwindIndicator } from '@/components/tailwind-indicator';
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <main>
            <Navbar />
            <Hero />
            <TailwindIndicator />
        </main>
    )
}
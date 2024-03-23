import { unstable_setRequestLocale } from 'next-intl/server';
import { Hero } from "@/components/Hero"
export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <main>
            <Hero />
        </main>
    )
}
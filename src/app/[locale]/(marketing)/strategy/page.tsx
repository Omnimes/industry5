import { unstable_setRequestLocale } from 'next-intl/server'

export default function StrategyPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale)
    return (
        <main>
            Strategia
        </main>
    )
}

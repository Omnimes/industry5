import { unstable_setRequestLocale } from 'next-intl/server'

export default function IndustryPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale)
    return (
        <main>
            Przemysl 5.0
        </main>
    )
}

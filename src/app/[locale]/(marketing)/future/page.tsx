import { unstable_setRequestLocale } from 'next-intl/server'

export default function FuturePage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale)
    return (
        <main>
            Przyszłość Przemysłu
        </main>
    )
}

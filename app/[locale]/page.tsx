import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">elo</h1>
        </div>
    )
}
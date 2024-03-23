import { unstable_setRequestLocale } from "next-intl/server";

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    return (
        <main>
            Unia Europejska
        </main>
    );
}
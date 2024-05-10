import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar/navbar"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Footer } from "@/components/Footer";

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export default function MarketingLayout({ children, params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    return (
        <main className="relative flex min-h-screen flex-col">
            <Navbar />
            {children}
            {/* <TailwindIndicator /> */}
            <Footer />
        </main>
    )
}
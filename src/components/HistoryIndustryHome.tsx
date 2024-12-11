import { useTranslations } from "next-intl"
import { MyLink } from "./ui/link"
import BlurFade from "./ui/blur-fade";
export const HistoryIndustryHome = () => {
    const t = useTranslations("Content5");
    const taria = useTranslations("AriaLabel");
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
            <BlurFade delay={0.2} inView className="mx-auto w-full text-left md:text-center">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    {t("head1")}
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
                        {t("head1span")}
                    </span>
                </h2>
                <p className="text-muted-foreground text-balance px-0 text-lg md:text-xl">
                    {t("p1")}
                </p>
                <MyLink href="/history" aria-label={taria("footerAria") + t("link")} text={t("link")} className="mt-12" />
            </BlurFade>
        </section>
    )
}
import { useTranslations } from "next-intl"
import { MyLink } from "./ui/link"
export const Content5 = () => {
    const t = useTranslations("Content5")
    return (
        <section className="mx-auto max-w-5xl px-4 py-12 md:py-24">
            <div className="mx-auto w-full text-left md:text-center">
                <h2 data-aos="fade-up" className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                {t("head1")}
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
                    {t("head1span")}
                    </span>
                </h2>
                <p data-aos="fade-up" data-aos-delay="300" className="text-muted-foreground mb-6 px-0 text-lg md:text-xl">
                {t("p1")}
                </p>
                <MyLink data-aos="fade-up" data-aos-delay="500" href="/history" text={t("link")} />
            </div>
        </section>
    )
}
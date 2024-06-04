import Image from "next/image"
import { MyLink } from "./ui/link"
import { useTranslations } from "next-intl"
export const AfterHero = () => {
    const t = useTranslations("AfterHero");
    return (
        <section id="industry" className="mx-auto max-w-5xl px-4 py-12 md:py-24">
            <div className="mx-auto mb-16 w-full text-left md:text-center">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    {t("title")}
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">{t("title2")}</span>
                </h2>
                <p className="text-muted-foreground px-0 text-lg md:text-xl">{t("p1")}</p>
            </div>
            <section className="mx-auto lg:flex lg:justify-center">
                <div
                    className="overflow-hidden rounded-t-md lg:flex lg:w-full lg:max-w-5xl lg:rounded-xl lg:shadow-md">
                    <div className="lg:w-1/2">
                        <Image src={"/images/2.png"} alt={t('altImg')} width={1260} height={1260} className="h-64 object-cover lg:h-full" />
                    </div>
                    <div className="mx-auto w-full px-0 py-8 text-left md:w-11/12 md:px-6 md:text-center lg:w-1/2 lg:max-w-5xl lg:text-left">
                        <h3 className="font-heading mb-3 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left dark:text-white">{t('h3')}</h3>
                        <p className="md:text-md text-muted-foreground mb-3 px-0">{t('p2')}</p>
                        <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                            <MyLink href="/industry" text={t("link")} />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
import Image from "next/image"
import { MyLink } from "./ui/link";
import { useTranslations } from "next-intl";
import BlurFade from "./ui/blur-fade";
import { BorderBeam } from "./ui/border-beam";
export const WhyIndustry = () => {
    const t = useTranslations("Content");
    const taria = useTranslations("AriaLabel");
    return (
        <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
            <BlurFade delay={0.2} inView className="mx-auto mb-16 md:mb-20 w-full text-left md:text-center">
                <h2 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                    {t("head1")}
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent">{t("head1span")}</span>
                </h2>
                <p className="text-muted-foreground px-0 text-lg md:text-xl text-balance">{t("p1")}</p>
            </BlurFade>
            <BlurFade delay={0.2} inView className="mx-auto lg:flex lg:justify-center relative rounded-md lg:rounded-xl overflow-hidden">
                <BorderBeam size={500} duration={12} delay={9} className="hidden md:block" />
                <div className="grid lg:grid-cols-2 gap-10 items-center h-full sm:mx-auto">
                    <Image src={"/images/3.png"} alt={t("altImg")} width={1260} height={750} className="h-auto max-h-[330px] object-cover lg:order-2" />
                    <div className="mx-auto w-full px-0 py-8 text-left md:px-6 md:text-center lg:text-left">
                        <h3 className="font-heading mb-3 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left dark:text-white">
                            {t("head2")}
                        </h3>
                        <p className="text-muted-foreground mb-3 px-0">
                            <span className="font-bold">{t("p2span")}</span> {t("p2")}
                        </p>
                        <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                            <MyLink href="/future" aria-label={taria("footerAria") + t("link")} text={t("link")} />
                        </div>
                    </div>
                </div>
            </BlurFade>
        </section>
    );
};
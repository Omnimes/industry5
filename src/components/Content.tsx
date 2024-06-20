import Image from "next/image"
import { MyLink } from "./ui/link";
import { useTranslations } from "next-intl";
export const Content = () => {
    const t = useTranslations("Content")
    return (
        <>
            <section className="mx-auto max-w-5xl px-4 pt-12 md:pt-24">
                <div className="mx-auto w-full text-left md:text-center">
                    <h2 data-aos="fade-up" className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:flex md:flex-col md:items-center md:text-4xl md:leading-none md:tracking-tight lg:text-5xl dark:text-white">
                        {t("head1")}
                        <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent ">
                            {t("head1span")}
                        </span>
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-muted-foreground mb-16 px-0 text-lg md:text-xl">{t("p1")}</p>
                </div>
            </section>
            <section className="mx-auto pb-24 lg:flex lg:justify-center">
                <div className="px-4 md:max-w-full lg:max-w-5xl lg:px-0">
                    <div className="flex max-w-screen-lg flex-col overflow-hidden rounded sm:mx-auto md:shadow-sm lg:flex-row lg:border">
                        <div className="relative lg:w-1/2">
                            <Image data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay="500" src={"/images/3.png"} alt={t("altImg")} width={1260} height={750} className="h-80 w-full object-cover lg:absolute lg:h-full" />
                            <svg
                                className="absolute right-0 top-0 hidden h-full translate-x-1 fill-[#ffffff] text-white lg:inline-block dark:fill-[#030711]"
                                viewBox="0 0 20 104"
                            >
                                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                            </svg>
                        </div>
                        <div data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="500" className="mx-auto w-full px-0 py-8 text-left md:w-11/12 md:px-6 md:text-center lg:w-1/2 lg:max-w-5xl lg:text-left">
                            <h3 className="font-heading mb-3 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-left dark:text-white">
                                {t("head2")}
                            </h3>
                            <p className="text-muted-foreground md:text-md mb-3 px-0">
                                <span className="font-bold">{t("p2span")}</span> {t("p2")}
                            </p>
                            <div className="flex w-full items-center justify-start md:justify-center lg:justify-start">
                                <MyLink href="/future" text={t("link")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};
import CustomLink from '@/components/mdx/custom-link'
import { unstable_setRequestLocale } from 'next-intl/server'
import orient_people from "../../../../../public/images/orient_people.png"
import odpornosc from "../../../../../public/images/odpornosc.png"
import eco from "../../../../../public/images/eco.png"
import Image from "next/image";
import { useTranslations } from 'next-intl'

export default function StrategyPage({ params: { locale } }: { params: { locale: string } }) {
    // Enable static rendering
    unstable_setRequestLocale(locale);
    const t = useTranslations('Strategy');

    return (
        <main className="mx-auto max-w-5xl px-4 py-24">
            <section className="mx-auto w-full text-left">
                <h1 className="font-heading mb-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:text-center md:text-4xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-5xl dark:text-white">
                    <span className="block w-full bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                        {t("title")}
                    </span>
                </h1>
                <article className="mb-6 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
                <Image src={orient_people.src} alt={t("alt_orient")} width={2084} height={1000} className="my-3 rounded-lg shadow-lg" />
                <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                    {t("text1")}
                    </span>
                </h2>
                        
                            <p className="mb-6 mt-2 space-y-1 px-0 text-lg text-gray-600 md:text-xl dark:text-gray-400">
                                {t("p1")}
                                &nbsp;<CustomLink href={"https://www.iso.org/standard/64239.html"} openNewTab={true} className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline">ISO 27500:2016</CustomLink>
                                &nbsp;{t("p2")}
                                &nbsp;<CustomLink href={"https://www.iso.org/standard/64241.html"} openNewTab={true} className="bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent underline-offset-4 hover:underline lg:inline">ISO 27501:2019</CustomLink>
                                &nbsp;{t("p3")}
                            </p>
                            <ul className="mb-6 mt-2 list-inside list-disc space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">
                                {t("p4")}
                                <li className="pl-4 pt-4">{t("list1")}</li>
                                <li className="pl-4">{t("list2")}</li>
                                <li className="pl-4">{t("list3")}</li>
                                <li className="pl-4">{t("list4")}</li>
                                <li className="pl-4">{t("list5")}</li>
                                <li className="pl-4">{t("list6")}</li>
                                <li className="pl-4">{t("list7")}</li>
                            </ul>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p5")}</p>


                      
                            <Image src={odpornosc.src} alt={t("alt_odpornosc")} width={1260} height={536} className="my-3 rounded-lg shadow-lg" />
                            <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                    {t("text2")}
                    </span>
                </h2>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p6")}</p>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p7")}</p>
                            <ol className="list-inside list-decimal space-y-4  text-gray-600 md:text-xl dark:text-gray-400">
                                <li>{t("ol_li_title1")}
                                    <ul>
                                        <li className="pl-6">{t("ol_li_res1")}</li>
                                    </ul>
                                </li>
                                <li>{t("ol_li_title2")}
                                    <ul>
                                        <li className="pl-6">{t("ol_li_res2")}</li>
                                    </ul>
                                </li>
                                <li>{t("ol_li_title3")}
                                    <ul>
                                        <li className="pl-6">{t("ol_li_res3")}</li>
                                    </ul>
                                </li>
                                <li>{t("ol_li_title4")}
                                    <ul>
                                        <li className="pl-6">{t("ol_li_res4")}</li>
                                    </ul>
                                </li>
                                <li>{t("ol_li_title5")}
                                    <ul>
                                        <li className="pl-6">{t("ol_li_res5")}</li>
                                    </ul>
                                </li>
                            </ol>
                            <p className="mb-6 mt-4 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">Zmiana sposobu myślenia o zaawansowanej produkcji prowadzi do transformacji technologicznej, zarządzania oraz reguł pracy. Podjęcie wyzwań związanych z opisanymi zagadnieniami przyczyni się do pełnej implementacji inteligentnej fabryki. Nawiązanie współpracy z partnerami branżowymi, którzy również przyjęli ten sam model, przysłuży się budowie ekosystemu zgodnego z wymogami przemysłu 4.0.</p>

                            <Image src={eco.src} alt={t("alt_eco")} width={1260} height={536} className="my-3 rounded-lg shadow-lg" />
                            <h2 className="font-heading my-6 text-2xl tracking-normal text-gray-900 sm:text-3xl md:leading-none md:tracking-tight lg:flex lg:flex-col lg:text-2xl dark:text-white">
                    <span className="block w-fit bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent lg:inline">
                    {t("text3")}
                    </span>
                </h2>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p8")}</p>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p9")}</p>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p10")}</p>
                            <p className="mb-6 mt-2 space-y-1 px-0  text-lg text-gray-600 md:text-xl dark:text-gray-400">{t("p11")}</p>
                </article>
            </section>
        </main>
    )
}

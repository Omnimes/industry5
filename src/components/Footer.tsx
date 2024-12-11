import Link from "next/link";
import { siteConfig } from "@/data/config/site";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator"
import { TextHoverEffect } from "./ui/text-hover-effect";
import AnimatedShinyText from "./ui/shiny-text-badge";

export const Footer = () => {
    const t = useTranslations("Navbar");
    const tr = useTranslations("Footer");
    const taria = useTranslations("AriaLabel");
    return (
        <footer className="w-full py-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="-mb-0.5 w-full" viewBox="0 0 1367.743 181.155">
                <path
                    className="fill-current text-gray-100 dark:text-gray-900"
                    id="wave"
                    data-name="wave"
                    d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
                    transform="translate(1.743 66.155)"
                ></path>
            </svg>
            <section className="relative">
                <div className="absolute top-0 left-0 xl:-top-20 2xl:-top-48 flex w-full items-center justify-center">
                    <TextHoverEffect text="INDUSTRY5" />
                </div>
                <div className="bg-gradient-to-b from-gray-100 to-transparent pt-1 md:px-12 lg:px-28 dark:from-gray-900 dark:to-transparent">
                    <section className="mx-auto max-w-screen-xl px-4 py-12 md:py-24">
                        <div className="flex flex-col justify-between gap-8 md:flex-row">
                            <div className="flex flex-col">
                                <div className="flex z-10">
                                    <Logo />
                                    <AnimatedShinyText className="mx-0 inline-flex items-center justify-center px-4 py-1 text-3xl font-bold transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                                        Industry5
                                    </AnimatedShinyText>
                                </div>
                                <p className="py-8 text-left text-sm text-gray-500 md:max-w-xs z-10">{t("description")}</p>
                            </div>
                            <section className="flex gap-8">
                                <div>
                                    <h4 className="mb-7 text-lg font-medium text-gray-900 dark:text-white">Industry5</h4>
                                    <ul className="space-y-4 transition-all duration-500">
                                        {siteConfig.mainNav.map(item => {
                                            return (
                                                <li key={item.href} role="listitem" className="text-muted-foreground relative text-sm">
                                                    <Link
                                                        href={item.href}
                                                        aria-label={taria("footerAria") + t(item.title)}
                                                        rel="noreferrer noopener"
                                                        className="hover:text-primary z-10"
                                                    >
                                                        {t(item.title)}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="mb-7 text-lg font-medium text-gray-900 dark:text-white">{t("industry")}</h4>
                                    <ul className="space-y-4 transition-all duration-500">
                                        {siteConfig.subNav.map(item => {
                                            return (
                                                <li key={item.href} role="listitem" className="text-muted-foreground relative text-sm">
                                                    <Link
                                                        href={item.href}
                                                        rel="noreferrer noopener"
                                                        aria-label={taria("footerAria") + t(item.title)}
                                                        className="hover:text-primary z-10"
                                                    >
                                                        {t(item.title)}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
            <Separator />
            <div className="mt-8 px-2 text-center">
                <span className="text-sm tracking-wide">
                    {tr("Copyright")}&nbsp;
                    <span id="year">
                        - 2024
                    </span>&nbsp;
                    {tr("reserved")}
                </span>
            </div>
        </footer>
    )
}

const Logo = () => {
    const taria = useTranslations("AriaLabel")

    return (
        <Link
            href={"/"}
            aria-label={taria("footerLogoAria")}
            rel="noreferrer noopener"
            className="flex items-center justify-center"
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                width="50"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                height="50"
                preserveAspectRatio="xMidYMid meet"
                version="1.0">
                <defs>
                    <clipPath id="2d255f5dfb">
                        <path d="M 77 164 L 361.8125 164 L 361.8125 209 L 77 209 Z M 77 164 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="b7cd2c2336">
                        <path d="M 131 56 L 361.8125 56 L 361.8125 101 L 131 101 Z M 131 56 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="2ffa92b981">
                        <path d="M 251 110 L 361.8125 110 L 361.8125 155 L 251 155 Z M 251 110 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="f13b350655">
                        <path d="M 4.8125 164 L 56 164 L 56 209 L 4.8125 209 Z M 4.8125 164 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="9fc63a1d8b">
                        <path d="M 142 218 L 361.8125 218 L 361.8125 263 L 142 263 Z M 142 218 " clipRule="nonzero" />
                    </clipPath>
                    <clipPath id="338ba7096a">
                        <path d="M 164 273 L 361.8125 273 L 361.8125 318 L 164 318 Z M 164 273 " clipRule="nonzero" />
                    </clipPath>
                </defs>
                <g clipPath="url(#2d255f5dfb)">
                    <path fill="#0091ff" d="M 485.929688 164.800781 L 255.726562 164.800781 L 245.894531 181.796875 L 223.132812 181.796875 L 213.304688 164.800781 C 204.828125 164.800781 98.617188 164.800781 90.140625 164.800781 L 77.425781 186.820312 L 90.140625 208.839844 C 98.617188 208.839844 204.828125 208.839844 213.304688 208.839844 L 223.132812 191.84375 L 245.894531 191.84375 L 255.726562 208.839844 L 485.929688 208.839844 C 488.464844 194.292969 488.464844 179.394531 485.929688 164.800781 Z M 485.929688 164.800781 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#b7cd2c2336)">
                    <path fill="#0091ff" d="M 169.875 100.574219 L 179.707031 83.582031 L 202.46875 83.582031 L 212.296875 100.574219 L 455 100.574219 C 409.386719 49.152344 358.222656 56.492188 296.535156 56.492188 L 212.296875 56.492188 L 202.46875 73.488281 L 179.707031 73.488281 L 169.875 56.492188 L 144.445312 56.492188 L 131.734375 78.511719 L 144.445312 100.53125 L 169.875 100.53125 Z M 169.875 100.574219 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#2ffa92b981)">
                    <path fill="#0091ff" d="M 321.917969 127.664062 L 299.15625 127.664062 L 289.324219 110.667969 L 263.898438 110.667969 L 251.183594 132.6875 L 263.898438 154.707031 L 289.324219 154.707031 L 299.15625 137.710938 L 321.917969 137.710938 L 331.746094 154.707031 L 483.789062 154.707031 C 479.683594 138.628906 472.5625 123.730469 463.082031 110.625 L 331.746094 110.625 Z M 321.917969 127.664062 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#f13b350655)">
                    <path fill="#0091ff" d="M 17.527344 164.800781 L 4.8125 186.820312 L 17.527344 208.882812 L 42.996094 208.882812 L 55.710938 186.820312 L 42.996094 164.800781 Z M 17.527344 164.800781 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <path fill="#0091ff" d="M 178.570312 132.6875 L 191.285156 154.707031 L 216.753906 154.707031 L 229.46875 132.6875 L 216.753906 110.667969 L 191.285156 110.667969 Z M 178.570312 132.6875 " fillOpacity="1" fillRule="nonzero" />
                <path fill="#0091ff" d="M 104.425781 273.066406 L 91.667969 295.128906 L 104.425781 317.148438 L 129.855469 317.148438 L 142.570312 295.128906 L 129.855469 273.066406 Z M 104.425781 273.066406 " fillOpacity="1" fillRule="nonzero" />
                <g clipPath="url(#9fc63a1d8b)">
                    <path fill="#0091ff" d="M 213.304688 235.929688 L 190.539062 235.929688 L 180.710938 218.933594 L 155.28125 218.933594 L 142.570312 240.953125 L 155.28125 262.972656 L 180.710938 262.972656 L 190.539062 245.976562 L 213.304688 245.976562 L 223.132812 262.972656 L 463.039062 262.972656 C 472.519531 249.867188 479.640625 234.96875 483.746094 218.890625 C 404.097656 218.890625 302.738281 218.890625 223.089844 218.890625 Z M 213.304688 235.929688 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <g clipPath="url(#338ba7096a)">
                    <path fill="#0091ff" d="M 278.488281 290.105469 L 255.726562 290.105469 L 245.894531 273.109375 C 222.957031 273.109375 199.976562 273.109375 176.996094 273.109375 L 164.28125 295.128906 L 176.996094 317.148438 C 199.976562 317.148438 222.914062 317.148438 245.894531 317.148438 L 255.726562 300.152344 L 278.488281 300.152344 L 288.320312 317.148438 C 353.460938 317.148438 408.207031 325.84375 455 273.066406 L 288.320312 273.066406 Z M 278.488281 290.105469 " fillOpacity="1" fillRule="nonzero" />
                </g>
                <path strokeLinecap="round" transform="matrix(0, 0.75, -0.75, 0, 370.183574, 30.878904)" fill="none" strokeLinejoin="miter" d="M 8.500003 8.499974 L 409.171905 8.499974 " stroke="#0091ff" strokeWidth="17" strokeOpacity="1" strokeMiterlimit="4" />
            </svg>
        </Link>);
}